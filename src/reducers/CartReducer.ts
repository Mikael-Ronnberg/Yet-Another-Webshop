import { IProduct, IState } from "../models/Interfaces";

export interface IAction {
  type: ActionType;
  payload: {
    key: keyof IState;
    product?: IProduct;
    productId?: string;
    count?: number;
  };
}

export enum ActionType {
  ADD_ITEM,
  REMOVE_ITEM,
  RESET_ITEMS,
  INCREASE_COUNT,
  DECREASE_COUNT,
}

export const CartReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      const { key, product, count } = action.payload;

      const updatedCart = [...state[key], { ...product, count: count || 1 }];

      return {
        ...state,
        [key]: updatedCart,
      };
    }
    case ActionType.REMOVE_ITEM: {
      const { key, productId } = action.payload;

      const updatedCart = state[key].filter((item) => item.id !== productId);

      return {
        ...state,
        [key]: updatedCart,
      };
    }

    case ActionType.RESET_ITEMS: {
      const { key } = action.payload;

      return {
        ...state,
        [key]: [],
      };
    }

    case ActionType.INCREASE_COUNT: {
      const { key, productId } = action.payload;

      return {
        ...state,
        [key]: state[key].map((item) =>
          item.id === productId ? { ...item, count: item.count + 1 } : item
        ),
      };
    }

    case ActionType.DECREASE_COUNT: {
      const { key, productId } = action.payload;

      return {
        ...state,
        [key]: state[key].map((item) =>
          item.id === productId && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    }

    default:
      break;
  }
  return state;
};
