import { INavItem } from "../models/Interfaces";

export const navItems: INavItem[] = [
  {
    label: "All Products",
    href: "/producs",
  },
  {
    label: "Categories",
    href: "/categories",
  },
];

export const getSubstring = (text: string, substringEnd: number): string => {
  return text.length > substringEnd
    ? `${text.substring(0, substringEnd)}...`
    : text;
};
