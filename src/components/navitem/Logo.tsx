import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <Text as="span" fontWeight="bold">
          LOGO
        </Text>
      </Link>
    </>
  );
};
