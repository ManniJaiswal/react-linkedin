import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout"; 
import ProtectedRoute from "./protectedRoute";
import Home from "../pages/Home";
import MyNetwork from "../pages/MyNetwork";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import Signup from "../pages/Signup";
const router = createBrowserRouter([
  
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><Home /></ProtectedRoute>
      },
      {
        path: "/network",
        element: <ProtectedRoute><MyNetwork /></ProtectedRoute>
      },
      {
        path: "/profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>
      },
      {
        path: "/notifications",
        element: <ProtectedRoute><Notifications /></ProtectedRoute>
      },
      {
        path: "/settings",
        element: <ProtectedRoute><Settings /></ProtectedRoute>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup/>,  
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}