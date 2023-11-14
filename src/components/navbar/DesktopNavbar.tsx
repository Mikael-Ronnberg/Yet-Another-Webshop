import { Cart } from "../cart/Cart";
import { navItems } from "../helpers";
import { NavLogo } from "../navitem/NavLogo";
import { Search } from "../search/Search";
import {
  cartSectionStyles,
  desktopNavStyles,
  logoSectionStyles,
} from "./style";
import { Box, Flex, Link, Stack } from "@chakra-ui/react";

export const DesktopNavbar = () => {
  return (
    <>
      <Flex {...desktopNavStyles}>
        <Stack {...logoSectionStyles}>
          <Box>
            <NavLogo></NavLogo>
          </Box>
          {navItems.map((navItem) => (
            <Box p="1rem" key={navItem.label}>
              <Link href={navItem.href}>{navItem.label}</Link>
            </Box>
          ))}
          <Box>
            <Search></Search>
          </Box>
        </Stack>

        <Stack {...cartSectionStyles}>
          <Cart />
        </Stack>
      </Flex>
    </>
  );
};
