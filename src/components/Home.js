import React, { Component } from "react";
import Menu from "./Menu.js";

import "./Home.css";

import { Link} from "react-scroll";
import arrow from "../images/ArrowDesign.svg";
import design1 from "../images/Design_1.svg";
import design2 from "../images/Design_2.svg";
import ucdlogo from "../images/ucdlogo.png";
import ucdname from "../images/ucdname.png";
import csmlogo from "../images/csm.png";
import downwardarrow from "../images/downwardarrow.svg";
import justin from "../images/justin.png";




export class Home extends Component {
  render() {
    let links = [
      { label: "Home", link: "#home" },
      { label: "Projects", link: "#projects" },
      // { label: "Blog", link: "#blog" },
      { label: "Contact", link: "#contact" }
    ];

    return (
      <div>
        <div className="b1">
          <Menu links={links} />
          <h1>Justin Buhay</h1>
          <h2>
            Hi, I’m a Web and Mobile Developer based in San Francisco,
            California.
          </h2>
          <img src={justin} id="justin" alt="justin" />
          <h3>Scroll Down</h3>
          <Link
            className="Arrow"
            activeClass="active"
            to={"bhome2"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <img className="ArrowImage" src={arrow} alt="Arrow" />
          </Link>
          <img src={design1} className="Design1" alt="Design1" />
          <img src={design2} className="Design2" alt="Design2" />
        </div>

        <div className="bhome2">
          <div className="textbhome2">
            <h1>About Me</h1>
            <h2>
            I'm currently a 4th year student at University of California, Davis pursuing a B.S. in Computer science.
            </h2>
            <h2>
            I've transferred from College of San Mateo with an A.S in Computer and Information Science as Magna Cum Laude.
            </h2>
            <h2>
            The goals and interest I have for my career would to become an Applications Software Developer and creating applications that can help the world.

            </h2>
          </div>
          <div className="imagesbhome2">
            <img src={csmlogo} id="csmlogo" alt="csmlogo"/>
            <img src={downwardarrow} id="downwardarrow" alt="arrowlogo"/>
            <img src={ucdlogo} alt="ucdlogo"/>
            <img src={ucdname} id="imgname" alt="ucdname"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
