import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { store } from "./store";
import Main from "../src/views/Main";

function App() {
  return (
    <Provider store={store}>
      <IntlProvider locale="en">
        <Router>
          <Route>
            <Main />
          </Route>
        </Router>
      </IntlProvider>
    </Provider>
  );
}

export default App;
