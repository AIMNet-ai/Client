import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

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
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
