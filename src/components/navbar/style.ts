import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "brand.primaryLight",
  color: "brand.whiteCream",
  mb: "1rem",
  zIndex: 10,
};

export const desktopNavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "0.5rem",
  borderBottomWidth: "1px",
  borderColor: "brand.whiteCream",
  display: { base: "none", lg: "flex" },
};

export const logoSectionStyles: StackProps = {
  direction: "row",
  gap: 6,
  flex: 1,
  alignItems: "center",
};

export const cartSectionStyles: StackProps = {
  direction: "row",
  spacing: 2,
};

export const mobileNavContainerStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "0.5rem",
  borderBottom: "1px",
  borderColor: "brand.whiteCream",
  display: { base: "flex", lg: "none" },
};
