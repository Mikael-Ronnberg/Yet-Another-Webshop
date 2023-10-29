import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Logo } from "../navitem/Logo";
import { mobileNavContainerStyles, mobileSearchWrapper } from "./style";
import { Search } from "../search/Search";

export const MobileNavbar = () => {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box>Nav Menu</Box>
        <Logo></Logo>
        <Stack direction="row" spacing={1}>
          <Text>WixhList</Text>
          <Text>Cart</Text>
        </Stack>
      </Flex>
      <Box {...mobileSearchWrapper}>
        <Search></Search>
      </Box>
    </>
  );
};
