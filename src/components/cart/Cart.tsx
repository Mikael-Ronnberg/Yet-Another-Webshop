import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartItem } from "./CartItem";
import { calculateItemsTotal } from "../helpers";
import { Link } from "react-router-dom";
import React from "react";
import { CartDispatchContext } from "../../context/CartDispatchContext";
import { CartContext } from "../../context/CartContext";
import { ActionType } from "../../reducers/CartReducer";

export const Cart = () => {
  const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const cart = state.cart;

  const handleCheckout = () => {
    dispatch({ type: ActionType.RESET_ITEMS, payload: { key: "checkout" } });

    cart.forEach((cartItem) => {
      dispatch({
        type: ActionType.ADD_ITEM,
        payload: { key: "checkout", product: cartItem, count: cartItem.count },
      });
    });

    onClose();
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="brand.whiteCream"
        _hover={{
          bgColor: "transparent",
        }}
        fontSize="1.5rem"
        pt="0.3rem"
        pos="relative"
      >
        <BsCart4 />
        {cart.length !== 0 && (
          <Flex
            pos="absolute"
            top="0px"
            right="5px"
            bgColor="brand.primaryLight"
            boxSize="15px"
            rounded="full"
            color="brand.whiteCream"
            fontSize="0.6rem"
            align="center"
            justify="center"
          >
            {cart.length}
          </Flex>
        )}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="brand.whiteCream">
          <DrawerCloseButton />
          <DrawerHeader color="brand.primary">
            Cart ( {cart.length} Items )
          </DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <>Your Cart is Empty</>
            ) : (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </DrawerBody>
          {cart.length !== 0 && (
            <DrawerFooter justifyContent="space-between">
              <Box>
                <Button
                  variant="outline"
                  bgColor="brand.whiteCream"
                  borderColor="brand.primary"
                  color="brand.primaryDark"
                  rounded="sm"
                  size="sm"
                  w="150px"
                  _hover={{
                    bgColor: "brand.primaryDark",
                    color: "brand.whiteCream",
                    borderColor: "brand.primary",
                  }}
                  mr={3}
                  onClick={() =>
                    dispatch({
                      type: ActionType.RESET_ITEMS,
                      payload: { key: "cart" },
                    })
                  }
                >
                  Clear Cart
                </Button>
                <Link to="/checkout">
                  <Button
                    variant="outline"
                    borderColor="brand.whiteCream"
                    color="brand.whiteCream"
                    rounded="sm"
                    bgColor="brand.primary"
                    size="sm"
                    w="150px"
                    _hover={{
                      bgColor: "brand.primaryDark",
                      color: "brand.whiteCream",
                      borderColor: "brand.whiteCream",
                    }}
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </Link>
              </Box>
              <Box fontWeight="bold" color="brand.primaryDarker">
                Total: {calculateItemsTotal(cart)} kr
              </Box>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
