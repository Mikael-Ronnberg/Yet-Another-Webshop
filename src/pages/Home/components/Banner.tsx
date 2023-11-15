import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import { bannerHeadingStyles, bannerStyles, bannerTextStyles } from "./style";
import { Logo } from "../../../components/Icons/Logo";

export const Banner = () => {
  return (
    <>
      <Flex
        {...bannerStyles}
        bg="center / cover no-repeat url(https://images.pexels.com/photos/2873479/pexels-photo-2873479.jpeg)"
        w="100vw"
        h={{ base: "300px", lg: "80vh" }}
      >
        <Box
          backdropFilter="blur(10px)"
          mt={{ base: "3rem", md: "2.5rem", lg: "2" }}
          mb={{ base: "1rem", md: "1rem", lg: "4rem" }}
          pl="2rem"
          pr="2rem"
          // p={{ base: "1rem", md: "1rem", lg: "2rem" }}
        >
          <Heading {...bannerHeadingStyles}>Plant Dad Depot</Heading>
        </Box>
        <Logo />
        <Box
          backdropFilter="blur(10px)"
          mb={{ base: "2rem", lg: "0" }}
          mt={{ base: "1rem", md: "0.5rem", lg: "4rem" }}
          pl="1rem"
          pr="1rem"
        >
          <Text {...bannerTextStyles}>We Make Greens Come True</Text>
        </Box>
      </Flex>
    </>
  );
};
