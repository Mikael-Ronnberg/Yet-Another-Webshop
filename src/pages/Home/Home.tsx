import { Box } from "@chakra-ui/react";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Categories } from "../Categories/components/Categories";
import { Banner } from "./components/Banner";
import { FeatProd } from "./components/FeatProd";
import { featItems } from "../../mocks/feat";
import { categories } from "../../mocks/categories";

export const Home = () => {
  return (
    <>
      <Box bgGradient="linear(to-t, brand.primaryDark, brand.primaryLight)">
        <Navbar />
        <Banner />
        <Categories categories={categories} />
        <FeatProd title="Most Popular" products={featItems.mostPopular} />
        <Footer />
      </Box>
    </>
  );
};
