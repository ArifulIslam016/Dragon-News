import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import Catagory from "../Pages/Catagory";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children:[
      {path:'',
        Component: Home
      },
      {
        path: 'catagories/:id',
        Component: Catagory
      }

    ]
  },
  {
    path: "/auth",
    element: <h1>This is Auth</h1>,
  },
  {},
]);
export default router;
