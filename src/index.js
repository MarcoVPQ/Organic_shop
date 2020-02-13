import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "./style.css";

import configureStore from "./store/configureStore";
import AppRouter from "./router/AppRouter";
import LoadingPage from './components/LoadingPage';


import { startSetProducts } from "./actions/productActions";



const store = configureStore();

let hasRender = false

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

const renderApp = () => {
  render(<App />, document.getElementById("root"));
};

render(<LoadingPage />,document.getElementById('root'));




store.dispatch(startSetProducts()).then(() => {
  if(!hasRender){
      renderApp();
      hasRender = true
  }
})
