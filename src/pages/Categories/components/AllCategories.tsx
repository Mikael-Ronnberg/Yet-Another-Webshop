import { Grid } from "@chakra-ui/react";
import { ICategory } from "../../../models/Interfaces";
import { CategoryCard } from "../../../components/cards/CategoryCards";

interface IAllCategoriesProps {
  categories: ICategory[];
}

export const AllCategories = ({ categories }: IAllCategoriesProps) => {
  return (
    <>
      <Grid
        w={{ base: "100%", lg: "90%" }}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap="20px"
        mx="auto"
        p="1rem"
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Grid>
    </>
  );
};
