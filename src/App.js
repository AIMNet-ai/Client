import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"

import Navbar from "./components/navbar";
import Routes from "./Routes";

function App(props) {
  return (
    <>
      <Router>
        <Navbar {...props} />
        <Routes {...props} />
      </Router>
    </>
  );
}

export default App;
