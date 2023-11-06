import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";


const AdminLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <NavBar></NavBar>
            </div>
            <div className="mx-auto max-w-6xl mb-20">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;