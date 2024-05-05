import { useParams } from "react-router-dom";
import { ProductView } from "./ProductView";

export const ProductRoute = () => {
  const { productId } = useParams();

  return <ProductView id={productId} />;
};
