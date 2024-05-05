import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "brand.whiteCream",
  color: "brand.darkText",
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

export const textSectionStyles: StackProps = {
  direction: "row",
  alignItems: "center",
  justifyContent: "space-around",
  borderTop: "1px",
  borderColor: "brand.lightText",
  marginLeft: "2rem",
  marginRight: "2rem",
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
