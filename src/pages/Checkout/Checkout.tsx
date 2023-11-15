import { Box, Flex, Stack } from "@chakra-ui/react";
import { CurrentItems } from "./components/CurrentItems";
import { DeliveryForm } from "./components/DeliveryForm";
import { PaymentForm } from "./components/PaymentForm";
import { Navbar } from "../../components/navbar/Navbar";

export const Checkout = () => {
  return (
    <>
      <Navbar />
      <Flex
        w={{ base: "100%", lg: "90%" }}
        maxH="300vh"
        mx="auto"
        flexDir={{ base: "column", lg: "row" }}
        gap="2rem"
      >
        <Stack spacing={10} w={{ base: "100%", lg: "60%" }}>
          <CurrentItems />
          <DeliveryForm />
        </Stack>
        <Box w={{ base: "100%", lg: "40%" }} pb="3rem">
          <PaymentForm />
        </Box>
      </Flex>
    </>
  );
};
