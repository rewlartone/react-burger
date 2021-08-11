import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers/index';
import thunk from 'redux-thunk';
import { initStore } from './services/store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const store = initStore();

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
