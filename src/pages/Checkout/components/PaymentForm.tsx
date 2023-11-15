import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Flex,
  Input,
  Button,
  Divider,
  RadioGroup,
  Radio,
  Box,
  Text,
} from "@chakra-ui/react";
import { calculateItemsTotal, formatPrice } from "../../../components/helpers";
import { useState, useContext, useEffect } from "react";

import { CartContext } from "../../../context/CartContext";

export const PaymentForm = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const state = useContext(CartContext);

  const checkout = state.cart;

  useEffect(() => {
    const subTotal = calculateItemsTotal(checkout);
    const tax = 0.1 * subTotal;
    setSubTotal(subTotal);
    setTax(tax);
  }, [checkout]);

  return (
    <>
      <Card
        borderWidth="1px"
        borderColor="gray.200"
        shadow="none"
        p="2rem"
        rounded="sm"
        bgColor="brand.whiteCream"
      >
        <CardHeader>
          <Heading size="md" color="brand.primaryDarker">
            Payment Details
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack spacing="2rem">
            <Flex>
              <Input
                type="text"
                placeholder="Enter Coupon Code"
                rounded="sm"
                borderColor="brand.primary"
                focusBorderColor="brand.primary"
                _focus={{ boxShadow: "none" }}
              />
              <Button
                bgColor="brand.primary"
                color="white"
                rounded="sm"
                ml="-40px"
                px="2rem"
                _hover={{
                  bgColor: "brand.primaryDark",
                }}
                _active={{
                  bgColor: "brand.primaryDark",
                }}
              >
                Apply Coupon
              </Button>
            </Flex>
            <Divider mt="1rem" />

            <Box>
              <Heading size="xs" my="1rem" color="brand.primaryDarker">
                Payment Option
              </Heading>
              <RadioGroup>
                <Stack>
                  <Radio
                    borderColor="brand.primary"
                    value="cashOnDelivery"
                    color="brand.primaryDarker"
                  >
                    Cash On Delivery
                  </Radio>
                  <Radio
                    borderColor="brand.primary"
                    value="momo"
                    color="brand.primaryDarker"
                  >
                    Swish
                  </Radio>
                  <Radio
                    borderColor="brand.primary"
                    value="3"
                    color="brand.primaryDarker"
                  >
                    Credit Card (Master/Visa)
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Stack>
          <Divider mt="1rem" />

          <Box>
            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold" color="brand.primaryDarker">
                Sub Total
              </Text>
              <Text fontWeight="bold" color="brand.primaryDarker">
                {formatPrice(subTotal)} sek
              </Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold" color="brand.primaryDarker">
                Tax(10%)
              </Text>
              <Text fontWeight="bold" color="brand.primaryDarker">
                {formatPrice(tax)} sek
              </Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold" color="brand.primaryDarker">
                Coupon Discount
              </Text>
              <Text fontWeight="bold" color="brand.primaryDarker">
                - {formatPrice(tax)} sek
              </Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold" color="brand.primaryDarker">
                Shipping Cost
              </Text>
              <Text fontWeight="bold" color="brand.primaryDarker">
                - {formatPrice(0)} sek
              </Text>
            </Flex>
            <Divider />
            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold" color="brand.primaryDarker">
                Total
              </Text>
              <Text fontWeight="bold" color="brand.primaryDarker">
                {formatPrice(subTotal)} sek
              </Text>
            </Flex>
          </Box>

          <Button
            bgColor="brand.primary"
            color="white"
            w="100%"
            rounded="sm"
            _hover={{
              bgColor: "brand.primaryDark",
            }}
            _active={{
              bgColor: "brand.primaryDark",
            }}
          >
            {formatPrice(subTotal)} sek
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
