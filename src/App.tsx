import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import "./App.scss";
import { CartReducer } from "./reducers/CartReducer";
import { CartContext } from "./context/CartContext";
import { CartDispatchContext } from "./context/CartDispatchContext";
import { useReducer } from "react";
import { initialState } from "./components/helpers";
import { Box } from "@chakra-ui/react";

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  console.log(state);
  return (
    <>
      <Box bgGradient="linear(to-t, brand.primaryDark, brand.primaryLight)">
        <CartContext.Provider value={state}>
          <CartDispatchContext.Provider value={dispatch}>
            <RouterProvider router={router} />
          </CartDispatchContext.Provider>
        </CartContext.Provider>
      </Box>
    </>
  );
}

export default App;
