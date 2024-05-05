import { Box, Button, Card, Heading, Text, Image } from "@chakra-ui/react";
import { heroCardStyles, heroImageStyles } from "./style";
import { Link } from "react-router-dom";
import { buttonPrimaryStyle } from "../buttons/style";

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
      <Box p="2rem">
        <Heading color="brand.darkText" size={{ base: "xl", lg: "2xl" }}>
          {heading}
        </Heading>
        <Text color="brand.darkText" py="1rem">
          {description}
        </Text>
        <Link to={btnLink}>
          <Button {...buttonPrimaryStyle}>{btnLabel}</Button>
        </Link>
      </Box>
      <Box mx="2rem" w={{ base: "80%", lg: "50%" }} mt="1rem">
        <Image {...heroImageStyles} src={image} alt={heading} />
      </Box>
    </Card>
  );
};
