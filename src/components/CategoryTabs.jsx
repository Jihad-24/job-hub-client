import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CategoryTabs = () => {
  const [webDevelopmentJobs, setWebDevelopmentJobs] = useState([]);
  const [digitalMarketingJobs, setDigitalMarketingJobs] = useState([]);
  const [graphicDesignJobs, setGraphicDesignJobs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const axiosSecure = useAxiosSecure();
  const [displayWebCount, setDisplayWrbCount] = useState(3);
  const [displayDigiCount, setDisplayDigiCount] = useState(3);
  const [displayGraphCount, setDisplayGraphCount] = useState(3);

  useEffect(() => {
    axiosSecure
      .get("https://b8a11-server-side-jihad-24.vercel.app/jobs")
      .then((res) => {
        const jobData = res.data;
        const webDevelopmentData = jobData.filter(
          (job) => job.category === "Web Development"
        );
        const digitalMarketingData = jobData.filter(
          (job) => job.category === "Digital Marketing"
        );
        const graphicDesignData = jobData.filter(
          (job) => job.category === "Graphic Design"
        );

        setWebDevelopmentJobs(webDevelopmentData);
        setDigitalMarketingJobs(digitalMarketingData);
        setGraphicDesignJobs(graphicDesignData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [axiosSecure]);

  const displayedwebDevelopmentJobs = webDevelopmentJobs?.slice(
    0,
    displayWebCount
  );
  const displayeddigitalMarketingJobs = digitalMarketingJobs?.slice(
    0,
    displayDigiCount
  );
  const displayedgraphicDesignJobs = graphicDesignJobs?.slice(
    0,
    displayGraphCount
  );

  return (
    <Tabs
      className="my-12"
      selectedIndex={activeTab}
      onSelect={(tabIndex) => setActiveTab(tabIndex)}
    >
      <TabList className="mb-6 flex flex-col md:flex-row space-x-2 space-y-2 rounded justify-center items-center">
        <Tab
          className={`ml-2 px-8 py-2 mt-2 cursor-pointer rounded 
                ${activeTab === 0 ? "" : "bg-red-500 text-white"}`}
          data-aos="fade-right"
        >
          Web Development
        </Tab>
        <Tab
          className={`px-8 py-2 cursor-pointer rounded 
                ${activeTab === 1 ? "" : "bg-red-500 text-white"}`}
          data-aos="fade-up"
        >
          Digital Marketing
        </Tab>
        <Tab
          className={`px-8 py-2 cursor-pointer rounded 
                ${activeTab === 2 ? "" : "bg-red-500 text-white"}`}
          data-aos="fade-left"
        >
          Graphic Design
        </Tab>
      </TabList>

      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedwebDevelopmentJobs.map((job) => (
            <div key={job._id}>
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                    data-aos="fade-up"
                    className="h-48 w-full"
                    src={job.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title" data-aos="fade-left">
                    {job.job_title}
                  </h2>
                  <p data-aos="fade-right">Price Range: {job.price_range}</p>
                  <p data-aos="fade-left">Deadline: {job.deadline}</p>
                  <p data-aos="fade-right">
                    Description: {job.short_description}
                  </p>
                  <div className="card-actions justify-end" data-aos="fade-up">
                    <Link to={`/jobs/${job._id}`} className="btn btn-primary">
                      Bid Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {webDevelopmentJobs?.length > displayWebCount && (
          <div className="flex justify-center items-center text-center mt-10 rounded-full">
            <button
              className="btn btn-secondary btn-outline cursor-pointer rounded-full"
              onClick={() => setDisplayWrbCount(displayWebCount + 3)}
            >
              Show More
            </button>
          </div>
        )}
      </TabPanel>

      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayeddigitalMarketingJobs.map((job) => (
            <div key={job._id}>
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                    data-aos="fade-up"
                    className="h-48 w-full"
                    src={job.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title" data-aos="fade-left">
                    {job.job_title}
                  </h2>
                  <p data-aos="fade-right">Price Range: {job.price_range}</p>
                  <p data-aos="fade-left">Deadline: {job.deadline}</p>
                  <p data-aos="fade-right">
                    Description: {job.short_description}
                  </p>
                  <div className="card-actions justify-end" data-aos="fade-up">
                    <Link to={`/jobs/${job._id}`} className="btn btn-primary">
                      Bid Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {digitalMarketingJobs?.length > displayDigiCount && (
          <div className=" flex justify-center items-center text-center mt-10 rounded-full">
            <button
              className="btn btn-secondary btn-outline cursor-pointer rounded-full"
              onClick={() => setDisplayDigiCount(displayDigiCount + 3)}
            >
              Show More
            </button>
          </div>
        )}
      </TabPanel>

      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedgraphicDesignJobs.map((job) => (
            <div key={job._id}>
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                    data-aos="fade-up"
                    className="h-48 w-full"
                    src={job.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title" data-aos="fade-left">
                    {job.job_title}
                  </h2>
                  <p data-aos="fade-right">Price Range: {job.price_range}</p>
                  <p data-aos="fade-left">Deadline: {job.deadline}</p>
                  <p data-aos="fade-right">
                    Description: {job.short_description}
                  </p>
                  <div className="card-actions justify-end" data-aos="fade-up">
                    <Link to={`/jobs/${job._id}`} className="btn btn-primary">
                      Bid Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {graphicDesignJobs?.length > displayGraphCount && (
          <div className=" flex justify-center items-center text-center mt-10 rounded-full">
            <button
              className="btn btn-secondary btn-outline cursor-pointer rounded-full"
              onClick={() => setDisplayGraphCount(displayGraphCount + 3)}
            >
              Show More
            </button>
          </div>
        )}
      </TabPanel>
    </Tabs>
  );
};

export default CategoryTabs;
