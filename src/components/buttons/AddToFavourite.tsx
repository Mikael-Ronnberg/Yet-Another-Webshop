import { Button } from "@chakra-ui/react";

import { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ShopContext } from "../../context/ShopContext";
import { IProduct } from "../../models/Interfaces";

interface IAddToFavouriteButtonProps {
  product: IProduct;
}

export const AddToFavouriteButton = ({
  product,
}: IAddToFavouriteButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(ShopContext);

  return (
    <>
      {isAdded("favourite", product.id) ? (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: "transparent" }}
          rounded="full"
          title="Remove from Wishlist"
          onClick={() => removeItem("favourite", product.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: "transparent" }}
          rounded="full"
          title="Add to Wishlist"
          onClick={() => addItem("favourite", product)}
        >
          <BsHeart />
        </Button>
      )}
    </>
  );
};
