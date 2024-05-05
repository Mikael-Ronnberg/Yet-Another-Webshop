import { Text, Flex, Heading, Button } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from "../../components/buttons/style";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <>
      <Navbar />
      <Flex align="center" justifyContent="center" h="100vh">
        <Flex
          flexDir="column"
          align="center"
          justifyContent="center"
          bgColor="brand.whiteCream"
          h="60vh"
          w="90%"
          rounded="sm"
          mb="10rem"
        >
          <Heading color="brand.darkText" p="3rem">
            Thank you for your order!
          </Heading>
          <Text color="brand.darkText" p="4rem">
            An email will arrive with further details on order #101232
          </Text>
          <Flex justifyContent="space-between" gap="15">
            <Link to="/">
              <Button {...buttonPrimaryStyle}>Home</Button>
            </Link>
            <Link to="/products">
              <Button {...buttonSecondaryStyle}>Products</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
