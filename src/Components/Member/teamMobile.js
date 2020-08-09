import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./member.css";
// import { CSSTransition } from "react-transition-group";

export default function TeamMobile (props) {

  return (
    <div>
    <Row className="mobileRow">
      <Col xs={12} sm={5}>
      <img src={props.src} alt={props.alt} />
      </Col>
      <Col xs={12} sm={7}>
      <Card id="mobileBio">
        <h3 className="whiteText">{props.role}</h3>
        {props.bio}
      </Card>
      </Col>
    </Row>
    </div>
  );
}
