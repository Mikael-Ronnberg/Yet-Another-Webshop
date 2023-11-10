import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ICategory } from "../../models/Interfaces";

interface ICategoryCardProps {
  category: ICategory;
}

export const CategoryCard = ({ category }: ICategoryCardProps) => {
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
    </>
  );
};
