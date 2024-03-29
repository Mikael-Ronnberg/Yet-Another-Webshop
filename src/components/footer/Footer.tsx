import {
  Box,
  chakra,
  Container,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LogoDark } from "../Icons/LogoDark";
import { Link } from "react-router-dom";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bg="brand.whiteCream" color="brand.primaryDarker" mt="2rem">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <LogoDark />
            </Box>
            <Text fontSize="sm">
              © 2023 Plant Dad Depot (PPD). All rights reserved
            </Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label="Facebook" href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label="Instagram" href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align="flex-start" py={{ base: "10", md: "5", lg: "2" }}>
            <Box borderBottom="1px" borderColor="brand.primaryDarker" w="10rem">
              <ListHeader>Company</ListHeader>
            </Box>
            <Link to={"#"}>About us</Link>
            <Link to={"#"}>Contact us</Link>
            <Link to={"#"}>Testimonials</Link>
          </Stack>
          <Stack align="flex-start" py={{ base: "10", md: "5", lg: "2" }}>
            <Box borderBottom="1px" borderColor="brand.primaryDarker" w="10rem">
              <ListHeader>Support</ListHeader>
            </Box>
            <Link to={"#"}>Help Center</Link>
            <Link to={"#"}>Terms of Service</Link>
            <Link to={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align="flex-start" py={{ base: "6", md: "5", lg: "2" }}>
            <ListHeader>Sign up for 10% discount!</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder="Your email address"
                bg="blackAlpha.100"
                rounded="sm"
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg="brand.primary"
                color="white"
                rounded="sm"
                _hover={{
                  bg: "brand.primaryDark",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
