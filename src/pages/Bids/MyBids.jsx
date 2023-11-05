import { useEffect, useState } from "react";
import MyBidsRow from "./MyBidsRow";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const MyBids = () => {
    const { user } = useAuth();
    const [myBids, setMyBids] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/mybids?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBids(data);
            })
    }, [user])

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result?.isConfirmed) {
                fetch(`http://localhost:5000/mybids/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Bid has been deleted.',
                                'success'
                            )
                            const remaining = myBids?.filter(prod => prod._id !== id)
                            setMyBids(remaining);
                        }
                    })
            }
        })
    }

    const handleBidConfirm = id => {
        fetch(`http://localhost:5000/mybids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myBids.filter(booking => booking._id !== id);
                    const updated = myBids.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setMyBids(newBookings);
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Job title</th>
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBids?.map(booking => <MyBidsRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBidConfirm={handleBidConfirm}
                            ></MyBidsRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBids;