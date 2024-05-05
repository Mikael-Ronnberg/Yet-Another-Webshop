import { Link } from "react-router-dom";
import { Cart } from "../cart/Cart";
import { navItems } from "../helpers";
import { NavLogo } from "../Icons/NavLogo";
import { Search } from "../search/Search";
import { desktopNavStyles, textSectionStyles } from "./style";
import { Box, Flex, Stack } from "@chakra-ui/react";

export const DesktopNavbar = () => {
  return (
    <>
      <Flex {...desktopNavStyles}>
        <Flex flex="33%">
          <Search />
        </Flex>
        <Flex flex="33%" justifyContent="center">
          <NavLogo />
        </Flex>
        <Flex flex="33%" justifyContent="flex-end">
          <Cart />
        </Flex>
      </Flex>
      <Stack {...textSectionStyles}>
        {navItems.map((navItem) => (
          <Box p="1rem" key={navItem.label}>
            <Link to={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}
      </Stack>
    </>
  );
};
