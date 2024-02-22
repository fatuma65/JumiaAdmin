import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import {AuthProvider } from "./components/AuthContext.jsx";
import "./index.css";
import { Provider } from "react-redux";
import stores from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Provider store={stores}>
        <App />
      </Provider>
    </AuthProvider>
  </BrowserRouter>
);
