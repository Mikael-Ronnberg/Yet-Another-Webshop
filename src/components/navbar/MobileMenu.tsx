import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Box,
} from "@chakra-ui/react";
import { VscListFlat } from "react-icons/vsc";
import React from "react";
import { Logo } from "../navitem/Logo";
import { navItems } from "../helpers";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        _hover={{
          bgColor: "transparent",
        }}
        color="brand.whiteCream"
        fontSize="1.5rem"
        pt="1rem"
      >
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor="brand.whiteCream">
            <Logo />
          </DrawerHeader>

          <DrawerBody bgColor="brand.whiteCream">
            {navItems.map((navItem, i) => (
              <Link to={navItem.href} key={i}>
                <Box
                  color="brand.primaryDarker"
                  p="0.5rem"
                  _hover={{
                    bgColor: "brand.primary",
                    color: "brand.whiteCream",
                  }}
                >
                  {navItem.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter bgColor="brand.whiteCream">
            <Button
              variant="outline"
              bgColor="brand.whiteCream"
              borderColor="brand.primary"
              color="brand.primary"
              rounded="sm"
              size="sm"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
