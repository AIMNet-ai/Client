import React from "react";
import { Route, Switch } from "react-router-dom";

//Route Components Import
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <Home {...props} />} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </Switch>
  );
};

export default Routes;
