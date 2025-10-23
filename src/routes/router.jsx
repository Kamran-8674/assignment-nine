import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import DetailsCard from "../pages/DetailsCard";

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
          element:<Profile></Profile>
        },
        {
          path:'/details/:id',
          element:<DetailsCard></DetailsCard>
        }

    ]
  },
]);