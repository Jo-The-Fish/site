import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto" id="navi">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#getInvolved">Get Involved</Nav.Link>
          <Nav.Link href="#contributorPortal">Contributor Portal</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
