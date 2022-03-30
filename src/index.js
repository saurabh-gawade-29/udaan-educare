import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
//TODO: Bootsrap Imports | No need to import in index.html
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// TODO: React Router
import { BrowserRouter } from "react-router-dom";
// TODO: Add Global Css
import "./styles/global.scss";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// AIzaSyDQd18tNe5xViquCSZDegRQWZKBc62uGw4
