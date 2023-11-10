import { ReactNode, createContext, useState } from "react";
import { IContext, IProduct, IState, ItemKey } from "../models/Interfaces";

export const ShopContext = createContext<IContext>({
  state: {
    cart: [],
    favourite: [],
    checkout: [],
  },
  addItem: () => {},
  removeItem: () => {},
  increaseCount: () => {},
  decreaseCount: () => {},
  resetItems: () => {},
  isAdded: () => false,
});

interface IShopContextProviderProps {
  children: ReactNode;
}

const initialState: IState = {
  cart: [],
  favourite: [],
  checkout: [],
};

export const ShopContextProvider = ({
  children,
}: IShopContextProviderProps) => {
  const [state, setState] = useState(initialState);

  const addItem = (key: ItemKey, product: IProduct, count?: number) => {
    setState((prev) => ({
      ...prev,
      [key]: [...prev[key], { ...product, count: count || 1 }],
    }));
  };
  const removeItem = (key: ItemKey, productId: string) => {
    setState((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item.id !== productId),
    }));
  };
  const increaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === productId);
    if (index !== -1) {
      items[index].count += 1;
      setState((prev) => ({ ...prev, [key]: items }));
    }
  };
  const decreaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === productId);
    if (index !== -1 && items[index].count > 1) {
      items[index].count -= 1;

      setState((prev) => ({ ...prev, [key]: items }));
    }
  };

  const resetItems = (key: ItemKey) => {
    setState((prev) => ({ ...prev, [key]: [] }));
  };

  const isAdded = (key: ItemKey, productId: string): boolean => {
    return state[key].some((item) => item.id === productId);
  };

  return (
    <ShopContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        decreaseCount,
        increaseCount,
        resetItems,
        isAdded,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
