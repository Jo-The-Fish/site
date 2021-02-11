import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
// import { ScrollingProvider, SectionLink, Section } from "react-scroll-section";


export default function Navigation () {
  return (
    <div>
<Navbar expand="lg" id="navi">
  <Navbar.Toggle className="navbar-light" aria-controls="basic-navbar-nav" id="toggle-icon" />
  <Navbar.Collapse id="basic-navbar-nav">
    {/* <Nav className="m-auto"> */}
    <Nav className="mr-auto">
    <Link className="inactive" activeClassName="active" exact={true} to="/">HOME
      {/* <Nav.Link className="navlink" href="#home">HOME</Nav.Link> */}
    </Link>
    <Link className="inactive" activeClassName="active" exact={true} to="/getinvolved">GET INVOLVED
      {/* <Nav.Link className="navlink" href="/getInvolved">GET INVOLVED</Nav.Link> */}
    </Link>
    {/* <Link className="navtab" to="/contributorportal">
      <Nav.Link className="navlink" href="/contributorPortal">Contributor Portal</Nav.Link>
    </Link> */}
    <Link className="inactive" activeClassName="active" exact={true}  to="/ourteam">OUR TEAM
      {/* <Nav.Link className="navlink" href="/ourteam">OUR TEAM</Nav.Link> */}
    </Link>
    <Link className="inactive" activeClassName="active" exact={true}  to="/contact">CONTACT US
      {/* <Nav.Link className="navlink" href="/contact">CONTACT US</Nav.Link> */}
    </Link>
    </Nav>
    {/* <Link className="signuplink" inline to="subscribe" containerId="subscribeContainer">
      <a className="signuplink" to="/#subscribe">
        Sign up for early access!
        </a>
    </Link> */}
  </Navbar.Collapse>
  {/* <ScrollLink 
        to="subscribe" 
        spy={true} 
        smooth={true} 
        duration={500} 
        className='signuplink' 
        activeClass='some-active-class'
      >Sign up for early access!
  </ScrollLink> */}
</Navbar>
    </div>
  );
}
