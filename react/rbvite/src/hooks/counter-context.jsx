import { createContext, useContext, useReducer } from "react";

const CountContext = createContext();

const CountProvider = ({ children }) => {
  // const [count, setCount] = useState(0);

  // dispatch ({type: 'plus', payload: 2})
  const [count, dispatch] = useReducer((count, action) => {
    const { type, step } = action;
    switch (type) {
      case "plus":
        return count + step;
      case "minus":
        return count - step;
      default:
        return count;
    }
  });

  //   if (action.type === "plus") {
  //     return count + 1;
  //   } else if (action.type === " minus") {
  //     return count - 1;
  //   } else {
  //     return count;
  //   }
  // }, 0);

  // const plusCount = () => setCount((count) => count + 1);
  // const minusCount = () => setCount((count) => count - 1);
  const plusCount = (step = 1) => dispatch({ type: "plus", step });
  const minusCount = (step = 1) => dispatch({ type: "minus", step });
  return (
    <CountContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => useContext(CountContext);

// eslint-disable-next-line react-refresh/only-export-components
export { CountProvider, useCount };
