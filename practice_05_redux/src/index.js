import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = createStore(reducer);

const update = () => {
  document.getElementById("counter").textContent = store.getState().value;
};

store.subscribe(update);

document.getElementById("inc").addEventListener("click", () => {
  store.dispatch(inc());
});

document.getElementById("dec").addEventListener("click", () => {
  store.dispatch(dec());
});

document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});

ReactDOM.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
  document.getElementById("root")
);
