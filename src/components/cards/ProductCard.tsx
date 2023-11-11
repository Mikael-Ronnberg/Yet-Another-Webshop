import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

interface IProductCardPropss {
  product: IProduct;
}

import { AddToCartButton } from "../buttons/AddToCartButton";
import { IProduct } from "../../models/Interfaces";
import { getSubstring } from "../helpers";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }: IProductCardPropss) => {
  return (
    <Card
      w="xs"
      pos="relative"
      m="0.5rem"
      borderRadius="sm"
      bgColor="brand.whiteCream"
    >
      <CardBody>
        <Link to={`/products/${product.id}`}>
          <Box
            boxSize="200px"
            bg={`center / contain no-repeat url(${product.image})`}
            mx="auto"
            borderRadius="lg"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Heading size="sm">{product.name}</Heading>
            <Flex fontWeight="bold">
              <Text>Price: </Text>
              &nbsp;
              <Text>{product.price}</Text>
            </Flex>
          </Flex>
          <Text> {getSubstring(product.description, 30)}</Text>
          <AddToCartButton product={product} />
        </Stack>
      </CardBody>
    </Card>
  );
};
