import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  SETVALUE: "setvalue",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    case ACTIONS.SETVALUE:
      return { count: state.count + 5 };
    default:
      return state;
  }
}

function useCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const count = state.count;

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const reset = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  const setValue = () => {
    dispatch({ type: ACTIONS.SETVALUE });
  };
  return [count, increment, decrement, reset, setValue];
}

export default useCounter;
