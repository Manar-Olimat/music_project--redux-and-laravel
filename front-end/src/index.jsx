/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from 'react-auth-kit'
import "./index.css";
import App from "./App";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider authType = {'localstorage'}
  authName={'_auth'}>
  <Provider store={store}>
    
    <Router>
      <App />
    </Router>
  </Provider>
  </AuthProvider>
)
