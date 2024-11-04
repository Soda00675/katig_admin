import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LazyLoadComponent } from "@/components";
import { AuthLayout } from "@/layouts";

/**
 * Auth Pages
 */
const LoginPage = LazyLoadComponent(React.lazy(() => import("@/views/auth/LoginPage")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: LoginPage,
      },
    ],
  },
]);

export default router;
