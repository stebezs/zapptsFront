import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Carousel from "./components/Carousel";
import SignUp from "./components/SignUp";

function App() {
  return (
<Router>
    <Container className="app-container" fluid>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Invision</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          <Row className="container-row" >
            <Col className="caixa-1" xs={6}>
              <Carousel />
            </Col>
            <Col className="caixa-2" xs={6}>
              <div className="outer">
                <div className="inner">
                  <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                  </Switch>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
</Router>
  );
}

export default App;
