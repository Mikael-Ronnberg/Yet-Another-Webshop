import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main_container">
        <button className="btn_blue">SHOP EDIT</button>
        <button className="btn_white">TO SWIPER</button>
      </main>
      <Footer />
    </>
  );
};
