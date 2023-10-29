import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Categories } from "../../features/categories/Categories";
import { Banner } from "../../features/home/Banner";
import { FeatProd } from "../../features/home/FeatProd";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />

      <FeatProd title="New Arrivals" />
      <Footer />
    </>
  );
};
