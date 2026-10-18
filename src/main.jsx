import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap = the CSS plugin (grid + utilities). Your own CSS is App.css.
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // import AFTER bootstrap so your custom CSS wins
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
