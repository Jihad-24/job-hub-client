import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useToken from "../hooks/useToken";
import { useState } from "react";
import { useEffect } from "react";



const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [userEmail, setUserEmail] = useState()

     const [token] = useToken(userEmail);

     useEffect(() => {
         if (user?.email) {
            setUserEmail(user.email)
          }
     },[])

    if (loading) {
        return <div className="w-full mx-auto text-center"><span className="loading loading-spinner  w-12 "></span></div>
        ;
    }

    if (user) {
        if (token) {
            return children;
        }
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;