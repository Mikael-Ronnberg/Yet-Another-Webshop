import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import "./App.scss";
import { CartReducer } from "./reducers/CartReducer";
import { CartContext } from "./context/CartContext";
import { CartDispatchContext } from "./context/CartDispatchContext";
import { useReducer } from "react";
import { initialState } from "./components/helpers";

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  console.log(state);
  return (
    <>
      <CartContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router} />
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
