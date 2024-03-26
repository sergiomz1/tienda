import ReactDOM from "react-dom";
import React from "react";

import { App } from "./App";

import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App/>
  </ContextProvider>,
 document.getElementById("root"));
