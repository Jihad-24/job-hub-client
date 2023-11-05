import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import JobDetails from "../components/JobDetails";
import MyBids from "../pages/Bids/MyBids";

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
        element:<MyBids></MyBids>,
      },
      {
        path: '/jobs/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`),
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