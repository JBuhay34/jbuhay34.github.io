import React, { Component } from "react";
import "./Projects.css";

import memorylogo from "../images/memorylogo.png";
import memoryeg from "../images/memoryeg.png";
import scoodlelogo from "../images/scoodlelogo.svg";
import scoodleeg1 from "../images/scoodleeg1.png";
import scoodleeg2 from "../images/scoodleeg2.png";
import espneg1 from "../images/espneg1.png";
import chateg1 from "../images/chateg1.jpg";
import chateg2 from "../images/chateg2.jpg";
import foodsuggeg1 from "../images/foodsuggeg1.png";

export class Projects extends Component {
  render() {
    return (
      <div>
        <div className="b2">
          <div className="Projects">
            <a href="https://github.com/JBuhay34/NoteTakingApp">
              <h1 className="First">Memory</h1>
            </a>
            <img className="MemoryLogo" src={memorylogo} alt="Memory" />
          </div>
          <div className="Projects">
            <h2>
              Android App that creates notes for users.
              <br />
              <br />
              Coded in Java and XML Using Firebase for backend requirements. You
              can also login through your gmail account
            </h2>
            <img className="Eg1" src={memoryeg} alt="Memory" />
          </div>
        </div>

        <div className="b2projects2">
          <div className="Projects">
            <h1 className="First">Buhay Chat</h1>
          </div>
          <div className="Projects">
            <h2>Chat Application made in Flutter and Firebase</h2>
            <img className="Eg1" src={chateg1} alt="ChatEg" />
            <img className="Eg2" src={chateg2} alt="ChateEg" />
          </div>
        </div>

        <div className="b2projects2">
          <div className="Projects">
            <h1 className="First">Scoodle</h1>
            <img className="ScoodleLogo" src={scoodlelogo} alt="Scoodle" />
          </div>
          <div className="Projects">
            <h2>UI Design created using Figma</h2>
            <img className="Eg1" src={scoodleeg1} alt="ScoodleEg" />
            <img className="Eg2" src={scoodleeg2} alt="ScoodleEg" />
          </div>
        </div>

        <div className="b2projects2">
          <div className="Projects">
            <h1 className="First">ESPN News</h1>
          </div>
          <div className="Projects">
            <h2>Coded in Java and XML, fetches data from a News API</h2>
            <img className="Eg1" src={espneg1} alt="EspnEg" />
          </div>
        </div>

        <div className="b2projects2">
          <div className="Projects">
            <h1 className="First">Food Suggestor</h1>
          </div>
          <div className="Projects">
            <h2>
              Use the Yelp API to search for restaurants at a given location.
            </h2>
            <img className="Eg1" src={foodsuggeg1} alt="FoodSuggestorEg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
