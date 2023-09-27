import { IProductProps } from "../../models/IProductProps";

export const ProductItem = (product: IProductProps) => {
  // const { productTitel, productDescription, price, expireDate } = product;

  return (
    <>
      <div className="productContainer">
        <h3>{product.productTitel}</h3>
        <p>{product.productDescription}</p>
        <h5>{product.price}</h5>
        <p>{product.expireDate}</p>
      </div>
    </>
  );
};
