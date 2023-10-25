import { createContext } from "react";
import { IProduct } from "../models/Interfaces";

export const CartContext = createContext<IProduct[]>([]);
