import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Route, Switch,Redirect  } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducer/root_reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import fa from "./firebase";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    // reactReduxFirebase, // redux binding for firebase
    reduxFirestore(fa) // redux bindings for firestore
  )
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
