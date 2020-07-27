import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
<Navbar expand="lg" id="navi">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
    <Link className="navtab" to="/">
      <Nav.Link className="navlink" href="#home">Home</Nav.Link>
    </Link>
    <Link className="navtab" to="/getinvolved">
      <Nav.Link className="navlink" href="/getInvolved">Get Involved</Nav.Link>
    </Link>
    <Link className="navtab" to="/contributorportal">
      <Nav.Link className="navlink" href="/contributorPortal">Contributor Portal</Nav.Link>
    </Link>
    <Link className="navtab" to="/contact">
      <Nav.Link className="navlink" href="/contact">Contact</Nav.Link>
    </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}
