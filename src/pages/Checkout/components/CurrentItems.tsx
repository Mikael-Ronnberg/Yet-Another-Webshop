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
  HStack,
  Button,
  Input,
} from "@chakra-ui/react";
import { getSubstring, formatPrice } from "../../../components/helpers";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ActionType } from "../../../reducers/CartReducer";
import { CartDispatchContext } from "../../../context/CartDispatchContext";

export const CurrentItems = () => {
  const state = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

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
              <Flex
                key={item.id}
                align="center"
                justify="space-between"
                flexWrap="wrap"
              >
                <Flex align="center" flexBasis="70%">
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
                <Flex flexBasis="30%" justifyContent="space-between">
                  <HStack my="0.5rem">
                    <Button
                      variant="outline"
                      bgColor="brand.whiteCream"
                      borderColor="brand.primary"
                      color="brand.primary"
                      rounded="sm"
                      size="sm"
                      onClick={() =>
                        dispatch({
                          type: ActionType.DECREASE_COUNT,
                          payload: { key: "checkout", productId: item.id },
                        })
                      }
                    >
                      -
                    </Button>
                    <Input
                      color="brand.primaryDarker"
                      rounded="sm"
                      type="number"
                      focusBorderColor="brand.primaryDark"
                      size="sm"
                      value={item.count}
                      readOnly={true}
                      minW="52px"
                      maxW="55px"
                      min="1"
                      max="20"
                    />
                    <Button
                      variant="outline"
                      bgColor="brand.whiteCream"
                      borderColor="brand.primary"
                      color="brand.primary"
                      rounded="sm"
                      size="sm"
                      _hover={{
                        bgColor: "brand.whiteGreen",
                        color: "brand.primary",
                        borderColor: "brand.primary",
                      }}
                      onClick={() =>
                        dispatch({
                          type: ActionType.INCREASE_COUNT,
                          payload: { key: "checkout", productId: item.id },
                        })
                      }
                    >
                      +
                    </Button>
                  </HStack>
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
              </Flex>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
