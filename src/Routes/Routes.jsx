import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
        element:<Main></Main>,
        children: [
            {
                index: true,
                element:<Home></Home>,
          }
      ]
    },
    {
        path: '/login',
        element:<Login></Login>,
    },
    {
        path: '/register',
        element:<Register></Register>,
    },
  ]);

export default router;