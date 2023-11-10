import { Button } from "@chakra-ui/react";
import { IProduct } from "../../models/Interfaces";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

interface IAddToCartButtonProps {
  product: IProduct;
  count?: number;
}
export const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(ShopContext);

  return (
    <>
      {isAdded("cart", product?.id) ? (
        <Button
          variant="outline"
          bgColor="blue.300"
          borderColor="blue.200"
          color="white"
          rounded="full"
          size="sm"
          w="150px"
          onClick={() => removeItem("cart", product.id)}
        >
          Remove From Cart
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="white"
          rounded="full"
          size="sm"
          w="150px"
          onClick={() => addItem("cart", product, count)}
        >
          Add to Cart
        </Button>
      )}
    </>
  );
};
