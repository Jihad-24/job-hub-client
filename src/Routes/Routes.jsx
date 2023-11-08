import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import JobDetails from "../components/JobDetails";
import MyBids from "../pages/Bids/MyBids";
import AddJob from "../pages/JobRelated/AddJob";
import MyPostedJobs from "../pages/JobRelated/MyPostedJobs";
import UpdateJob from "../pages/JobRelated/UpdateJob";
import BidRequests from "../pages/Bids/BidRequests";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/mybids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
      },
      {
        path: '/addjob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: '/mypostedjobs',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
      },
      {
        path: '/bidrequests',
        element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
      },
      {
        path: '/updatejob/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) => fetch(`http://localhost:5000/mypostedjobs/${params.id}`),
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
]);

export default router;