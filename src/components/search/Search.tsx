import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { searchInputStyles } from "./styles";

export const Search = () => {
  return (
    <Box>
      <InputGroup size="sm" w={{ base: "100%", lg: "32rem" }}>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<SearchIcon color="grey.400" />}
        />
        <Input {...searchInputStyles}></Input>
      </InputGroup>
    </Box>
  );
};
