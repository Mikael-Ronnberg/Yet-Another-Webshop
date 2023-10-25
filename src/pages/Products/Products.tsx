import "./Products.scss";

import { Navbar } from "../../components/navbar/Navbar";
import { ProductItem } from "../../components/productitem/ProductItem";
import { useState } from "react";
import { IProduct } from "../../models/Interfaces";

export const Products = () => {
  const products: IProduct[] = [
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

  const [cart, setCart] = useState<IProduct[]>([]);

  const handleAdd = (item: IProduct) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  console.log(cart);

  return (
    <>
      <Navbar></Navbar>
      <main className="mainContainer">
        <div className="mainContainer__products">
          {products.map((p, i) => (
            <ProductItem
              product={p}
              key={i}
              handleAdd={handleAdd}
            ></ProductItem>
          ))}
        </div>
      </main>
    </>
  );
};
