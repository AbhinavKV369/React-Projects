import React, { useReducer } from "react";
import "./Calculator.css";

const initialState = {
  current: "0",
  previous: null,
  operator: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        current: "0",
        previous: null,
        operator: null,
      };

    case "DELETE":
      return {
        ...state,
        current: state.current.length > 1 ? state.current.slice(0, -1) : "0",
      };

    case "ADD_DIGIT":
      if (action.payload === "." && state.current.includes(".")) {
        return state;
      }
      if (state.current === "0" && action.payload !== ".") {
        return { ...state, current: action.payload };
      }
      return { ...state, current: state.current + action.payload };

    case "CHOOSE_OPERATOR":
      return {
        previous: state.current,
        current: "0",
        operator: action.payload,
      };

    case "CALCULATE": {
      if (!state.operator || state.previous === null) return state;

      var prev = parseFloat(state.previous);
      let curr = parseFloat(state.current);
      let result = 0;

      switch (state.operator) {
        case "+":
          result = prev + curr;
          break;
        case "-":
          result = prev - curr;
          break;
        case "*":
          result = prev * curr;
          break;
        case "/":
          result = prev / curr;
          break;
        default:
          return state;
      }

      return {
        current: String(result),
        previous: null,
        operator: null,
      };
    }

    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="screen">{state.current}</div>
      <div className="button-div">
        <div className="row">
          <button
            className="button"
            onClick={() => dispatch({ type: "CLEAR" })}>
            AC
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "DELETE" })}>
            DEL
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "/" })}>
            /
          </button>
        </div>

        <div className="row">
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "1" })}>
            1
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "2" })}>
            2
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "3" })}>
            3
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "*" })}>
            *
          </button>
        </div>

        <div className="row">
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "4" })}>
            4
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "5" })}>
            5
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "6" })}>
            6
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "+" })}>
            +
          </button>
        </div>

        <div className="row">
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "7" })}>
            7
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "8" })}>
            8
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "9" })}>
            9
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "-" })}>
            -
          </button>
        </div>

        <div className="row">
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "." })}>
            .
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "ADD_DIGIT", payload: "0" })}>
            0
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "CALCULATE" })}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
