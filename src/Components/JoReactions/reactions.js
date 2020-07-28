import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HappyJo from "../../Jo/Jo-happy-10-flat-green-fin.svg";
import NeutralJo from "../../Jo/Jo-neutral-10-flat.svg";
import ConfusedJo from "../../Jo/Jo-confused-10-flatB.svg";
import SickJo from "../../Jo/Jo-dead-10-flat-B.svg";

export default function Reactions() {
  const [reaction, setReaction] = useState("");

  const setReactionHappy = () => {
    setReaction(`Visiting a website with positive history and mission?
    HAPPY Jo will let you know.`);
  };
  const setReactionConfused = () => {
    setReaction(
      `Sometimes Jo doesn't know but don't worry! You can help him by sharing information about the website and business behind it. This will get reviewed by our school of fishes and shared with all of Jo's friends.`
    );
  };
  const setReactionBad = () => {
    setReaction(
      `Yeah this ain't good... We found out some worrying intel about this page and we'd like you to review it. You make the final call but Jo just wants you to know that this water ain't that clear.`
    );
  };
  const setReactionNeutral = () => {
    setReaction(`Nothing to be highlighted?
      NEUTRAL Jo will go on its way.`);
  };
  const removeReaction = () => {
    setReaction("");
  };

  return (
    <Container>
      <Row>
        <Col>
          <img
            src={HappyJo}
            alt="happy jo"
            onMouseOver={setReactionHappy}
            onMouseOut={removeReaction}
          />
        </Col>
        <Col>
          <img
            src={ConfusedJo}
            alt="confused jo"
            onMouseOver={setReactionConfused}
            onMouseOut={removeReaction}
          />
        </Col>
        <Col>
          <img
            src={SickJo}
            alt="sick jo"
            onMouseOver={setReactionBad}
            onMouseOut={removeReaction}
          />
        </Col>
        <Col>
          <img
            src={NeutralJo}
            alt="neutral jo"
            onMouseOver={setReactionNeutral}
            onMouseOut={removeReaction}
          />
        </Col>
      </Row>
      <Row>
        <Container className="josreactions">
          {reaction ? reaction : <h5>Hover over each Jo to find out more!</h5>}
        </Container>
      </Row>
    </Container>
  );
}
