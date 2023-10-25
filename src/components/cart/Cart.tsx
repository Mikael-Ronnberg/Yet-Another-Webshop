import { Bag } from "../../icons/Bag";
import "./Cart.scss";

export const Cart = () => {
  return (
    <>
      <div className="cart">
        <span>
          <Bag></Bag>
          <span>0</span>
        </span>
      </div>
    </>
  );
};
