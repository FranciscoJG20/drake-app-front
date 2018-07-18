import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
// aliasing BrowserRouter as Router here for brevity

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
