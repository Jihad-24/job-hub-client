import Banner from "../components/Banner";
import CategoryTabs from "../components/CategoryTabs";
import StartToday from "../components/StartToday";

const Home = () => {
    return (
        <div className="px-3 py-1">
            <Banner></Banner>
            <CategoryTabs></CategoryTabs>
            <div className="mb-10">
                <div >
                    <div className="md:ml-16 lg:ml-0">
                        <h1 className="text-4xl font-bold pb-14">Start From Today <br /> and <span className="italic text-[#263077]"> Bid in Your <br />Choosing Jobs</span> <br />
                            <span className="border-b-8 border-[#263077] pt-4  w-16 h-2 absolute"></span>
                        </h1>
                    </div>
                </div>
                <StartToday></StartToday>
            </div>
        </div>
    );
};

export default Home;