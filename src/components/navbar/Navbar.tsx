import { Bag } from "../../icons/Bag";
import { Login } from "../../icons/Login";
import { Search } from "../../icons/Search";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__blue-span"></div>
        <span className="navbar__green-span">
          PIECES FROM OUR PAST, TO SAVE OUR FUTURE 🌎
        </span>
        <div className="navbar__white-span">
          <div className="navbar__white-span--search-nav">
            <Search></Search>
          </div>

          <div className="navbar__white-span--navigation-links">
            <input type="checkbox" className="toggle-menu" />
            <div className="hamburger"></div>
            <ul className="menu">
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
          </div>
          <div className="navbar__white-span--logo"></div>
          <div className="navbar__white-span--login">
            <Login></Login>
            <Bag></Bag>
          </div>
        </div>
      </nav>
    </>
  );
};
