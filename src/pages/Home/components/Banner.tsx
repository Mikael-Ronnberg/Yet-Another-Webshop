import { Flex, Heading, Text } from "@chakra-ui/react";
import { bannerHeadingStyles, bannerStyles, bannerTextStyles } from "./style";
import { Logo } from "../../../components/navitem/Logo";

export const Banner = () => {
  return (
    <>
      <Flex
        {...bannerStyles}
        bg="center / cover no-repeat url(/src/assets/hero/hero.png)"
        w="100vw"
        h={{ base: "300px", lg: "80vh" }}
      >
        <Heading {...bannerHeadingStyles}>Plant Dad Dispensary</Heading>
        <Logo />
        <Text {...bannerTextStyles}>Your Plant Paradise</Text>
      </Flex>
    </>
  );
};
