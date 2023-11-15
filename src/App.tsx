import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { CartReducer } from "./reducers/CartReducer";

import { useEffect, useReducer } from "react";
import { initialState } from "./components/helpers";
import { IState } from "./models/Interfaces";
import { CartContext } from "./context/CartContext";
import { CartDispatchContext } from "./context/CartDispatchContext";
import { Box } from "@chakra-ui/react";

function App() {
  const loadStateFromLocalStorage = (startingState: IState) => {
    const localStorageState = localStorage.getItem("tempState");
    if (localStorageState === null) {
      return startingState;
    }
    return JSON.parse(localStorageState) as IState;
  };
  const [state, dispatch] = useReducer(
    CartReducer,
    loadStateFromLocalStorage(initialState)
  );

  useEffect(() => {
    localStorage.setItem("tempState", JSON.stringify(state));
  }, [state]);

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
