import { Navbar } from "../../components/navbar/Navbar";
import { Hero } from "../../components/hero/Hero";
import { AllProducts } from "./components/AllProducts";
import { products } from "../../mocks/products";
import { Footer } from "../../components/footer/Footer";

export const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading="Green and Beatiful Plants"
        description="Dr. Greenthumb would be jealouse!"
        image="/hero/hero_image.png"
        btnLabel="View All Categories"
        btnLink="/categories"
      />
      <AllProducts products={products}></AllProducts>
      <Footer />
    </>
  );
};
