import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { ViewCart } from "../components/viewcart/ViewCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "/viewcart",
    element: <ViewCart></ViewCart>,
  },
]);
