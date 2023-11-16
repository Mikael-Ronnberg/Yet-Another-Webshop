import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Categories } from "../Categories/components/Categories";
import { Banner } from "./components/Banner";
import { FeatProd } from "./components/FeatProd";
import { featItems } from "../../mocks/feat";
import { categories } from "../../mocks/categories";
import { Box } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Box
        borderBottom="1px"
        borderColor="brand.whiteCream"
        pt={{ base: "3rem", lg: "7rem" }}
        ml="3rem"
        mr="3rem"
      ></Box>
      <Categories categories={categories} />
      <Box
        borderBottom="1px"
        borderColor="brand.whiteCream"
        pt={{ base: "2rem", lg: "4rem" }}
        pb={{ base: "0rem" }}
        ml="3rem"
        mr="3rem"
      ></Box>
      <FeatProd title="Most Popular" products={featItems.mostPopular} />
      <Footer />
    </>
  );
};
