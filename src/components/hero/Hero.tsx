import { Box, Button, Card, Heading, Text, Image } from "@chakra-ui/react";
import { heroCardStyles, heroImageStyles } from "./style";
import { Link } from "react-router-dom";

interface IHeroProps {
  heading: string;
  description: string;
  image: string;
  btnLabel: string;
  btnLink: string;
}

export const Hero = ({
  heading,
  description,
  image,
  btnLabel,
  btnLink,
}: IHeroProps) => {
  return (
    <Card {...heroCardStyles}>
      <Box mx="2rem" w={{ base: "100%", lg: "50%" }}>
        <Heading size={{ base: "xl", lg: "2xl" }}>{heading}</Heading>
        <Text py="1rem">{description}</Text>
        <Link to={btnLink}>
          <Button variant="outline">{btnLabel}</Button>
        </Link>
      </Box>
      <Box mx="2rem" w={{ base: "100%", lg: "50%" }} mt="1rem">
        <Image {...heroImageStyles} src={image} alt={heading} />
      </Box>
    </Card>
  );
};
