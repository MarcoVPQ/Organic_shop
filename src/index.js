import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "./style.css";

import configureStore from "./store/configureStore";
import AppRouter from "./router/AppRouter";

import { startSetProducts } from "./actions/productActions";

const renderApp = () => {
  render(<App />, document.getElementById("root"));
};

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};


store.dispatch(startSetProducts()).then(() => {
  renderApp();
});
