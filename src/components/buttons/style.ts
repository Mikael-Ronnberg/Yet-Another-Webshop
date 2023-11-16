import { ButtonProps } from "@chakra-ui/react";

export const buttonSecondaryStyle: ButtonProps = {
  variant: "outline",
  bgColor: "brand.whiteCream",
  borderColor: "brand.primary",
  color: "brand.primaryDark",
  rounded: "sm",
  size: "sm",
  w: { base: "120px", lg: "150px" },
  _hover: {
    bgColor: "brand.primaryDark",
    color: "brand.whiteCream",
    borderColor: "brand.primary",
  },
};

export const buttonPrimaryStyle: ButtonProps = {
  variant: "outline",
  bgColor: "brand.primary",
  borderColor: "brand.whiteCream",
  color: "brand.whiteCream",
  rounded: "sm",
  size: "sm",
  w: { base: "120px", lg: "150px" },
  _hover: {
    bgColor: "brand.primaryDark",
    color: "brand.whiteCream",
    borderColor: "brand.whiteCream",
  },
};

export const buttonIncDecStyle: ButtonProps = {
  variant: "outline",
  bgColor: "brand.whiteCream",
  borderColor: "brand.primary",
  color: "brand.primary",
  rounded: "sm",
  size: "sm",
  _hover: {
    bgColor: "brand.whiteGreen",
    color: "brand.primary",
    borderColor: "brand.primary",
  },
};
