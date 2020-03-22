import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home.js";

import memorylogo from "./images/memorylogo.png";
import memoryeg from "./images/memoryeg.png";
import scoodlelogo from "./images/scoodlelogo.svg";
import scoodleeg1 from "./images/scoodleeg1.png";
import scoodleeg2 from "./images/scoodleeg2.png";

export class App extends Component {
  render() {
    return (
      <div className="Background">
        <Home />
        <div className="b2">
          <div className="Projects">
            <a href="https://github.com/JBuhay34/NoteTakingApp">
              <h1 className="First">Memory</h1>
            </a>
            <img className="MemoryLogo" src={memorylogo} alt="Memory" />
          </div>
          <h2>Android App that creates notes for users.</h2>
          <h2>
            Coded in Java and XML Using Firebase for backend requirements. You
            can also login through your gmail account
          </h2>
        </div>

        <div className="b2projects2">
          <div className="Projects">
            <h1 className="First">Scoodle</h1>
            <img className="ScoodleLogo" src={scoodlelogo} alt="Scoodle" />
          </div>
          <div className="Projects">
            <h2>UI Design created using Figma</h2>
            <img className="ScoodleEg1" src={scoodleeg1} alt="ScoodleEg" />
            <img className="ScoodleEg2" src={scoodleeg2} alt="ScoodleEg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
