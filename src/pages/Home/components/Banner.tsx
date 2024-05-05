import { Flex, Heading, Text } from "@chakra-ui/react";
import { bannerHeadingStyles, bannerStyles, bannerTextStyles } from "./style";
import { Logo } from "../../../components/Icons/Logo";

export const Banner = () => {
  return (
    <>
      <Flex
        {...bannerStyles}
        bg="center / cover no-repeat url(https://images.pexels.com/photos/1903978/pexels-photo-1903978.jpeg)"
        w="100vw"
        mt="2rem"
        h={{ base: "300px", lg: "80vh" }}
      >
        <Flex
          w="100%"
          flexDir="column"
          justifyContent="flex-start"
          mt={{ base: "3rem", md: "2.5rem", lg: "2" }}
          mb={{ base: "0rem", md: "1rem", lg: "4rem" }}
          pl="2rem"
          pr="2rem"
        >
          <Heading {...bannerHeadingStyles}>Plant Dad Depot</Heading>
        </Flex>
        <Flex
          w="100%"
          pl={{ base: "6rem", md: "10.5rem", lg: "6.5rem" }}
          mt={{ base: "1rem", md: "0.2rem", lg: "0rem" }}
        >
          <Logo />
        </Flex>
        <Flex
          w="100%"
          flexDir="column"
          justifyContent="flex-start"
          mb={{ base: "2rem", lg: "0" }}
          mt={{ base: "1rem", md: "0.5rem", lg: "4rem" }}
          pl={{ base: "4rem", md: "6rem", lg: "5rem" }}
          pr="1rem"
        >
          <Text {...bannerTextStyles}>We Make Greens Come True</Text>
        </Flex>
      </Flex>
    </>
  );
};
