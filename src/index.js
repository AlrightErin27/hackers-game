import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="">
        <Home />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
