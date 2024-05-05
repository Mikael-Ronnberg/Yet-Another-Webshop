import { InputProps } from "@chakra-ui/react";
import { colors } from "../../theme";

export const searchInputStyles: InputProps = {
  type: "text",
  placeholder: "Search...",
  focusBorderColor: "brand.lightText",
  border: "none",
  sx: {
    "&::placeholder": {
      color: colors.brand.darkText,
    },
  },
};
