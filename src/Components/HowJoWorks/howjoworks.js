import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./howjoworks.css";

export default function HowJoWorks() {
  return (
    <Container className="joworks">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <h2 className="howjoworks">How Jo Works</h2>
          <p>
            We help Jo's friends to make informed choices on the internet and in
            doing so, help revenue and profits to end up in the hands of
            companies that make the world a better place, sharing the facts of
            what the business is about or who is behind it.
          </p>
          <p>
            Start off by setting your preferences for what you want Jo to look
            out for, and Jo will react accordingly when you are browsing
            different websites.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
