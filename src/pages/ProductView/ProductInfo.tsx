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

interface IProductInfoProps {
  product: IProduct;
}

export const ProductInfo = ({ product }: IProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);

  // const cart = state.cart;

  const handleCheckout = () => {
    dispatch({ type: ActionType.RESET_ITEMS, payload: { key: "checkout" } });

    dispatch({
      type: ActionType.ADD_ITEM,
      payload: {
        key: "checkout",
        product: product,
        count: quantity,
      },
    });

    // if (cart.length > 0) {
    //   cart.forEach((cartItem) => {
    //     dispatch({
    //       type: ActionType.ADD_ITEM,
    //       payload: {
    //         key: "checkout",
    //         product: cartItem,
    //         count: cartItem.count,
    //       },
    //     });
    //   });
    // }
  };

  return (
    <>
      <Navbar></Navbar>
      <BreadCrumbs
        items={[
          ...defaultBreadItems,
          {
            name: product.category.name,
            link: `/categories/${product.category?.id}`,
          },
          {
            name: getSubstring(product.name, 20),
            link: `/products/${product.id}`,
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
            {product.price} kr
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
                onClick={handleCheckout}
              >
                Buy Now
              </Button>
            </Link>
            <AddToCartButton product={product} count={quantity} />
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
