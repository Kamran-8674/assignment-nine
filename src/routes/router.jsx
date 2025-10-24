import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import DetailsCard from "../pages/DetailsCard";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "../pages/ForgetPass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            Component:Home
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'register',
            Component:Register
        },
        {
          path:'/profile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><DetailsCard></DetailsCard></PrivateRoute>
        },
        {
          path:'/forgetPass',
          Component:ForgetPass

        }

    ]
  },
]);