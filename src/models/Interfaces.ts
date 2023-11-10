export type ItemKey = "cart" | "favourite" | "checkout";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  image: string;
  category: ICategory;
  // gallery: string[];
  // quantity: number;
}

export interface INavItem {
  label: string;
  href: string;
}

export interface ICategory {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface IFeatItems {
  mostPopular: IProduct[];
  // onSale: IProduct[];
}

export interface IBreadCrumbItems {
  name: string;
  link: string;
}

export interface IState {
  cart: IItem[];
  favourite: IItem[];
  checkout: IItem[];
}
export interface IItem extends IProduct {
  count: number;
}

export interface IContext {
  state: IState;
  addItem: (key: ItemKey, product: IProduct, count?: number) => void;
  removeItem: (key: ItemKey, productId: string) => void;
  increaseCount: (key: ItemKey, productId: string) => void;
  decreaseCount: (key: ItemKey, productId: string) => void;
  resetItems: (key: ItemKey) => void;
  isAdded: (key: ItemKey, productId: string) => boolean;
}
