import React from "react";
import ReactDOM from "react-dom";
import store, {persistor} from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="loading..." persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
