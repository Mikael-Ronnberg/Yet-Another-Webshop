import "./ProductItem.scss";
import { IProductProps } from "../../models/IProductProps";

export const ProductItem = ({ product }: { product: IProductProps }) => {
  return (
    <>
      <div className="productContainer">
        <h3>{product.productTitel}</h3>
        <p>{product.productDescription}</p>
        <h5>{product.price}</h5>
        <p>{product.expireDate}</p>
        <button>Add To Cart</button>
      </div>
    </>
  );
};
