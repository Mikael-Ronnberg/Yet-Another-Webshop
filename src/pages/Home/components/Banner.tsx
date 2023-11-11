import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { bannerHeadingStyles, bannerStyles, bannerTextStyles } from "./style";

export const Banner = () => {
  return (
    <>
      <Flex {...bannerStyles}>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Heading {...bannerHeadingStyles}></Heading>
          <Text {...bannerTextStyles}>HEJSAN</Text>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Box
            mx="2rem"
            w={{ base: "300px", lg: "600px" }}
            h={{ base: "300px", lg: "500px" }}
            bg="center/ cover no-repeat url()"
          ></Box>
        </Box>
      </Flex>
    </>
  );
};
