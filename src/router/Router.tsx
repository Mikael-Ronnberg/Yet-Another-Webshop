import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { ViewCart } from "../components/viewcart/ViewCart";
import { Contact } from "../pages/Contact/Contact";
import { Categories } from "../pages/Categories/Categories";
import { ProductView } from "../pages/ProductView/ProductView";
import { CategoryView } from "../pages/CategoryView/CategoryView";
import { Checkout } from "../pages/Checkout/Checkout";

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
    element: <ProductView></ProductView>,
  },
  {
    path: "/categories",
    element: <Categories></Categories>,
  },
  {
    path: "/categories/:categoryId",
    element: <CategoryView></CategoryView>,
  },
  {
    path: "/viewcart",
    element: <ViewCart></ViewCart>,
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
