import { Button } from "@chakra-ui/react";
import { IProduct, IState } from "../../models/Interfaces";
import { useContext } from "react";
import { CartDispatchContext } from "../../context/CartDispatchContext";
import { ActionType } from "../../reducers/CartReducer";
import { CartContext } from "../../context/CartContext";

interface IAddToCartButtonProps {
  product: IProduct;
  count?: number;
}

const isItemAdded = (
  state: IState,
  key: keyof IState,
  productId: string
): boolean => {
  return state[key].some((item) => item.id === productId);
};

export const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);

  return (
    <>
      {isItemAdded(state, "cart", product.id) ? (
        <Button
          variant="outline"
          bgColor="blue.300"
          borderColor="blue.200"
          color="white"
          rounded="full"
          size="sm"
          w="150px"
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
          borderColor="brand.primary"
          color="white"
          rounded="full"
          size="sm"
          w="150px"
          onClick={() =>
            dispatch({
              type: ActionType.ADD_ITEM,
              payload: { key: "cart", product, count },
            })
          }
        >
          Add to Cart
        </Button>
      )}
    </>
  );
};
