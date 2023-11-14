import { Button } from "@chakra-ui/react";
import { IProduct } from "../../models/Interfaces";
import { useContext } from "react";
import { CartDispatchContext } from "../../context/CartDispatchContext";
import { ActionType } from "../../reducers/CartReducer";
import { CartContext } from "../../context/CartContext";
import { isItemAdded } from "../helpers";

interface IAddToCartButtonProps {
  product: IProduct;
  count?: number;
}

export const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);

  return (
    <>
      {isItemAdded(state, "cart", product.id) ? (
        <Button
          variant="outline"
          bgColor="brand.whiteCream"
          borderColor="brand.primary"
          color="brand.primaryDark"
          rounded="sm"
          size="sm"
          w="150px"
          _hover={{
            bgColor: "brand.primaryDark",
            color: "brand.whiteCream",
            borderColor: "brand.primary",
          }}
          onClick={() =>
            dispatch({
              type: ActionType.REMOVE_ITEM,
              payload: { key: "cart", productId: product.id },
            })
          }
        >
          Remove From Cart
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.whiteCream"
          color="brand.whiteCream"
          rounded="sm"
          bgColor="brand.primary"
          size="sm"
          w="150px"
          _hover={{
            bgColor: "brand.primaryDark",
            color: "brand.whiteCream",
            borderColor: "brand.whiteCream",
          }}
          onClick={() =>
            dispatch({
              type: ActionType.ADD_ITEM,
              payload: { key: "cart", product: product, count },
            })
          }
        >
          Add to Cart
        </Button>
      )}
    </>
  );
};
