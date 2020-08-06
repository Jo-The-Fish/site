import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { ScrollingProvider, SectionLink, Section } from "react-scroll-section";


export default function Navigation () {
  return (
    <div>
<Navbar expand="lg" id="navi">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    {/* <Nav className="m-auto"> */}
    <Nav className="mr-auto">
    <Link className="navtab" to="/">
      <Nav.Link className="navlink" href="#home">HOME</Nav.Link>
    </Link>
    <Link className="navtab" to="/getinvolved">
      <Nav.Link className="navlink" href="/getInvolved">GET INVOLVED</Nav.Link>
    </Link>
    {/* <Link className="navtab" to="/contributorportal">
      <Nav.Link className="navlink" href="/contributorPortal">Contributor Portal</Nav.Link>
    </Link> */}
    <Link className="navtab" to="/ourteam">
      <Nav.Link className="navlink" href="/ourteam">OUR TEAM</Nav.Link>
    </Link>
    <Link className="navtab" to="/contact">
      <Nav.Link className="navlink" href="/contact">CONTACT US</Nav.Link>
    </Link>
    </Nav>
    <Link inline>
      <Nav.Link className="signuplink" href="#">Sign up for early access!</Nav.Link>
    </Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}
