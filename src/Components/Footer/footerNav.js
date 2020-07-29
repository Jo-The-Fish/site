import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <div>
      <Navbar expand="lg" id="bottomnavi">
        <Nav className="m-auto">
          <Link className="bottomnav" to="/">
            <Nav.Link className="bottomnavlink" href="#home">
              HOME
            </Nav.Link>
          </Link>
          <Link className="bottomnav" to="/getinvolved">
            <Nav.Link className="bottomnavlink" href="/getInvolved">
              GET INVOLVED
            </Nav.Link>
          </Link>
          {/* <Link className="bottomnav" to="/contributorportal">
      <Nav.Link className="bottomnavlink" href="/contributorPortal">Contributor Portal</Nav.Link>
    </Link> */}
          <Link className="bottomnav" to="/ourteam">
            <Nav.Link className="bottomnavlink" href="/ourteam">
              OUR TEAM
            </Nav.Link>
          </Link>
          <Link className="bottomnav" to="/contact">
            <Nav.Link className="bottomnavlink" href="/contact">
              CONTACT
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
