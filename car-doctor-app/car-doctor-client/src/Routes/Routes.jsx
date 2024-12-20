import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element: <div>Hello world!</div>,
        }
    ]
  },
]);

export default router;