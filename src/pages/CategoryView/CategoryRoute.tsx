import { useParams } from "react-router-dom";
import { CategoryView } from "./CategoryView";

export const CategoryRoute = () => {
  const { categoryId } = useParams();

  return <CategoryView id={categoryId}></CategoryView>;
};
