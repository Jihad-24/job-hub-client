import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const JobDetails = () => {
    const id = useParams();
    // console.log(id);
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const foundCard = data?.find(card => card?._id === id.id);
                setCardData(foundCard);
            })
            .catch(error => {
                console.error('Error fetching job data', error);
            });
    }, [id])

    return (
        <div className="">
            <div className="mx-auto flex justify-around">
                <div className="card w-96 my-4 card-compact bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={cardData?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cardData?.job_title}</h2>
                        <p>Price Range: {cardData?.price_range}</p>
                        <p>Deadline: {cardData?.deadline}</p>
                        <p>Description: {cardData?.short_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;