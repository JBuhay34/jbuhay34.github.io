import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";



export class App extends Component {
  render() {
    return (
      <div className="Background">
        <Home />
        <Projects />
        <Contact/>
      </div>
    );
  }
}

export default App;
