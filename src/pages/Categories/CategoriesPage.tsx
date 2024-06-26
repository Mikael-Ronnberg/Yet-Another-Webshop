import { Footer } from "../../components/footer/Footer";
import { Hero } from "../../components/hero/Hero";
import { Navbar } from "../../components/navbar/Navbar";
import { categories } from "../../mocks/categories";
import { AllCategories } from "./components/AllCategories";

export const CategoriesPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading="Plant Categories"
        description="Our different categories"
        image="/hero/leafyBanner.png"
        btnLabel="View All Products"
        btnLink="/products"
      />

      <AllCategories categories={categories}></AllCategories>
      <Footer />
    </>
  );
};
