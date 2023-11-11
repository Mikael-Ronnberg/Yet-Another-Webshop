import {
  IBreadCrumbItems,
  IItem,
  INavItem,
  IState,
} from "../models/Interfaces";

export const initialState: IState = {
  cart: [],
  favourite: [],
  checkout: [],
};

export const navItems: INavItem[] = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Categories",
    href: "/categories",
  },
];

export const defaultBreadItems: IBreadCrumbItems[] = [
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Categories",
    link: "/categories",
  },
];

export const isItemAdded = (
  state: IState,
  key: keyof IState,
  productId: string
): boolean => {
  return state[key].some((item) => item.id === productId);
};

export const getSubstring = (text: string, substringEnd: number): string => {
  return text.length > substringEnd
    ? `${text.substring(0, substringEnd)}...`
    : text;
};

export const calculateItemsTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export const formatPrice = (value: number): string => {
  return value.toFixed(2);
};
