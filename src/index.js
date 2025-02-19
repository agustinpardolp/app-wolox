import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/style/index.css";
import App from "./App";
import LanguageWrapper from "../src/components/LenguageWrapper";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <LanguageWrapper>
      <App />
    </LanguageWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
