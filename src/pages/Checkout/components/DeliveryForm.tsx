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
      <Card borderWidth="1px" borderColor="gray.200" shadow="none">
        <CardHeader>
          <Heading size="md">Delivery Information</Heading>
        </CardHeader>

        <CardBody>
          <Stack spacing="2rem">
            <Box>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" placeholder="Full name" />
            </Box>

            <Box>
              <FormLabel>Address</FormLabel>
              <Input type="text" placeholder="address" />
            </Box>

            <Box>
              <FormLabel>Phone</FormLabel>
              <Input type="text" placeholder="phone number" />
            </Box>

            <Box>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="email" />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
