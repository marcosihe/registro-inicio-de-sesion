import React from "react";
import { Fragment } from "react-is";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Menu from "./components/Menu";

function App() {
  return (
    <Fragment>
      <Router>
        <header className="bg-dark">
        <Menu/>
        </header>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
