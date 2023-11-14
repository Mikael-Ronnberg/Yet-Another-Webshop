import {
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { IItem } from "../../models/Interfaces";
import { Link } from "react-router-dom";
import { CartDispatchContext } from "../../context/CartDispatchContext";
import { ActionType } from "../../reducers/CartReducer";

export interface CartItemProps {
  item: IItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useContext(CartDispatchContext);

  return (
    <Grid
      alignItems="center"
      templateColumns={{ base: "repeat(6, 1fr)", lg: "repeat(8, 1fr)" }}
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      my="2"
    >
      <GridItem>
        <Link to={`/products/${item.slug}`}>
          <Image
            src={item.image}
            boxSize="40px"
            rounded="full"
            borderWidth="1px"
            borderColor="gray.300"
          />
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 5, lg: 3 }}>
        <Link to={`/products/${item.id}`}>
          <Text color="brand.primaryDarker">{item.name}</Text>
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent="flex-end">
        <HStack my="0.5rem" justifyContent="flex-end">
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
                payload: { key: "cart", productId: item.id },
              })
            }
          >
            -
          </Button>
          <Input
            color="brand.primaryDarker"
            rounded="sm"
            type="number"
            value={item.count}
            readOnly={true}
            focusBorderColor="brand.primaryDark"
            size="sm"
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
                payload: { key: "cart", productId: item.id },
              })
            }
          >
            +
          </Button>
        </HStack>
      </GridItem>
      <GridItem textAlign="right" colSpan={{ base: 2, lg: 1 }}>
        <Text fontWeight="bold" color="brand.primaryDarker">
          {item.price * item.count} kr
        </Text>
      </GridItem>
      <GridItem textAlign="right">
        <Button
          variant="ghost"
          colorScheme="red"
          onClick={() =>
            dispatch({
              type: ActionType.REMOVE_ITEM,
              payload: { key: "cart", productId: item.id },
            })
          }
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  );
};
