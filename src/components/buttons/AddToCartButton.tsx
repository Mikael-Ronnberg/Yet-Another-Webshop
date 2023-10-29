import { Button } from "@chakra-ui/react";

export const AddToCartButton = () => {
  return (
    <Button
      variant="outline"
      bgColor="blue.300"
      borderColor="blue.200"
      color="white"
      rounded="full"
      size="sm"
      w="150px"
    >
      Add me to Cart
    </Button>
  );
};
