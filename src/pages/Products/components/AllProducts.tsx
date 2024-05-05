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
