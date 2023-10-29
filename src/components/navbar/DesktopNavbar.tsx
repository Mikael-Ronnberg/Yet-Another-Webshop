import { navItems } from "../helpers";
import { Logo } from "../navitem/Logo";
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
            <Logo></Logo>
          </Box>
          {navItems.map((navItem) => (
            <Box key={navItem.label}>
              <Link href={navItem.href}>{navItem.label}</Link>
            </Box>
          ))}
          <Box>
            <Search></Search>
          </Box>
        </Stack>

        <Stack {...cartSectionStyles}>
          <Box>Wshlist</Box>
          <Box>Cart</Box>
        </Stack>
      </Flex>
    </>
  );
};
