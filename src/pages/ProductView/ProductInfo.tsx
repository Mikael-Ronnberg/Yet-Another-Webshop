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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { IProduct } from "../../models/Interfaces";
import { Quantity } from "../../components/quantity/Quantity";
import { AddToCartButton } from "../../components/buttons/AddToCartButton";
import { BreadCrumbs } from "../../components/breadcrumbs/BreadCrumbs";
import {
  defaultBreadItems,
  getSubstring,
  isItemAdded,
} from "../../components/helpers";
import { Navbar } from "../../components/navbar/Navbar";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartDispatchContext } from "../../context/CartDispatchContext";
import { ActionType } from "../../reducers/CartReducer";
import { buttonPrimaryStyle } from "../../components/buttons/style";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";

interface IProductInfoProps {
  product: IProduct;
}

export const ProductInfo = ({ product }: IProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);

  const handleCheckout = () => {
    dispatch({
      type: ActionType.ADD_ITEM,
      payload: {
        key: "cart",
        product: product,
        count: quantity,
      },
    });
  };

  return (
    <>
      <Navbar />
      <BreadCrumbs
        items={[
          ...defaultBreadItems,
          {
            name: product.category.name,
            link: `/category/${product.category?.id}`,
          },
          {
            name: getSubstring(product.name, 20),
            link: `/product/${product.id}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2,1fr)" }}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p="2rem"
        gap="10"
      >
        <GridItem p="1rem" bgColor="brand.whiteCream" rounded="sm">
          <Image src={product.image} alt={product.name} mx="auto" />
        </GridItem>
        <GridItem p="1rem" bgColor="brand.whiteCream" rounded="sm">
          <Heading color="brand.darkText">{product.name}</Heading>
          <Text my="1rem" color="brand.darkText">
            {product.description}
          </Text>
          <Text fontWeight="bold" fontSize="2rem" color="brand.darkText">
            {product.price} sek
          </Text>
          <Divider my="1rem" />
          <Quantity
            setQuantity={(_valueAsString, valueAsNumber) =>
              setQuantity(valueAsNumber)
            }
            disabled={isItemAdded(state, "cart", product.id)}
          />
          <Divider my="1rem" />
          <Box>
            <Link to="/checkout">
              <Button
                {...buttonPrimaryStyle}
                onClick={handleCheckout}
                mr="1rem"
                my="0.5rem"
              >
                Buy Now
              </Button>
            </Link>
            <AddToCartButton product={product} count={quantity} />
          </Box>
          <Stack py="2rem">
            <Box borderWidth={1} borderColor="brand.primary" p="1rem">
              <Text fontWeight="bold" color="brand.darkText">
                Free Delivery Over 500 sek!
              </Text>
              <ChakraLink textDecor="underline" color="gray.500">
                Details
              </ChakraLink>
            </Box>
            <Box borderWidth={1} borderColor="brand.primary" p="1rem">
              <Text fontWeight="bold" color="brand.darkText">
                Return Delivery?
              </Text>
              <Text color="brand.darkText">Free return within 14 days</Text>
              <ChakraLink textDecor="underline" color="brand.darkText">
                Details
              </ChakraLink>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};
