import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/CartReducer";

export const CartDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
