import { Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react";
import { IBreadCrumbItems } from "../../models/Interfaces";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

interface IBreadCrumbs {
  items?: IBreadCrumbItems[];
}

export const BreadCrumbs = ({ items = [] }: IBreadCrumbs) => {
  return (
    <>
      {items.length > 0 && (
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          w={{ base: "100%", lg: "90%" }}
          py="2rem"
          px="1rem"
          mx="auto"
          fontSize={{ base: "xs", md: "md" }}
          mt={{ base: "3rem", lg: "0.5rem" }}
        >
          {items.map((item, index) =>
            index !== items.length - 1 ? (
              <BreadcrumbItem key={index}>
                <Link to={item.link}>{item.name}</Link>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <Text color="gray.500">{item.name}</Text>
              </BreadcrumbItem>
            )
          )}
        </Breadcrumb>
      )}
    </>
  );
};
