import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import { SectionHeading } from "../../components/sectionheading/SectionHeading";

export const Categories = () => {
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
        <GridItem>
          <CategoryCard />
        </GridItem>
        <GridItem>
          <CategoryCard />
        </GridItem>
        <GridItem>
          <CategoryCard />
        </GridItem>
        <GridItem>
          <CategoryCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export const CategoryCard = () => {
  return (
    <Card
      direction="row"
      align="center"
      overflow="hidden"
      variant="outline"
      w="100%"
      h="100%"
      p="10px"
    >
      <Image src="" alt="" w={100} h={100} />
      <CardBody>
        <Heading size={{ base: "sm", lg: "md" }}>Skor</Heading>
      </CardBody>
    </Card>
  );
};
