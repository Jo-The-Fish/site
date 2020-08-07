import React from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import "./styles.css";
import BlueJo from "../Jo/Jo-happy-blue-10-flat.svg";
import Reactions from "../Components/JoReactions/reactions";
import HowJoWorks from "../Components/HowJoWorks/howjoworks";
import SignUpEarlyAccess from "../Components/WantEarlyAccess/wantEarlyAccess";
import downArrow from "../Jo/down_arrow.svg";
import { ScrollingProvider, SectionLink, Section } from "react-scroll-section";

export default function Landing() {
  return (
    <ScrollingProvider>
      <Jumbotron>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} id="rightalignjo">
            <img id="landingjo" src={BlueJo} alt="happy Jo"></img>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} >
            <Container id="centeralign">
              <h1 className="alignheading">Jo the Fish</h1>
              <p className="aligntext">
                Jo sits in your browser and will warn you when something smells
                a bit fishy.
              </p>
              <p id="comingsoon">Coming soon...</p>
            </Container>
          </Col>
        </Row>
        <Row>
        <Col className="centeralignheading" id="arrowDown" xs={12} lg={12}>
          <SectionLink section="howJoWorks">
            {({ onClick, isSelected }) => (
              <img id="blueDownArrow" src={downArrow} alt="down" onClick={onClick} selected={isSelected} />
            )}
          </SectionLink>
        </Col>
        </Row>
      </Jumbotron>
      <Section id="howJoWorks">
        <HowJoWorks />
      </Section>
      <Container fluid className="underTheWave">
        <Reactions />
        <Section id="subscribe">
          <SignUpEarlyAccess />
        </Section>
      </Container>
    </ScrollingProvider>
  );
}
