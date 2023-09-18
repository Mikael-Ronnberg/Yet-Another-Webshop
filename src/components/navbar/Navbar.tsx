import { Bag } from "../../icons/Bag";
import { Search } from "../../icons/Search";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="blue_span"></div>
        <span className="green_span">
          {" "}
          PIECES FROM OUR PAST, TO SAVE OUR FUTURE 🌎
        </span>
        <div className="white_span">
          <div className="search_nav">
            <Search></Search>
          </div>
          <nav className="navigation_links">
            <ul>
              <li>NEW IN</li>
              <li>WOMEN</li>
              <li>MEN</li>
              <li>EVERYONE</li>
              <li>BRANDS</li>
              <li>SPORTS</li>
              <li>DENIM</li>
              <li>SUMMER</li>
              <li>SALE & DEALS</li>
              <li>ABOCE & BEYOND</li>
              <li>SWIPER</li>
            </ul>
          </nav>
          <div className="logo"></div>
          <div className="login">
            <Bag></Bag>
          </div>
        </div>
      </header>
    </>
  );
};
