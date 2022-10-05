import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch("https://server-chi-ten.vercel.app/ssda")
      .then(r => r.json())
      .then(d => {
        console.log(d);
        console.log("object");
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to React </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code> src / App.js </code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;