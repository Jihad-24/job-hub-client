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
import AdminLayout from "../layout/AdminLayout";
import BidStatus from "../components/AdminRelated/BidStatus";
import BidRequests from "../components/AdminRelated/BidRequests";
import AdminHome from "../components/AdminRelated/AdminHome";

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
        element: <MyBids></MyBids>,
      },
      {
        path: '/addjob',
        element: <AddJob></AddJob>,
      },
      {
        path: '/mypostedjobs',
        element: <MyPostedJobs></MyPostedJobs>,
      },
      {
        path: '/updatejob/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) => fetch(`http://localhost:5000/mypostedjobs/${params.id}`),
      },
      {
        path: '/jobs/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
      },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index:true,
        element: <AdminHome></AdminHome>,
      },
      {
        path: 'bidstatus',
        element: <BidStatus></BidStatus>,
      },
      {
        path: 'bidrequests',
        element: <BidRequests></BidRequests>,
      }
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