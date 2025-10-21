import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import Catagory from "../Pages/Catagory";
import Register from "../Pages/Register";
import Login from "../Pages/LoginForm";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import NewsDetails from "../Layouts/NewsDetails/NewsDetails";
import PrivateProvider from "../PrivateProvider/PrivateProvider";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
     loader: () => fetch("/news.json"),
 hydrateFallbackElement: <Loading></Loading>,
    children: [
      { path: "", Component: Home },
      {
        path: "catagories/:id",
        loader: () => fetch("/news.json"),
        Component: Catagory,
        hydrateFallbackElement: <Loading></Loading>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    loader: () => fetch("/news.json"),
    element: (
      <PrivateProvider>
        <NewsDetails></NewsDetails>,
      </PrivateProvider>
    ),
    hydrateFallbackElement: <Loading></Loading>
  },
]);
export default router;
