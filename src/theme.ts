import { extendTheme } from "@chakra-ui/react";

export const colors = {
  brand: {
    primary: "#9EB29B",
    primaryLight: "#B2C6AA",
    primaryDark: "#90A865",
    primaryDarker: "#55633d",
    whiteCream: "#FFFCF6",
    whiteGreen: "#CDD5C4",
    brownLight: "#EDC39F",
    darkText: "#3A3A3A",
    lightText: "#939393",

    borderLight: "#998068",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `"Merriweather", serif`,
    body: `"Work Sans", sans-serif`,
  },
});
