import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";


export class App extends Component {
  render() {
    return (
      <div className="Background">
        <Home />
        <Projects />
      </div>
    );
  }
}

export default App;
