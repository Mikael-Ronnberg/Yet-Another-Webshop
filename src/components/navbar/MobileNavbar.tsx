import { Box, Flex, Stack } from "@chakra-ui/react";
import { NavLogo } from "../navitem/NavLogo";
import { mobileNavContainerStyles, mobileSearchWrapper } from "./style";
import { Search } from "../search/Search";
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
      <Box {...mobileSearchWrapper}>
        <Search></Search>
      </Box>
    </>
  );
};
