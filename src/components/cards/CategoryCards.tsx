import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ICategory } from "../../models/Interfaces";

interface ICategoryCardProps {
  category: ICategory;
}

export const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <>
      <Link to={`/category/${category.id}`}>
        <Card
          direction={{ base: "row", lg: "column" }}
          align="center"
          justify="center"
          overflow="hidden"
          bgColor="white"
          rounded="sm"
          w="100%"
          h="100%"
          p="1rem"
          _hover={{ cursor: "pointer" }}
        >
          <Image
            src={category.image}
            alt={category.name}
            width={220}
            height={220}
            p="1rem"
          />
          <CardBody>
            <Heading size={{ base: "sm", lg: "md" }} color="brand.darkText">
              {category.name}
            </Heading>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};
