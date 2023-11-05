import "./Products.scss";

import { Navbar } from "../../components/navbar/Navbar";
import { Hero } from "../../components/hero/Hero";
import { AllProducts } from "../../features/products";
import { products } from "../../mocks/products";

export const Products = () => {
  // const shoppingCart = useContext(CartContext);
  // const dispatch = useContext(CartDispatchContext);

  return (
    <>
      <Navbar></Navbar>
      <Hero
        heading="Green and Beatiful Plants"
        description="Dr. Greenthumb would be jealouse!"
        image=""
        btnLabel="View All Categories"
        btnLink="/categories"
      ></Hero>
      <AllProducts products={products}></AllProducts>
    </>
  );
};
