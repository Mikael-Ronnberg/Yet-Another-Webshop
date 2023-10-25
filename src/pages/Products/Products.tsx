import "./Products.scss";

import { Navbar } from "../../components/navbar/Navbar";
import { ProductItem } from "../../components/productitem/ProductItem";
import { useContext, useState } from "react";
import { IProduct } from "../../models/Interfaces";
import { CartContext } from "../../context/CartContext";
import { CartDispatchContext } from "../../context/CartDispatchContext";

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

  const shoppingCart = useContext(CartContext);
  // const dispatch = useContext(CartDispatchContext);

  console.log(shoppingCart);

  return (
    <>
      <Navbar></Navbar>
      <main className="mainContainer">
        <div className="mainContainer__products">
          {products.map((p, i) => (
            <ProductItem product={p} key={i}></ProductItem>
          ))}
        </div>
      </main>
    </>
  );
};
