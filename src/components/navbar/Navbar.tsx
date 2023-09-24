// import { Bag } from "../../icons/Bag";
// import { Login } from "../../icons/Login";
// import { Search } from "../../icons/Search";
import { Navitem } from "../navitem/Navitem";
import "./Navbar.scss";

export const Navbar = () => {
  const insertTet = "products";
  return (
    <>
      <nav className="navbar">
        <div className="navbar__blue-span"></div>
        <span className="navbar__green-span">
          PIECES FROM OUR PAST, TO SAVE OUR FUTURE 🌎
        </span>
        <div className="navbar__white-span">
          <ul className="navbar__white-span--menu">
            <Navitem text={insertTet}></Navitem>
          </ul>

          {/* <div className="navbar__white-span--logo"></div>
          <div className="navbar__white-span--login">
            <Login></Login>
            <Bag></Bag>
          </div> */}
        </div>
      </nav>
    </>
  );
};
