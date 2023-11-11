import { createContext } from "react";
import { IState } from "../models/Interfaces";
import { initialState } from "../components/helpers";

export const CartContext = createContext<IState>(initialState);
