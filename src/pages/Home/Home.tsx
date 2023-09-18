import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main_container"></main>
      <Footer />
    </>
  );
};
