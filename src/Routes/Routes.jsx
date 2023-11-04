import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";

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
  ]);

export default router;