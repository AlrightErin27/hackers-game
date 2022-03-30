import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Home";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
