import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Rating } from "../rating/Rating";
import { AddToCartButton } from "../buttons/AddToCartButton";

export const ProductCard = () => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <CardBody>
        <Image />
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Heading size="md">Nånting</Heading>
            <Flex fontWeight="bold">
              <Text>Pris: </Text>
              <Text>2000</Text>
            </Flex>
          </Flex>
          <Text>Some Descriptive text</Text>
          <Rating />
          <AddToCartButton />
        </Stack>
      </CardBody>
    </Card>
  );
};
