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
import { BiRightArrowAlt } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LogoDark } from "../Icons/LogoDark";
import { Link } from "react-router-dom";
import { colors } from "../../theme";

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
    <Box bg="brand.brownLight" color="brand.darkText" mt="2rem">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <LogoDark />
            </Box>
            <Stack direction="row" spacing={6} pl={7}>
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
            <Text fontSize="sm">
              © 2023 Plant Dad Depot (PPD). All rights reserved
            </Text>
          </Stack>

          <Stack align="flex-start" py={{ base: "10", md: "5", lg: "2" }}>
            <Box>
              <ListHeader>Information</ListHeader>
            </Box>

            <Link to={"#"}>About us</Link>
            <Link to={"#"}>Contact</Link>
            <Link to={"#"}>What others say about PPD</Link>
          </Stack>

          <Stack align="flex-start" py={{ base: "10", md: "5", lg: "2" }}>
            <Box>
              <ListHeader>Support</ListHeader>
            </Box>
            <Link to={"#"}>Help Center</Link>
            <Link to={"#"}>Terms of Service</Link>
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Cookies</Link>
          </Stack>

          <Stack align="flex-start" py={{ base: "6", md: "5", lg: "2" }}>
            <ListHeader>Sign up for our news letter!</ListHeader>
            <Box>
              <Text fontSize="sm">
                Sign up and get the latest information from your favorite Plant
                Depot! Don't miss out on exclusive offers.
              </Text>
            </Box>
            <Stack direction={"row"} gap={0}>
              <Input
                placeholder="Your email address"
                bg="brand.brownLight"
                rounded="sm"
                border={`1px solid ${colors.brand.borderLight}`}
                _hover={{
                  border: `1px solid ${colors.brand.darkText}`,
                }}
                _focus={{
                  bg: colors.brand.whiteCream,
                  border: `1px solid ${colors.brand.borderLight}`,
                  outline: "none",
                }}
                sx={{
                  "&::placeholder": {
                    color: colors.brand.borderLight,
                  },
                }}
              />
              <IconButton
                bg="brand.browLight"
                rounded="sm"
                color="brand.darkText"
                border={`1px solid ${colors.brand.borderLight}`}
                _hover={{
                  border: `1px solid ${colors.brand.darkText}`,
                }}
                _focus={{
                  bg: colors.brand.whiteCream,
                  border: `1px solid ${colors.brand.borderLight}`,
                  outline: "none",
                }}
                aria-label="Subscribe"
                icon={<BiRightArrowAlt />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
