import { Navbar } from "../../components/navbar/Navbar";
import { Hero } from "../../components/hero/Hero";
import { AllProducts } from "./components/AllProducts";
import { products } from "../../mocks/products";
import { Footer } from "../../components/footer/Footer";

export const Products = () => {
  // const shoppingCart = useContext(CartContext);
  // const dispatch = useContext(CartDispatchContext);

  return (
    <>
      <Navbar></Navbar>
      <Hero
        heading="Green and Beatiful Plants"
        description="Dr. Greenthumb would be jealouse!"
        image="/src/assets/hero/hero_image.png"
        btnLabel="View All Categories"
        btnLink="/categories"
      ></Hero>
      <AllProducts products={products}></AllProducts>
      <Footer></Footer>
    </>
  );
};
