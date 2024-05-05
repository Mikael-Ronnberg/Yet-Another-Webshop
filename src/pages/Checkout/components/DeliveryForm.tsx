import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";

export const DeliveryForm = () => {
  return (
    <>
      <Card
        borderWidth="1px"
        borderColor="gray.200"
        shadow="none"
        rounded="sm"
        bgColor="white"
        mb="3rem"
      >
        <CardHeader>
          <Heading size="md" color="brand.darkText">
            Delivery Information
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack spacing="2rem">
            <Box>
              <FormLabel color="brand.darkText">Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Full name"
                borderColor="brand.primary"
                rounded="sm"
              />
            </Box>

            <Box>
              <FormLabel color="brand.darkText">Address</FormLabel>
              <Input
                type="text"
                placeholder="address"
                borderColor="brand.primary"
                rounded="sm"
              />
            </Box>

            <Box>
              <FormLabel color="brand.darkText">Phone</FormLabel>
              <Input
                type="text"
                placeholder="phone number"
                borderColor="brand.primary"
                rounded="sm"
              />
            </Box>

            <Box>
              <FormLabel color="brand.darkText">Email</FormLabel>
              <Input
                type="email"
                placeholder="email"
                borderColor="brand.primary"
                rounded="sm"
              />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
