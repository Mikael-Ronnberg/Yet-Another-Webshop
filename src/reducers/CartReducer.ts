import { IProduct } from "../models/Interfaces";

export interface IAction {
  type: ActionType;
  payload: IProduct;
}

export enum ActionType {
  ADD_ITEM,
  REMOVE_ITEM,
}

export const CartReducer = (cart: IProduct[], action: IAction): IProduct[] => {
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      return [action.payload];
    }
    default:
      break;
  }
  return cart;
};
