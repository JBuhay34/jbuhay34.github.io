import React, { Component } from 'react'
import logo from '../images/Logo.svg';
import menu from '../images/menu-24px.svg';
import line from "../images/Line.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";


import './Menu.css';

export class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {isMenuOpen: false};
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu(){
        console.log("Clicked " + this.state.isMenuOpen);
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        }
        ));
    };

    render() {
        let scrollToTop = () => {
            scroll.scrollToTop();
        };

        let linksMarkup = this.props.links.map((link, index) =>{
            return(
                <li className="Menu_list_item">
                    <Link activeClass="active"
                        to={'b' + (index + 1)}
                        onClick={this.openMenu}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            {link.label}
                    </Link>

                </li>
            );
        });




        return (
            <div>
                <nav className="Menu">
                    <div className="Logo_line">
                        <div className="Logologos">
                            <img src={logo} className="Logo" alt="JB" onClick={scrollToTop} />
                            <div className="Logologos2">
                                <a href="https://github.com/JBuhay34"><img src={github} className="Github" alt="github"/></a>
                                <a href="https://www.linkedin.com/in/justin-buhay/"><img src={linkedin} className="Linkedin" alt="linkedin"/></a>
                            </div>
                        </div>
                        <img src={line} className="Line" alt="Line" />
                    </div>

                    <img src={menu} alt="menu" className="Hamburger_icon" onClick={this.openMenu}/>
                    {this.state.isMenuOpen ? <div className="SideDrawer">                        
                        <ul className="Menu_list_side">
                            {linksMarkup}
                        </ul>
                    </div> : <div className="SideDrawerClosed"></div> }
                    
                    <div className="Menu_right">
                        <ul className="Menu_list">
                            {linksMarkup}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu
