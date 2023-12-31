import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";


const JobDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [btnBlock, setBtnBlock] = useState(null);
    const [cardData, setCardData] = useState(null);
    const navigate = useNavigate();
    const [clickedId, setClickedId] = useState(null);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`https://b8a11-server-side-jihad-24.vercel.app/jobs/${id}`)
            .then((response) => {
                const foundCard = response.data;
                // console.log(foundCard);
                setCardData(foundCard);
            })
            .catch((error) => {
                console.error('Error fetching job data', error);
            });
    }, [id, axiosSecure]);

    useEffect(() => {
        axiosSecure.get('https://b8a11-server-side-jihad-24.vercel.app/mybids')
            .then((response) => {
                const data = response.data;
                const button = data?.find((item) => item.email === user?.email);
                const buttonid = data?.find((item) => item.job_id === cardData?._id);
                setBtnBlock(button);
                setClickedId(buttonid);
            })
            .catch((error) => {
                console.error('Error while fetching data:', error);
            });
    }, [user, cardData, axiosSecure]);

    const handleAddBid = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const buyer = form.buyer.value;
        const price = form.price.value;
        const status = 'pending';
        const job_id = cardData?._id;
        const jobTitle = cardData?.job_title;
        const deadline = form.deadline.value;

        const newProduct = { jobTitle, email, buyer, price, deadline, job_id, status }
        // console.log(newProduct);

        // send data to the server
        fetch('https://b8a11-server-side-jihad-24.vercel.app/mybids', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/mybids')
                }

            })
    }


    return (
        <div className="">
            <Helmet>
                <title>JobHub | Job Details</title>
                <link rel="shortcut icon" href="../../../public/icons/add_job.png" type="image/x-icon" />
            </Helmet>
            <div className="mx-auto flex justify-around">
                <div className="card w-96 my-4 card-compact">
                    <figure><img className='w-full' src={cardData?.image} alt="Shoes" data-aos="fade-up" /></figure>
                    <div className="card-body">
                        <h2 className="card-title" data-aos="fade-left">{cardData?.job_title}</h2>
                        <p data-aos="fade-right">Price Range: {cardData?.price_range}</p>
                        <p data-aos="fade-left">Deadline: {cardData?.deadline}</p>
                        <p data-aos="fade-right">Description: {cardData?.short_description}</p>
                    </div>
                </div>
            </div>
            <div className=' pb-24'>
                <h1 className='text-center font-extrabold mb-10 text-purple-500 text-4xl'>Place Your Bid</h1>
                <form onSubmit={handleAddBid}>
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Email Address</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Email</span>
                                <input type="text" name='email' defaultValue={user?.email} className="input input-bordered w-full" disabled />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Buyer Email Address</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Buyer</span>
                                <input type="text" name='buyer' defaultValue={user?.email} className="input input-bordered w-full"  readOnly/>
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Price Range</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Price</span>
                                <input type="text" name='price' placeholder={cardData?.price_range} className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Deadline</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Date</span>
                                <input type="date" name='deadline' defaultValue={cardData?.deadline} className="input input-bordered w-full" required readOnly/>
                            </label>
                        </div>

                    </div>
                    <input
                        className='btn btn-block bg-[#D2B48C]'
                        type="submit"
                        value="Bid on the project"
                        disabled={user?.email === btnBlock?.email && cardData && cardData._id === clickedId?.job_id}
                    />
                </form>

            </div>
        </div>
    );
};

export default JobDetails;