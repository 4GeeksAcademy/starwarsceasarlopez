// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Layout from './layout.js';
import { Home } from "./views/home";

// render your react application
ReactDOM.render(
  <Layout>
    <Home />
  </Layout>,
  document.querySelector("#app")
);
