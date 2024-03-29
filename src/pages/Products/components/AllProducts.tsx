// import { Button, Flex } from "@chakra-ui/react";

// import { useState } from "react";
// import { usePagination } from "@mantine/hooks";
import { IProduct } from "../../../models/Interfaces";
import { ProductCard } from "../../../components/cards/ProductCard";
import { Flex } from "@chakra-ui/react";

interface IAllProductsProps {
  products: IProduct[];
}

export const AllProducts = ({ products }: IAllProductsProps) => {
  return (
    <>
      <Flex
        flexWrap="wrap"
        w="90%"
        // {{ base: "100%", lg: "90%" }}
        mx="auto"
        justify={{ base: "center", lg: "space-around" }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    </>
  );
};
