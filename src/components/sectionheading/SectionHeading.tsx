import { Heading } from "@chakra-ui/react";

interface ISectionHeadingProps {
  title: string;
}

export const SectionHeading = ({ title }: ISectionHeadingProps) => {
  return (
    <Heading size="md" my="1.5rem" color="brand.darkText">
      {title}
    </Heading>
  );
};
