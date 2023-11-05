import { ProductInfo } from "../../features/products/ProductInfo";
import { products } from "../../mocks/products";

export const ProductView = () => {
  return (
    <>
      <ProductInfo product={products[0]}></ProductInfo>
    </>
  );
};
