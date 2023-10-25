import { IProduct } from "./Interfaces";

export interface IProductProps {
  handleAdd: (item: IProduct) => void;
  product: IProduct;
}
