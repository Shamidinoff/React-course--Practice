import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById("counter").textContent = getState().value;
};

subscribe(update);

document.getElementById("inc").addEventListener("click", () => {
  dispatch(inc());
});

document.getElementById("dec").addEventListener("click", () => {
  dispatch(dec());
});

document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  dispatch(rnd(value));
});

ReactDOM.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
  document.getElementById("root")
);
