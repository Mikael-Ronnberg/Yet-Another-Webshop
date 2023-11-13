import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Contact } from "../pages/Contact/Contact";
import { Categories } from "../pages/Categories/Categories";
import { Checkout } from "../pages/Checkout/Checkout";
import { ProductRoute } from "../pages/ProductView/ProductRoute";
import { CategoryRoute } from "../pages/CategoryView/CategoryRoute";

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
    path: "/products/:productId",
    element: <ProductRoute></ProductRoute>,
  },
  {
    path: "/categories",
    element: <Categories></Categories>,
  },
  {
    path: "/categories/:categoryId",
    element: <CategoryRoute></CategoryRoute>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);
