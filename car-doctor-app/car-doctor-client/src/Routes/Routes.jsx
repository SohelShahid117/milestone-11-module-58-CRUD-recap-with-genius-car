import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Main></Main>,
    children:[
        {
            path:"/",
            // element: <div>Hello world!</div>,
            element:<Home></Home>
        }
    ]
  },
]);

export default router;