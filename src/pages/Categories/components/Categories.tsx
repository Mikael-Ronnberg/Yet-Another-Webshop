import { Box, Grid, GridItem } from "@chakra-ui/react";
import { SectionHeading } from "../../../components/sectionheading/SectionHeading";
import { ICategory } from "../../../models/Interfaces";
import { CategoryCard } from "../../../components/cards/CategoryCards";

interface ICategoriesProps {
  categories: ICategory[];
}

export const Categories = ({ categories }: ICategoriesProps) => {
  return (
    <Box
      w={{ base: "100%", lg: "100%" }}
      m="auto"
      py={{ base: "1rem", lg: "2rem" }}
      px="2rem"
    >
      <SectionHeading title="Our Categories" />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="4"
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <CategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
