import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import CheckOut from "../CheckOut/CheckOut";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Main from "../layout/Main";
import MyHome from "../MyHome/MyHome";
import MyLogin from "../MyLogin/MyLogin";
import Register from "../MyLogin/Register";

import Navbar from "../Navbar/Navbar";
import Terms from "../Others/Terms";
import RightSide from "../RightSide/RightSide";

import Topics from "../Topics/Topics";
import PrivetRoute from "./PrivetRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/",
        element: <MyHome></MyHome>,
      },
      {
        path: "/course",
        element: <Home></Home>,
        loader: () =>
          fetch("https://online-courser-server-data.vercel.app/topics"),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://online-courser-server-data.vercel.app/topics/${params.id}`
          ),
      },
      {
        path: "/topics/:id",
        element: <Topics></Topics>,
        loader: ({ params }) =>
          fetch(
            `https://online-courser-server-data.vercel.app/topics/${params.id}`
          ),
      },
      {
        path: "/rightside/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://online-courser-server-data.vercel.app/category/${params.id}`
          ),
      },

      {
        path: "/mylogin",
        element: <MyLogin></MyLogin>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myhome",
        element: <MyHome></MyHome>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "*",
        element: (
          <div className=" vh-100 bg-light card m-5 pt-5 text-center text-warning ">
            {" "}
            <h1 className="mt-5 pt-5">This Content not Found </h1>
          </div>
        ),
      },
    ],
  },
]);
