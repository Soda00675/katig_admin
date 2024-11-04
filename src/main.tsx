import React from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "@/routers";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/app.css";

createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <ToastContainer theme="colored" position="top-center" />
    <RouterProvider router={router} />
  </React.Fragment>
);
