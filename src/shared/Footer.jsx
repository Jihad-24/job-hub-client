import logo from '../../public/react.svg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPeriscope } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineWatchLater } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="">
            <div className="footer p-10 bg-[#252525] text-white">
                <aside>
                    <img src={logo} alt="" />
                    <p>JobHub Ltd.<br />JobHub is dedicated to constant Giving  knowledge <br /> about  Wide Range of Jobs.</p>
                    <a href="#" className='flex gap-2 items-center py-1  hover:text-sky-500'>
                        <FaPeriscope className='text-xl'></FaPeriscope>
                        <p className='text-[16px]'>457 Mott Street, NY 10013</p>
                    </a>
                    <a href="#" className='flex gap-2 items-center  hover:text-sky-500'>
                        <AiOutlinePhone className='text-xl'></AiOutlinePhone>
                        <p className='text-[16px]'>+44 300 303 0266</p>
                    </a>
                    <a href="#" className='flex gap-2 items-center pt-1  hover:text-sky-500'>
                        <MdOutlineWatchLater className='text-xl'></MdOutlineWatchLater>
                        <p className='text-[16px]'>Mon-Sat 8.00-18.00</p>
                    </a>
                </aside>
                <nav>
                    <header className="text-xl text-[#c8c7c7] font-bold py-1  hover:text-sky-500">Services</header>
                    <a className="link link-hover hover:text-sky-500">Branding</a>
                    <a className="link link-hover hover:text-sky-500 py-1">Design</a>
                    <a className="link link-hover hover:text-sky-500">Marketing</a>
                    <a className="link link-hover hover:text-sky-500 py-1">Advertisement</a>
                </nav>
                <nav>
                    <header className="text-xl text-[#c8c7c7] font-bold py-1  hover:text-sky-500">Company</header>
                    <a className="link link-hover hover:text-sky-500">About us</a>
                    <a className="link link-hover hover:text-sky-500 py-1">Contact</a>
                    <a className="link link-hover hover:text-sky-500">Jobs</a>
                    <a className="link link-hover hover:text-sky-500 py-1">Privacy Policy</a>
                </nav>
                <nav>
                    <header className="text-xl text-[#c8c7c7] font-bold py-1  hover:text-sky-500">JobHub</header>
                    <img src="https://i.ibb.co/MGY1PC3/footer-map-img.png" alt="" />
                </nav>
            </div>
            <div className="footer items-center p-4 bg-neutral text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <img src={logo} alt="" />
                    <p>Copyright © 2023 -Qode Interactive, All Rights Reserved By Code Corner.
                    </p>
                </aside>
                <nav className="grid-flow-col gap-4 place-self-center md:place-self-center md:justify-self-end">
                    <a
                        href="#facebook"
                        className="block text-xl"
                    >
                        <FaFacebook></FaFacebook>
                    </a>
                    <a
                        href="#twitter"
                        className="block text-xl"
                    >
                        <FaTwitter></FaTwitter>
                    </a>
                    <a
                        href="#instagram"
                        className="block text-xl"
                    >
                        <FaInstagram></FaInstagram>
                    </a>
                    <a
                        href="#instagram"
                        className="block text-xl"
                    >
                        <FaLinkedin></FaLinkedin>
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;