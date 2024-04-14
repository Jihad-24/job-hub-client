import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [myJobs, setMyJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    setIsLoading(true);

    axiosSecure
      .get("https://b8a11-server-side-jihad-24.vercel.app/mypostedjobs")
      .then((response) => {
        const data = response.data;
        const jobs = data?.filter((item) => item.email === userEmail);
        setMyJobs(jobs);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userEmail, axiosSecure]);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        fetch(
          `https://b8a11-server-side-jihad-24.vercel.app/mypostedjobs/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Job has been deleted.", "success");
              const remaining = myJobs?.filter((card) => card._id !== id);
              setMyJobs(remaining);
            }
          });
      }
    });
  };

  const displayedJobs = myJobs?.slice(0, displayCount);

  return (
    <div className="py-10 mx-3">
      <Helmet>
        <title>JobHub | My Posted Job</title>
        <link
          rel="shortcut icon"
          href="../../../public/icons/my_jobs.png"
          type="image/x-icon"
        />
      </Helmet>
      {isLoading ? (
        <div>Loading...</div>
      ) : displayedJobs?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3">
          {displayedJobs?.map((job) => (
            <div key={job._id}>
              <div className="card card-compact bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title" data-aos="fade-right">
                    Job Title: {job.jobtitle}
                  </h2>
                  <h3 data-aos="fade-left">Category: {job.category}</h3>
                  <h3 data-aos="fade-right">Email: {job.email}</h3>
                  <p data-aos="fade-left">
                    Minimum price: {"$" + job.miniprice}
                  </p>
                  <p data-aos="fade-right">
                    Maximum price: {"$" + job.maxprice}
                  </p>
                  <p data-aos="fade-left">Deadline: {job.deadline}</p>
                  <p data-aos="fade-right">Description: {job.description}</p>
                  <div className="card-actions justify-center">
                    <Link
                      to={`/updatejob/${job._id}`}
                      className="btn btn-primary"
                      data-aos="fade-up"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="btn btn-secondary"
                      data-aos="fade-up"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mx-auto md:w-[700px] lg:w-[1100px]">
          <h1 className="font-bold loading-10  text-3xl">
            <span className="font-extrabold text-red-600" data-aos="fade-down">
              {" "}
              Oops,{" "}
            </span>{" "}
            <br />
            it seems like there are currently no <br /> Job has been added.
            Please <br /> add new Job to see them.
          </h1>
        </div>
      )}
      {myJobs?.length > displayCount && (
        <div className="effectbtn flex justify-center items-center text-center mt-10 rounded-full">
          <button
            className="btn btn-secondary btn-outline cursor-pointer rounded-full"
            onClick={() => setDisplayCount(displayCount + 3)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default MyPostedJobs;
