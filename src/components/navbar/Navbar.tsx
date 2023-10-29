import "./Navbar.scss";

import { Box } from "@chakra-ui/react";
import { navbarStyles } from "./style";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  return (
    <>
      <Box h="120px" className="navbar-wrapper">
        <Box {...navbarStyles}>
          <DesktopNavbar />
          <MobileNavbar />
        </Box>
      </Box>
    </>
  );
};
