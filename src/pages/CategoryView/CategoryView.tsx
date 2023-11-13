import { BreadCrumbs } from "../../components/breadcrumbs/BreadCrumbs";
import { defaultBreadItems } from "../../components/helpers";
import { Hero } from "../../components/hero/Hero";
import { Navbar } from "../../components/navbar/Navbar";
import { AllProducts } from "../Products/components/AllProducts";
import { products } from "../../mocks/products";

interface ICategoryViewProps {
  id?: string;
}

export const CategoryView = ({ id }: ICategoryViewProps) => {
  const displayProduct = products.find((product) => product.category.id === id);

  if (!displayProduct) {
    return (
      <>
        <Navbar></Navbar>
        <div>Category not found</div>
      </>
    );
  } else {
    return (
      <>
        <Navbar></Navbar>
        <Hero
          heading={displayProduct.category.name}
          description={`Awesome ${displayProduct.category.name}`}
          image={displayProduct.category.image}
          btnLabel="View the Categories"
          btnLink="/categories"
        />
        <BreadCrumbs
          items={[
            ...defaultBreadItems,
            { name: displayProduct.category.name, link: "#" },
          ]}
        />
        <AllProducts products={products} />
      </>
    );
  }
};
