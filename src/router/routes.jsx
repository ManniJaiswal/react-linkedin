import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MyNetwork from "../pages/MyNetwork";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import Signup from "../pages/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/home",
    element: <Home />,
  },
   {
    path: "/network",
    element: <MyNetwork />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/settings",
    element: <Settings />,
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