import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { searchInputStyles } from "./styles";

export const Search = () => {
  return (
    <Box>
      <InputGroup size="sm">
        <InputLeftElement
          pointerEvents="none"
          color="brand.whiteCream"
          fontSize="1.2em"
          children={<SearchIcon color="brand.darkText" />}
        />
        <Input {...searchInputStyles}></Input>
      </InputGroup>
    </Box>
  );
};
