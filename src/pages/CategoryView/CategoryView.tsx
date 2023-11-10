import { BreadCrumbs } from "../../components/breadcrumbs/BreadCrumbs";
import { defaultBreadItems } from "../../components/helpers";
import { Hero } from "../../components/hero/Hero";
import { Navbar } from "../../components/navbar/Navbar";
import { AllProducts } from "../Products/components/AllProducts";
import { products } from "../../mocks/products";

export const CategoryView = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        heading={products[0].category.name}
        description={`Awesome ${products[0].category.name}`}
        image={products[0].category.image}
        btnLabel="View the Categories"
        btnLink="/categories"
      />
      <BreadCrumbs
        items={[
          ...defaultBreadItems,
          { name: products[0].category.name, link: "#" },
        ]}
      />
      <AllProducts products={products} />
    </>
  );
};
