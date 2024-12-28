//https://reactrouter.com/6.28.0/start/tutorial
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import * as React from "react";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      {/* <App /> */}
      {/* <RouterProvider router={router} /> */}
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>
    ,
  </div>
);
