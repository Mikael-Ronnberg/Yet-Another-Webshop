// import { Button, Flex } from "@chakra-ui/react";

// import { useState } from "react";
// import { usePagination } from "@mantine/hooks";
import { IProduct } from "../../../models/Interfaces";
import { ProductCard } from "../../../components/cards/ProductCard";
import { Flex } from "@chakra-ui/react";

interface IAllProductsProps {
  products: IProduct[];
  // breadcrumbItems?: IBreadcrumbItem[];
}

export const AllProducts = ({
  products,
}: // breadcrumbItems,
IAllProductsProps) => {
  return (
    <>
      {/* <CustomBreadcrumb items={breadcrumbItems} /> */}
      <Flex
        flexWrap="wrap"
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        justify={{ base: "center", lg: "space-around" }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
      {/* {itemsPerPage < products.length && (
        <Flex
          justify="center"
          w={{ base: "100%", lg: "90%" }}
          mx="auto"
          py="2rem"
        >
          {pagination.range.map((range) =>
            range === "dots" ? (
              <Button
                borderWidth="1px"
                borderColor="brand.primary"
                color="brand.primary"
                bgColor="white"
                mx="1"
                key={range}
              >
                ...
              </Button>
            ) : (
              <Button
                onClick={() => pagination.setPage(range)}
                borderWidth="1px"
                borderColor="brand.primary"
                color={pagination.active === range ? "white" : "brand.primary"}
                bgColor={
                  pagination.active === range ? "brand.primary" : "white"
                }
                mx="1"
                key={range}
                _active={{ bgColor: "none" }}
                _hover={{ bgColor: "none" }}
              >
                {range}
              </Button>
            )
          )}
        </Flex>
      )} */}
    </>
  );
};
