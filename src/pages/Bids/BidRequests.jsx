import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BidReqRow from "./BidReqRow";
import { Helmet } from "react-helmet";


const BidRequests = () => {
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

    const handleBidReject = id => {
        fetch(`http://localhost:5000/mybids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'reject' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myBids.filter(booking => booking._id !== id);
                    const updatedBid = myBids.find(booking => booking._id === id);
                    // console.log(updatedBid);
                    updatedBid.status = 'reject';
                    const newBids = [updatedBid, ...remaining];
                    setMyBids(newBids);
                }
            })
    }

    const handleBidAccept = id => {
        fetch(`http://localhost:5000/mybids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'in progress' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myBids.filter(booking => booking._id !== id);
                    const updatedBid = myBids.find(booking => booking._id === id);
                    // console.log(updatedBid);
                    updatedBid.status = 'in progress';
                    const newBids = [updatedBid, ...remaining];
                    setMyBids(newBids);
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>JobHub | Bid Requests</title>
                <link rel="shortcut icon" href="../../../public/bid_requests.png" type="image/x-icon"/>
            </Helmet>
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
                                        <th>Job title</th>
                                        <th>Email</th>
                                        <th>Deadline</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Progress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myBids?.map(Bid => <BidReqRow
                                            key={Bid._id}
                                            Bid={Bid}
                                            handleBidReject={handleBidReject}
                                            handleBidAccept={handleBidAccept}
                                        ></BidReqRow>)
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

export default BidRequests;