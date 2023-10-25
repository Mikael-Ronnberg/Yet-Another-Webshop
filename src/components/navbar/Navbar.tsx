import { Bag } from "../../icons/Bag";
import { Login } from "../../icons/Login";
import { Search } from "../../icons/Search";
import { Navitem } from "../navitem/Navitem";
import "./Navbar.scss";
import { Hamburger } from "../../icons/Hamburger";
import { Cart } from "../cart/Cart";

export const Navbar = () => {
  // const [open, isOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__blue-span"></div>
        <span className="navbar__green-span">
          PIECES FROM OUR PAST, TO SAVE OUR FUTURE 🌎
        </span>
        <div className="navbar__white-span">
          <div className="navbar__white-span--search">
            <Search></Search>
          </div>
          <ul className="navbar__white-span--menu">
            <Navitem icon={<Hamburger></Hamburger>}></Navitem>
          </ul>

          <div className="navbar__white-span--logo"></div>
          <div className="navbar__white-span--login">
            <Login></Login>
            <Cart></Cart>
          </div>
        </div>
      </nav>
    </>
  );
};
