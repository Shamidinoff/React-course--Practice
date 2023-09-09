import React from "react";
import ReactDOM from "react-dom/client";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
  }
};

let state = reducer(initialState, { type: "INC" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
