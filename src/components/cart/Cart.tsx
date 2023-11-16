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
import { buttonPrimaryStyle, buttonSecondaryStyle } from "../buttons/style";

export const Cart = () => {
  const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const cart = state.cart;

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
        fontSize={{ base: "1.8rem", lg: "1.5rem" }}
        pt={{ base: "1rem", lg: "0.1rem" }}
        pos="relative"
      >
        <BsCart4 />
        {cart.length !== 0 && (
          <Flex
            pos="absolute"
            top="6px"
            right="3px"
            boxSize="15px"
            bgColor="red.400"
            rounded="full"
            color="brand.whiteCream"
            fontSize="0.8rem"
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
          <DrawerCloseButton color="brand.primaryDarker" rounded="sm" />
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
                  {...buttonSecondaryStyle}
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
                  <Button {...buttonPrimaryStyle} onClick={onClose}>
                    Checkout
                  </Button>
                </Link>
              </Box>
              <Box fontWeight="bold" color="brand.primaryDarker">
                Total: {calculateItemsTotal(cart)} sek
              </Box>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
