import React from 'react';
import { Fragment } from 'react-is';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Admin from './components/Admin';
import Menu from './components/Menu';

function App() {
  return (
    <Fragment>
      <Container>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route exact path="/" component={Inicio}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </Router>
      </Container>
    </Fragment>
  );
}

export default App;
