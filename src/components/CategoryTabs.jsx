import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTabs = () => {

    const [webDevelopmentJobs, setWebDevelopmentJobs] = useState([]);
    const [digitalMarketingJobs, setDigitalMarketingJobs] = useState([]);
    const [graphicDesignJobs, setGraphicDesignJobs] = useState([]);
    const [activeTab, setActiveTab] = useState(0);


    useEffect(() => {
        axios.get('http://localhost:5000/jobs')
            .then(res => {
                const jobData = res.data;
                const webDevelopmentData = jobData.filter(job => job.category === "Web Development");
                const digitalMarketingData = jobData.filter(job => job.category === "Digital Marketing");
                const graphicDesignData = jobData.filter(job => job.category === "Graphic Design");

                setWebDevelopmentJobs(webDevelopmentData);
                setDigitalMarketingJobs(digitalMarketingData);
                setGraphicDesignJobs(graphicDesignData);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    return (
        <Tabs selectedIndex={activeTab} onSelect={tabIndex => setActiveTab(tabIndex)}>
            <TabList className="pb-3 flex space-x-2 rounded">
                <Tab className={`px-8 py-2 cursor-pointer rounded 
                ${activeTab === 0 ? '' : 'bg-red-500 text-white'}`}>
                    Web Development
                </Tab>
                <Tab className={`px-8 py-2 cursor-pointer rounded 
                ${activeTab === 1 ? '' : 'bg-red-500 text-white'}`}>
                    Digital Marketing
                </Tab>
                <Tab className={`px-8 py-2 cursor-pointer rounded 
                ${activeTab === 2 ? '' : 'bg-red-500 text-white'}`}>
                    Graphic Design
                </Tab>
            </TabList>

            <TabPanel >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {webDevelopmentJobs.map((job) => (
                        <div key={job._id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='h-48 w-full' src={job.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>Price Range: {job.price_range}</p>
                                    <p>Deadline: {job.deadline}</p>
                                    <p>Description: {job.short_description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/jobs/${job._id}`} className="btn btn-primary">Bid Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TabPanel>

            <TabPanel >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {digitalMarketingJobs.map((job) => (
                        <div key={job._id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='h-48 w-full' src={job.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>Price Range: {job.price_range}</p>
                                    <p>Deadline: {job.deadline}</p>
                                    <p>Description: {job.short_description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/jobs/${job._id}`} className="btn btn-primary">Bid Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TabPanel>

            <TabPanel >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {graphicDesignJobs.map((job) => (
                        <div key={job._id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='h-48 w-full' src={job.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>Price Range: {job.price_range}</p>
                                    <p>Deadline: {job.deadline}</p>
                                    <p>Description: {job.short_description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/jobs/${job._id}`} className="btn btn-primary">Bid Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default CategoryTabs;