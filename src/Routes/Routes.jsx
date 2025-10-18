import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout
  },
  {
    path: "/auth",
    element: <h1>This is Auth</h1>,
  },
  {},
]);
export default router;
