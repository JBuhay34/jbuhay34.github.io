import React, { Component } from 'react'
import Menu from './components/Menu.js';
import './App.css';

import arrow from './images/ArrowDesign.svg';
import memorylogo from './images/memorylogo.png';
import memoryeg from './images/memoryeg.png';
import scoodlelogo from './images/scoodlelogo.svg';
import scoodleeg1 from './images/scoodleeg1.png';
import scoodleeg2 from './images/scoodleeg2.png';
import { Link, animateScroll as scroll } from "react-scroll";



import design1 from "./images/Design_1.svg";
import design2 from "./images/Design_2.svg";


export class App extends Component {
  render() {
    let links = [
      {label : 'Home', link: '#home'},
      {label : 'Projects', link: '#projects'},
      {label : 'Blog', link: '#blog'},
      {label : 'Contact', link: '#contact'},
    ];
    return (
      <div className="Background">
        <div className="b1">
          <Menu links={links}/>
          <h1>Justin Buhay</h1>
          <h2>Hi, I’m a Web and Mobile Developer based in San Francisco, California.</h2>
          <h3>Scroll Down</h3>
          <Link className="Arrow" 
            activeClass="active"
            to={'bhome2'}
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>
            <img className="ArrowImage" src={arrow} alt="Arrow"/>
          </Link>
          <img src={design1} className="Design1" alt="Design1" />
          <img src={design2} className="Design2" alt="Design2" />
        </div>

        <div className="bhome2">
          <h2 className="First">Went to school at University of California, Davis for a Computer Science Degree</h2>
          <h2>Have an A.S. Degree for Computer and Information Science from College of San Mateo</h2>
          <h2>Created various amount of projects throughout my courses. Also creating other projects on my own time.</h2>
        </div>

        <div className="b2">
          <div className="Projects">
            <a href="https://github.com/JBuhay34/NoteTakingApp">
              <h1 className="First">Memory</h1>
              </a>
              <img className="MemoryLogo"src={memorylogo} alt="Memory"/>

          </div>
          <h2>Android App that creates notes for users.</h2>
          <h2>Coded in Java and XML Using Firebase for backend requirements. You can also login through your gmail account</h2>
        </div>

        <div className="b2projects2">
          <div className="Projects">
            <h1 className="First">Scoodle</h1>
            <img className="ScoodleLogo" src={scoodlelogo} alt="Scoodle"/>
          </div>
            <div className="Projects">
            <h2>UI Design created using Figma</h2>
            <img className="ScoodleEg1" src={scoodleeg1} alt="ScoodleEg"/>
            <img className="ScoodleEg2" src={scoodleeg2} alt="ScoodleEg"/>
          </div>

        </div>

      </div>
    )
  }
}

export default App