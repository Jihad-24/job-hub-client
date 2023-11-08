import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5173',
    withCredentials:true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            // console.log('error intercepters', error.message);
            if (error.response.status === 401 || error.response.status === 403) {
                // console.log('log out the user');
                logOut()
                    .then(() => {
                        navigate('/login')
                        toast.error('Token Expired Login Again')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [logOut, navigate]);
    return axiosSecure;
};

export default useAxiosSecure;