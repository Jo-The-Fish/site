import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import BlueJo from "../Jo/Jo-happy-blue-10-flat.svg";
import Reactions from "../Components/JoReactions/reactions";
import HowJoWorks from "../Components/HowJoWorks/howjoworks";

export default function Landing() {
  return (
    <div>
      <Jumbotron>
        <Row>
          <Col xs={12} sm={12} md={6} md={6} id="rightalignjo">
            <img id="landingjo" src={BlueJo} alt="happy Jo"></img>
          </Col>
          <Col xs={12} sm={12} md={6} md={6}>
            <h1 className="leftalignheading">
              <mark>Jo the Fish</mark>
            </h1>
            <p className="leftaligntext">
              Jo sits in your browser and will warn you when something smells a
              bit fishy.
            </p>
            <p id="comingsoon">
              Coming soon...
            </p>
          </Col>
        </Row>
      </Jumbotron>
      <HowJoWorks />
      <Reactions />
    </div>
  );
}
