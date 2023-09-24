import { Link } from "react-router-dom";
import "./Dropdown.scss";

interface Iopen {
  close: () => void;
}

export const Dropdown = (props: Iopen) => {
  return (
    <>
      <div className="dropdown">
        <button onClick={props.close}>X</button>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
