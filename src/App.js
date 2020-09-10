import React from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

import Navbar from "./components/navbar";

//Route Components Import
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Link to="/" component={Home} />
          <Link to="/dashboard" component={Dashboard} />
          <Link to="/login" component={Login} />
          <Link to="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
