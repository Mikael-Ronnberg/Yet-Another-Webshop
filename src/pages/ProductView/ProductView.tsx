import { Navbar } from "../../components/navbar/Navbar";
import { products } from "../../mocks/products";
import { ProductInfo } from "./ProductInfo";

interface IProductViewProps {
  id: string;
}

export const ProductView = ({ id }: IProductViewProps) => {
  const displayProduct = products.find((product) => product.id === id);

  if (!displayProduct) {
    return (
      <>
        <Navbar></Navbar>
        <div>Product not found</div>
      </>
    );
  } else {
    return (
      <>
        <ProductInfo product={displayProduct}></ProductInfo>
      </>
    );
  }
};
