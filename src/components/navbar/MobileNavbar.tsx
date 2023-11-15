import { Box, Flex, Stack } from "@chakra-ui/react";
import { NavLogo } from "../Icons/NavLogo";
import { mobileNavContainerStyles } from "./style";
import { MobileMenu } from "./MobileMenu";
import { Cart } from "../cart/Cart";

export const MobileNavbar = () => {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box>
          <MobileMenu />
        </Box>
        <NavLogo></NavLogo>
        <Stack direction="row" spacing={1}>
          <Cart />
        </Stack>
      </Flex>
    </>
  );
};
