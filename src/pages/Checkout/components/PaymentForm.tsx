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
import { ShopContext } from "../../../context/ShopContext";

export const PaymentForm = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  const {
    state: { checkout },
  } = useContext(ShopContext);

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
          <Heading size="md">Payment Details</Heading>
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
              <Heading size="xs" my="1rem">
                Payment Option
              </Heading>
              <RadioGroup>
                <Stack>
                  <Radio borderColor="brand.primary" value="cashOnDelivery">
                    Cash On Delivery
                  </Radio>
                  <Radio borderColor="brand.primary" value="momo">
                    Mobile Money Payment
                  </Radio>
                  <Radio borderColor="brand.primary" value="3">
                    Credit Card (Master/Visa)
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Stack>
          <Divider mt="1rem" />

          <Box>
            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Sub Total</Text>
              <Text fontWeight="bold">${formatPrice(subTotal)}</Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Tax(10%)</Text>
              <Text fontWeight="bold">${formatPrice(tax)}</Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Coupon Discount</Text>
              <Text fontWeight="bold">-${formatPrice(tax)}</Text>
            </Flex>

            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Shipping Cost</Text>
              <Text fontWeight="bold">-${formatPrice(0)}</Text>
            </Flex>
            <Divider />
            <Flex justify="space-between" align="center" my="1rem">
              <Text fontWeight="bold">Total</Text>
              <Text fontWeight="bold">${formatPrice(subTotal)}</Text>
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
            Pay ${formatPrice(subTotal)}
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
