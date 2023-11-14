import {
  Card,
  CardHeader,
  Box,
  Heading,
  CardBody,
  Stack,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { getSubstring, formatPrice } from "../../../components/helpers";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CurrentItems = () => {
  const state = useContext(CartContext);

  const checkout = state.checkout;

  return (
    <>
      <Card
        borderWidth="1px"
        borderColor="gray.200"
        shadow="none"
        rounded="sm"
        bgColor="brand.whiteCream"
        pt={{ base: "3rem", lg: "0" }}
      >
        <CardHeader>
          <Heading size="md" color="brand.primaryDarker">
            Your Items
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack spacing="2rem">
            {checkout.map((item) => (
              <Flex key={item.id} align="center" justify="space-between">
                <Flex align="center">
                  <Image src={item.image} boxSize="100px" bgSize="contain" />
                  <Box mx="1rem">
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: "sm", lg: "lg" }}
                      maxW="500px"
                      color="brand.primaryDarker"
                    >
                      {item.name}
                    </Text>
                    <Text color="brand.primaryDarker">
                      {getSubstring(item.description, 50)}
                    </Text>
                  </Box>
                </Flex>
                <Box textAlign="right">
                  <Text
                    fontWeight="bold"
                    color="brand.primaryDarker"
                    fontSize={{ base: "md", lg: "lg" }}
                  >
                    ${formatPrice(item.price)}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", lg: "md" }}
                    color="brand.primaryDarker"
                  >
                    Quantity: {item.count}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
