import { motion } from "framer-motion"

const Banner = () => {

    const carousalText = <>

        <div className='text-white  pl-12 w-1/2 hidden md:block'>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="space-y-7" >
                <h2 className='text-6xl font-bold'>Explore Our Wide Range of Jobs</h2>
                <p>Discover a variety of jobs tailored to your interests and goals. Choose from a diverse selection of subjects and start your job journey today.</p>

                <div>
                    <button className="btn btn-primary mr-5" data-aos="fade-up">Browse Jobs</button>
                    <button className="btn btn-outline btn-secondary" data-aos="fade-down">Learn More</button>
                </div>
            </motion.div>
        </div>

    </>

    return (
        <div className="carousel w-full h-full md:h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/p0CYJMQ/Website-Redesign.png" className="w-full rounded-xl" data-aos="fade-down-right" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    {carousalText}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0"  >
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle" >❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/sy45TzQ/E-Commerce-min-768x715.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    {carousalText}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Dr406rM/seo-article-header.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    {carousalText}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/d6CGzPB/Content-Creation-and-Blogging.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    {carousalText}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;