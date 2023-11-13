import { Box, Grid, GridItem } from "@chakra-ui/react";
import { SectionHeading } from "../../../components/sectionheading/SectionHeading";
import { ICategory } from "../../../models/Interfaces";
import { CategoryCard } from "../../../components/cards/CategoryCards";

interface ICategoriesProps {
  categories: ICategory[];
}

export const Categories = ({ categories }: ICategoriesProps) => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title="Show categires :P " />
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

// interface ICategoryCardProps {
//   category: ICategory;
// }

// export const CategoryCard = ({ category }: ICategoryCardProps) => {
//   return (
//     <Card
//       direction="row"
//       align="center"
//       overflow="hidden"
//       variant="outline"
//       w="100%"
//       h="100%"
//       p="10px"
//     >
//       <Image src={category.image} alt={category.slug} w={100} h={100} />
//       <CardBody>
//         <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
//       </CardBody>
//     </Card>
//   );
// };
