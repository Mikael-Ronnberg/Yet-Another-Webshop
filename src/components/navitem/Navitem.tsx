import { Link } from "react-router-dom";

interface navitemprops {
  text: string;
}

export const Navitem = (props: navitemprops) => {
  return (
    <>
      <li className="nav-item">
        <Link to="/products">{props.text}</Link>
      </li>
    </>
  );
};
