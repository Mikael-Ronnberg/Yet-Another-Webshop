import { createHashRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Checkout } from "../pages/Checkout/Checkout";
import { ProductRoute } from "../pages/ProductView/ProductRoute";
import { CategoryRoute } from "../pages/CategoryView/CategoryRoute";
import { CategoriesPage } from "../pages/Categories/CategoriesPage";
import { ProductsPage } from "../pages/Products/ProductsPage";
import { Confirmation } from "../pages/Confirmation/Confirmation";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/products",
    element: <ProductsPage></ProductsPage>,
  },
  {
    path: "/product/:productId",
    element: <ProductRoute></ProductRoute>,
  },
  {
    path: "/categories",
    element: <CategoriesPage></CategoriesPage>,
  },
  {
    path: "/category/:categoryId",
    element: <CategoryRoute></CategoryRoute>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/confirmation",
    element: <Confirmation></Confirmation>,
  },
]);
