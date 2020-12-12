import React, { Component, useState } from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import LocationDisplayPath from "./LocationDisplay";
import Nomatch from "./Nomatch";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={Nomatch} />
        </Switch>
        <LocationDisplayPath />
      </div>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplayPath;
