import React, { Component } from "react";
import Popular from "./components/Popular";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Battle from "./components/Battle";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/battle" component={Battle} />
          <Route path="/popular" component={Popular} />
        </div>
      </Router>
    );
  }
}

export default App;
