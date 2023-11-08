import Banner from "../components/Banner";
import CategoryTabs from "../components/CategoryTabs";
import FindUs from "../components/FindUs";
import StartToday from "../components/StartToday";
import { Helmet } from 'react-helmet';

const Home = () => {

    return (
        <div className="px-3 py-1">
            <Helmet>
                <title>JobHub | Home</title>
                <link rel="shortcut icon" href="../../public/icons/react.svg" type="image/x-icon" />
            </Helmet>
            <Banner></Banner>
            <CategoryTabs></CategoryTabs>
            <div className="mb-10">
                <div >
                    <div className="md:ml-16 lg:ml-0" data-aos="fade-right">
                        <h1 className="text-4xl font-bold pb-14">Start From Today <br /> and <span className="italic text-[#263077]"> Bid in Your <br />Choosing Jobs</span> <br />
                            <span className="border-b-8 border-[#263077] pt-4  w-16 h-2 absolute"></span>
                        </h1>
                    </div>
                </div>
                <StartToday></StartToday>
            </div>
            <div className="mb-16">
                <div className="text-center" data-aos="fade-up">
                    <h1 className="font-extrabold text-5xl text-center pb-14">Find us on the <span className="text-[#263077] italic" data-aos="fade-down">Business Listing Websites</span>
                        <br />
                        <span className="border-b-8 border-[#263077] pt-6  md:w-20 h-2 absolute" ></span></h1>
                    <p className="font-normal text-[#3F3F3F] text-center text-xl" >We are committed to making it as convenient as possible for you to find and engage with our platform. Our presence on these business listing websites will help you connect with us in a variety of ways. Here are some of the platforms where you can find us</p>
                </div>
                <FindUs></FindUs>
            </div>
        </div>
    );
};

export default Home;