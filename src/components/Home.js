import React, { Component } from "react";
import Menu from "./Menu.js";

import "./Home.css";

import { Link} from "react-scroll";
import arrow from "../images/ArrowDesign.svg";
import design1 from "../images/Design_1.svg";
import design2 from "../images/Design_2.svg";

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
          <h2 className="First">
            Went to school at University of California, Davis for a Computer
            Science Degree
          </h2>
          <h2>
            Have an A.S. Degree for Computer and Information Science from
            College of San Mateo
          </h2>
          <h2>
            Created various amount of projects throughout my courses. Also
            creating other projects on my own time.
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
