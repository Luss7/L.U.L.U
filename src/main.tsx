import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Utilisation de createRoot au lieu de render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
