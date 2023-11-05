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
