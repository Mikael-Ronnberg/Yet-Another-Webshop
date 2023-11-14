import { Flex, Heading, Text } from "@chakra-ui/react";
import { bannerHeadingStyles, bannerStyles, bannerTextStyles } from "./style";
import { Logo } from "../../../components/navitem/Logo";

export const Banner = () => {
  return (
    <>
      <Flex
        {...bannerStyles}
        bg="center / cover no-repeat url(https://images.pexels.com/photos/2873479/pexels-photo-2873479.jpeg)"
        w="100vw"
        h={{ base: "300px", lg: "80vh" }}
      >
        <Heading {...bannerHeadingStyles}>Plant Dad Dispensary</Heading>
        <Logo />
        <Text {...bannerTextStyles}> Your Plant Paradise</Text>
      </Flex>
    </>
  );
};
