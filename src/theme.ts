import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/raleway";

export const colors = {
  brand: {
    primary: "#9EB29B",
    primaryLight: "#B2C6AA",
    primaryDark: "#90A865",
    primaryDarker: "#55633d",
    whiteCream: "#EEEAE0",
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
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});
