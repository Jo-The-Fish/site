import React, { useState } from "react";
import { Jumbotron, Row, Col, Modal } from "react-bootstrap";
import FooterNav from "./footerNav";
import PrivacyPolicy from "../PrivacyPolicy/privacyPolicy";
import "./footer.css";
import mozilla from "../../Partners/mozilla.svg";
import stopHateForProfit from "../../Partners/stop-hate-for-profit.svg";
import stanford from "../../Partners/stanford.svg";
import twitter from "../../SocialIcons/twitter.svg";
import facebook from "../../SocialIcons/facebook.svg";
import instagram from "../../SocialIcons/instagram.svg";

export default function Footer() {
  // const year = document.write(new Date().getFullYear());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Jumbotron className="sitefooter">
        <h2 id="proudpartners">Proud Partners with</h2>
        <Row id="partners">
          <Col>
            <img className="partner" src={mozilla} alt="Mozilla" />
          </Col>
          <Col>
            <img
              className="partner"
              src={stopHateForProfit}
              alt="Stop Hate for Profit"
            />
          </Col>
          <Col>
            <img className="partner" src={stanford} alt="Stanford" />
          </Col>
        </Row>
        <FooterNav />
        <img className="socialicon" src={twitter} alt="Twitter" />
        <img className="socialicon" src={facebook} alt="Facebook" />
        <img className="socialicon" src={instagram} alt="Instagram" />
        <br />
        <p id="copywrite">
          © JoTheFish. All rights reserved.{" "}
          <text mouseOver={{ cursor: "pointer" }} onClick={handleShow}>
            Privacy Policy.
          </text>
        </p>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Jo the Fish Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <PrivacyPolicy />
        </Modal.Body>
      </Modal>
      </Jumbotron>
    </div>
  );
}
