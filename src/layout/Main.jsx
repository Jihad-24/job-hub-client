import { Outlet } from "react-router-dom"
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";


const Main = () => {
    return (
        <div>
             <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            </div>
            <div className="max-w-6xl mx-auto">
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
       </div>
    );
};

export default Main;