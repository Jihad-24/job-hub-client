import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTabs = () => {

    const [webDevelopmentJobs, setWebDevelopmentJobs] = useState([]);
    const [digitalMarketingJobs, setDigitalMarketingJobs] = useState([]);
    const [graphicDesignJobs, setGraphicDesignJobs] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/CategoryHome')
            .then(res => {
                const { web_development, digital_marketing, graphics_design } = res.data[0];
                setWebDevelopmentJobs(web_development);
                setGraphicDesignJobs(graphics_design);
                setDigitalMarketingJobs(digital_marketing);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    return (
        <Tabs selectedIndex={activeTab} onSelect={tabIndex => setActiveTab(tabIndex)}>
            <TabList className="">
                <Tab className={activeTab === 0 ? 'active-tab' : ''}>Web Development</Tab>
                <Tab className={activeTab === 1 ? 'active-tab' : ''}>Digital Marketing</Tab>
                <Tab className={activeTab === 2 ? 'active-tab' : ''}>Graphic Design</Tab>
            </TabList>

            <TabPanel selected={activeTab === 0}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {webDevelopmentJobs.map((job) => (
                        <div key={job._id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='h-48 w-full' src={job.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>Price range: {job.price_range}</p>
                                    <p>Deadline: {job.deadline}</p>
                                    <p>Description: {job.short_description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Bid Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TabPanel>

            <TabPanel selected={activeTab === 1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {digitalMarketingJobs.map((job) => (
                        <div key={job._id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='h-48 w-full' src={job.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>Price range: {job.price_range}</p>
                                    <p>Deadline: {job.deadline}</p>
                                    <p>Description: {job.short_description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Bid Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TabPanel>

            <TabPanel selected={activeTab === 2}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {graphicDesignJobs.map((job) => (
                        <div key={job._id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='h-48 w-full' src={job.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>Price range: {job.price_range}</p>
                                    <p>Deadline: {job.deadline}</p>
                                    <p>Description: {job.short_description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Bid Now</button>
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