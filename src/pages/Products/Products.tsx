import { Navbar } from "../../components/navbar/Navbar";
import { ProductItem } from "../../components/productitem/ProductItem";
import { IProductProps } from "../../models/IProductProps";

export const Products = () => {
  const products: IProductProps[] = [
    {
      productTitel: "Fiskmås",
      productDescription: "Gott med fiskmås",
      price: 2334,
      expireDate: 21062023,
      quantity: 1,
    },
    {
      productTitel: "Fiskmås",
      productDescription: "Gott med fiskmås",
      price: 2334,
      expireDate: 21062023,
      quantity: 1,
    },
    {
      productTitel: "Fiskmås",
      productDescription: "Gott med fiskmås",
      price: 2334,
      expireDate: 21062023,
      quantity: 1,
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <main className="mainContainer">
        <div className="mainContainer__products">
          {/* {products.map(p, i) => {
            <ProductItem key={i} product={p}></ProductItem>;
          })} */}
        </div>
      </main>
    </>
  );
};
