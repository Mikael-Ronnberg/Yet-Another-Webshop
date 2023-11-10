import { Hero } from "../../components/hero/Hero";
import { Navbar } from "../../components/navbar/Navbar";
import { categories } from "../../mocks/categories";
import { AllCategories } from "./components/AllCategories";

export const Categories = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        heading="Plant Categories"
        description="Our different categories"
        image=""
        btnLabel="View All Products"
        btnLink="/products"
      ></Hero>

      <AllCategories categories={categories}></AllCategories>
    </>
  );
};
