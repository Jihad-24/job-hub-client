import { Link, NavLink } from "react-router-dom";
import icon from "../assets/react.svg"
import Swal from "sweetalert2";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import useAuth from "../hooks/useAuth";


const NavBar = () => {

    const { isDark, setIsDark, user, logOut } = useAuth();

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const loggedOut = () => {
        // success alert
        Swal.fire({
            icon: 'success',
            title: 'User LogOut Successfull'
        })
    }

    const navLinks = <>
        <li className="font-semibold"><NavLink to={"/"}>Home</NavLink></li>

        {
            !user && <li className="font-semibold"><NavLink to={"/login"}>Login</NavLink></li>
        }
        {
            !user && <li className="font-semibold"><NavLink to={"/register"}>Register</NavLink></li>
        }
        {user && <>
            <li className="font-semibold"><NavLink to="/addtocart">Add Product</NavLink></li>
            <li className="font-semibold"><NavLink to="/cart">My Cart</NavLink></li>
            <li className="font-semibold"><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>}
    </>

    const handleTheam = () => {
        setIsDark(!isDark)
    }

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <div className="hidden md:flex md:items-center md:gap-2">
                            <img src={icon} alt="" />
                            <p className=" md:font-semibold md:text-2xl">DigitalExchange</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <div onClick={handleTheam} className="btn">{isDark ? <BsFillSunFill /> : <BsFillMoonStarsFill />}</div>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">

                            {!user?.photoURL ?
                                <img src="https://i.ibb.co/2FngQt8/user.png" alt="" />
                                :
                                <img src={user?.photoURL} alt="" />
                            }

                        </div>

                    </label>
                    <div className="hidden md:block">
                        <Link to={"/profile"}>
                            <p className="px-1 font-medium">{user && user?.displayName}</p>
                        </Link>
                    </div>
                    {
                        user ?
                            <button onClick={() => { handleSignOut(); loggedOut(); }} className="btn bg-[#403F3F] text-white" >Sign Out</button>
                            :
                            <Link to={"/login"}>
                                <button className="btn bg-[#403F3F] text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default NavBar;