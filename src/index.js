import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
//TODO: Bootsrap Imports | No need to import in index.html
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
