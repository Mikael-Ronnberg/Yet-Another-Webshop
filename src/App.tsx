import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import "./App.scss";
import { CartReducer } from "./reducers/CartReducer";
import { CartContext } from "./context/CartContext";
import { CartDispatchContext } from "./context/CartDispatchContext";
import { useReducer } from "react";

function App() {
  const [shoppingCart, dispatch] = useReducer(CartReducer, []);
  return (
    <>
      <CartContext.Provider value={shoppingCart}>
        <CartDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}></RouterProvider>;
        </CartDispatchContext.Provider>
      </CartContext.Provider>
      ;
    </>
  );
}

export default App;
