import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJob = () => {
    const loadedJobs = useLoaderData();
    const { _id, email, deadline, miniprice, jobtitle, description, maxprice, category } = loadedJobs;
    const navigate = useNavigate();

    const handleUpdateJob = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const jobtitle = form.jobtitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const miniprice = form.miniprice.value;
        const maxprice = form.maxprice.value;
        const category = form.category.value;

        const updatedJob = { email, deadline, miniprice, jobtitle, description, maxprice, category }
        // console.log(updatedJob);

        // send data to the server
        fetch(`https://b8a11-server-side-jihad-24.vercel.app/mypostedjobs/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    navigate('/mypostedjobs')
                }

            })
    }
    return (
        <div className="mx-3">
            <Helmet>
                <title>JobHub | Update Job</title>
                <link rel="shortcut icon" href="../../../public/icons/add_job.png" type="image/x-icon" />
            </Helmet>
            <div className='md:py-20 py-10 px-3'>
                <h1 className='text-center font-extrabold mb-10 text-purple-500 text-2xl md:text-4xl'>Update Job</h1>
                <form onSubmit={handleUpdateJob}>
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Email of The Employer</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Email</span>
                                <input type="text" name='email' defaultValue={email} className="input input-bordered w-full" disabled />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Job Title</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Title</span>
                                <input type="text" name='jobtitle' placeholder="Your Job Title" className="input input-bordered w-full" defaultValue={jobtitle} />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Job Deadline</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Deadline</span>
                                <input type="date" name='deadline' placeholder="Enter Job Deadline" className="input input-bordered w-full" defaultValue={deadline} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Job Description</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Details</span>
                                <input type="text" name='description' placeholder="Enter Short description" className="input input-bordered w-full" defaultValue={description} />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Job Minimum price</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Minimum</span>
                                <input type="text" name='miniprice' placeholder="Enter Short description" className="input input-bordered w-full" defaultValue={miniprice} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className='label-text font-bold'>Job Maximum price
                                </span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Maximum</span>
                                <input type="text" name='maxprice' placeholder="Enter Maximum price" className="input input-bordered w-full" defaultValue={maxprice} />
                            </label>
                        </div>
                    </div>
                    <div className='mb-8'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className='label-text font-bold'>Select a Job Category</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Category</span>
                                <select className="w-full" name="category" defaultValue={category}>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <input className='btn btn-block bg-[#D2B48C]' type="submit" value="Update Job" />
                </form>

            </div>
        </div>
    );
};

export default UpdateJob;