import { useState } from "react";
import "./Navitem.scss";
import { Dropdown } from "../dropdown/Dropdown";

interface INavitemProps {
  icon: JSX.Element;
}

export const Navitem = (props: INavitemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
      </li>
      {open && <Dropdown close={() => setOpen(!open)} />}
    </>
  );
};
