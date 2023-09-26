import { IProductProps } from "../../models/IProductProps";

export const ProductItem = (product: IProductProps) => {
  const { productTitel, productDescription, price, expireDate } = product;

  return (
    <>
      <div className="productContainer">
        <h3>{productTitel}</h3>
        <p>{productDescription}</p>
        <h5>{price}</h5>
        <p>{expireDate}</p>
      </div>
    </>
  );
};
