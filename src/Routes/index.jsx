import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Authorization from "../pages/Authorization";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SwipeFramePage from "../pages/SwipeFramePage";
import SingleCategoryPage from "../pages/SingleCategoryPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/authorization",
    element: (
      <>
        <Authorization />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <SwipeFramePage />
      </>
    ),
  },
  {
    path: "/singlecategory",
    element: (
      <>
        <SingleCategoryPage />
      </>
    ),
  },
]);
export default routes;
