import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

import Counter from "./Counter";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Counter
        counter={getState().value}
        inc={inc}
        dec={dec}
        rnd={() => {
          const value = Math.floor(Math.random() * 10);
          rnd(value);
        }}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

update();

subscribe(update);
