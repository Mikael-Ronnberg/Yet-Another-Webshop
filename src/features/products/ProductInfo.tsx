import {
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Box,
  Text,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import { IBreadCrumbItems, IProduct } from "../../models/Interfaces";
import { Quantity } from "../../components/quantity/Quantity";
// import { Link } from "react-router-dom";
import { AddToCartButton } from "../../components/buttons/AddToCartButton";
import { BreadCrumbs } from "../../components/breadcrumbs/BreadCrumbs";
import { defaultBreadItems, getSubstring } from "../../components/helpers";

interface IProductInfoProps {
  product: IProduct;
}

export const ProductInfo = ({ product }: IProductInfoProps) => {
  return (
    <>
      <BreadCrumbs
        items={[
          ...defaultBreadItems,
          {
            name: product.category.name,
            link: `/categories/${product.category?.id}`,
          },
          {
            name: getSubstring(product.name, 20),
            link: `/products/${product.category?.id}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2,1fr)" }}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p="2rem"
        gap="20"
      >
        <GridItem p="1rem">
          <Image src={product.image} alt={product.name} mx="auto" />
        </GridItem>
        <GridItem p="1rem">
          <Heading>{product.name}</Heading>
          <Text my="1rem">{product.description}</Text>
          <Text fontWeight="bold" fontSize="2rem">
            {product.price}
          </Text>
          <Divider my="1rem" />
          <Quantity />
          <Divider my="1rem" />
          <Box>
            <Link href="/checkout">
              <Button
                variant="outline"
                bgColor="brand.primary"
                color="brand.whiteCream"
                borderRadius="50px"
                size="sm"
                w="160px"
                mr="1rem"
                my="0.5rem"
                _hover={{ bgColor: "none" }}
              >
                Buy Now
              </Button>
            </Link>
            <AddToCartButton />
          </Box>
          <Stack py="2rem">
            <Box borderWidth={1} borderColor="brand.whiteCream" p="1rem">
              <Text fontWeight="bold">Free Delivery Over 500 kr!</Text>
              <Link textDecor="underline" color="gray.500">
                Details
              </Link>
            </Box>
            <Box borderWidth={1} borderColor="brand.whiteCream" p="1rem">
              <Text fontWeight="bold">Return Delivery?</Text>
              <Text color="brand.primary">Free return within 14 days</Text>
              <Link textDecor="underline">Details</Link>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};
