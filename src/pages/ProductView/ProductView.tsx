import { products } from "../../mocks/products";
import { ProductInfo } from "./ProductInfo";

export const ProductView = () => {
  return (
    <>
      <ProductInfo product={products[0]}></ProductInfo>
    </>
  );
};
