import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
<Navbar expand="lg" id="navi">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link className="navlink" href="#home">Home</Nav.Link>
      <Nav.Link className="navlink" href="#getInvolved">Get Involved</Nav.Link>
      <Nav.Link className="navlink" href="#contributorPortal">Contributor Portal</Nav.Link>
      <Nav.Link className="navlink" href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}
