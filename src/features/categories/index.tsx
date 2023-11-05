import { Card, CardBody, Grid, Heading, Image } from "@chakra-ui/react";
import { ICategory } from "../../models/Interfaces";
import { Link } from "react-router-dom";

interface IAllCategoriesProps {
  categories: ICategory[];
}

export const AllCategories = ({ categories }: IAllCategoriesProps) => {
  return (
    <>
      <Grid
        w={{ base: "100%", lg: "90%" }}
        templateColumns={{ base: "repeat(1, 1fr", lg: "repeat(2, 1fr" }}
        gap="20px"
        mx="auto"
        p="2rem"
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Grid>
    </>
  );
};

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <>
      <Link to={`/categories/${category.id}`}>
        <Card
          direction="column"
          align="center"
          overflow="hidden"
          variant="outline"
          w="100%"
          h="100%"
          p="10px"
          _hover={{ bgColor: "gray.100", cursor: "pointer" }}
        >
          <Image
            src={category.image}
            alt={category.name}
            width={200}
            height={200}
          />
          <CardBody>
            <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
          </CardBody>
        </Card>
      </Link>
      ;
    </>
  );
};
