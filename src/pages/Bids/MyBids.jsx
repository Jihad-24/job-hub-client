import { useEffect, useState } from "react";
import MyBidsRow from "./MyBidsRow";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyBids = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const [myBids, setMyBids] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axiosSecure.get('http://localhost:5000/mybids');
                const data = await response.data;
                // console.log(data);
                const myJobs = data?.filter(item => item.email === userEmail);
                myJobs.sort((a, b) => {
                    const customStatusOrder = ['pending', 'in progress', 'complete', 'reject'];
                    return customStatusOrder.indexOf(a.status) - customStatusOrder.indexOf(b.status);
                });
                setMyBids(myJobs);

            } catch (error) {
                console.error('Error while fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userEmail, axiosSecure]);


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

    const handleBidComplete = id => {
        fetch(`http://localhost:5000/mybids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'complete' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myBids.filter(booking => booking._id !== id);
                    const updated = myBids.find(booking => booking._id === id);
                    console.log(updated);
                    updated.status = 'complete';
                    const newBookings = [updated, ...remaining];
                    setMyBids(newBookings);
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>JobHub | My Bids</title>
                <link rel="shortcut icon" href="../../../public/my_bid.png" type="image/x-icon" />
            </Helmet>
            {
                isLoading ?
                    <div>Loading...</div>
                    :
                    (myBids?.length ?
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
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
                                            handleBidComplete={handleBidComplete}
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