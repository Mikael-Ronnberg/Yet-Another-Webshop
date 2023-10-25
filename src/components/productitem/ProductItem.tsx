import "./ProductItem.scss";
import { IProductProps } from "../../models/IProductProps";

export const ProductItem = ({ product, handleAdd }: IProductProps) => {
  return (
    <>
      <div className="productContainer">
        <h3>{product.productTitel}</h3>
        <p>{product.productDescription}</p>
        <h5>{product.price}</h5>
        <p>{product.expireDate}</p>
        <button onClick={() => handleAdd(product)}>Add To Cart</button>
      </div>
    </>
  );
};
