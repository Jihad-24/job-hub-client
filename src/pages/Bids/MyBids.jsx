import { useEffect, useState } from "react";
import MyBidsRow from "./MyBidsRow";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const MyBids = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const [myBids, setMyBids] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/mybids`)
            .then(res => res.json())
            .then(data => {
                const myJobs = data?.filter(item => item.email === userEmail);
                setMyBids(myJobs);
                setIsLoading(false);
            })
            .catch(eror => {
                console.log(eror.message);
            })
    }, [userEmail])

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
            body: JSON.stringify({ status: 'pending' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myBids.filter(booking => booking._id !== id);
                    const updated = myBids.find(booking => booking._id === id);
                    console.log(updated);
                    updated.status = 'reject';
                    const newBookings = [updated, ...remaining];
                    setMyBids(newBookings);
                }
            })
    }

    return (
        <div>
            {
                isLoading ?
                    <div>Loading...</div>
                    :
                    (myBids?.length ?
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>

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
                        :
                        <div className="text-center mx-auto md:w-[700px] lg:w-[1100px]">
                            <h1 className="font-bold loading-10  text-3xl">
                                <span className="font-extrabold text-red-600" data-aos="fade-down"> Oops, </span> <br />
                                it seems like there are currently no <br /> Bid has been added. Please <br /> add new Bid to see them.
                            </h1>
                        </div>

                    )
            }
        </div>
    );
};

export default MyBids;