import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import HappyJo from "../../Jo/Jo-happy-10-flat-green-fin.svg";
import NeutralJo from "../../Jo/Jo-neutral-10-flat.svg";
import SickJo from "../../Jo/Jo-dead-10-flat-B.svg";
import ConfusedJo from "../../Jo/Jo-confused-10-flatB.svg";
import ShadedHappyJo from "../../Jo/shaded-Jo-happy.svg";
import ShadedSickJo from "../../Jo/shaded-Jo-sick.svg";
import ShadedConfusedJo from "../../Jo/shaded-Jo-confused.svg";
import ShadedNeutralJo from "../../Jo/shaded-Jo-neutral.svg";
import "./reactions.css";
// import { Transition } from 'react-transition-group';


export default function Reactions() {
  const [reaction, setReaction] = useState("");
  const [happyJo, setHappyJo] = useState();
  const [sickJo, setSickJo] = useState();
  const [confusedJo, setConfusedJo] = useState();
  const [neutralJo, setNeutralJo] = useState();

  const setReactionHappy = () => {
    setReaction(`When we know this company is legit and tends to do the right thing, Jo will just chill and swim around. Good responses to an incident make Jo happy too.`);
    setHappyJo(HappyJo);
  };
  const setReactionSick = () => {
    setReaction(
      `Yeah this ain't good... We found out some worrying intel about this page and we'd like you to review it. You make the final call but Jo just wants you to know that this water ain't that clear.`
    );
    setSickJo(SickJo);
  };
  const setReactionConfused = () => {
    setReaction(
      `Sometimes Jo doesn't know but don't worry! You can help him by sharing information about the website and business behind it. This will get reviewed by our school of fishes and shared with all of Jo's friends.`
    );
    setConfusedJo(ConfusedJo);
  };
  const setReactionNeutral = () => {
    setReaction(`Nothing to be highlighted?
      NEUTRAL Jo will go on its way.`);
    setNeutralJo(NeutralJo);
  };
  const removeReaction = () => {
    setReaction("");
    setHappyJo("");
    setSickJo("");
    setConfusedJo("");
    setNeutralJo("");
  };

  return (
    <Container fluid className="reactions">
      <Container>
      <Row className="getToKnowJo">
        <h2 className="whiteText">Get to Know Jo</h2>
        <p className="whiteText">
          Jo is deeply allergic to: any type of discrimination, hate speech,
          unethical business practices, racial inequality, links to 'dirty
          money', privacy invasion, modern slavery, child labor, mass pollution,
          public-misinformation for self gain, funding of anti-LGBTQIA+
          organizations, human-rights violations... </p>
          <p className="whiteText"> Jo likes people and
          businesses who do right for the community, people who own up to their
          mistakes and use it as fuel to drive drastic change, people that fight
          for positive impact.
        </p>
      </Row>
      <Row id="fourjos">
        <Col className="addingImgMargins">
          {happyJo ? (
            <img
              src={HappyJo}
              alt="happy jo"
              onMouseOver={setReactionHappy}
              onMouseOut={removeReaction}
            />
          ) : (
            <img
              src={ShadedHappyJo}
              alt="happy jo"
              onMouseOver={setReactionHappy}
              onMouseOut={removeReaction}
            />
          )}
        </Col>
        <Col className="addingImgMargins">
          {sickJo ? (
            <img
              src={SickJo}
              alt="sick jo"
              onMouseOver={setReactionSick}
              onMouseOut={removeReaction}
            />
          ) : (
            <img
              src={ShadedSickJo}
              alt="sick jo"
              onMouseOver={setReactionSick}
              onMouseOut={removeReaction}
            />
          )}
        </Col>
        <Col className="addingImgMargins">
          {confusedJo ? (
            <img
              src={ConfusedJo}
              alt="confused jo"
              onMouseOver={setReactionConfused}
              onMouseOut={removeReaction}
            />
          ) : (
            <img
              src={ShadedConfusedJo}
              alt="sick jo"
              onMouseOver={setReactionConfused}
              onMouseOut={removeReaction}
            />
          )}
        </Col>
        <Col className="addingImgMargins">
          {neutralJo ? (
            <img
              src={NeutralJo}
              alt="neutral jo"
              onMouseOver={setReactionNeutral}
              onMouseOut={removeReaction}
            />
          ) : (
            <img
              src={ShadedNeutralJo}
              alt="neutral jo"
              onMouseOver={setReactionNeutral}
              onMouseOut={removeReaction}
            />
          )}
        </Col>
      </Row>
      </Container>
      <Row>
          {happyJo ? <Card id="happyJoText"> <h3 style={{color: "#15E659"}}>Happy Jo</h3>{reaction} </Card>: ""}
          {sickJo ? <Card id="sickJoText"> <h3 style={{color: "#FE5F55"}}>Sick Jo</h3>{reaction} </Card>: ""}
          {confusedJo ? <Card id="confusedJoText"> <h3 style={{color: "#FFC126"}}>Confused Jo</h3>{reaction} </Card>: ""}
          {neutralJo ? <Card id="neutralJoText"> <h3 style={{color: "#4EC8F4"}}>Neutral Jo</h3>{reaction} </Card>: ""}
      </Row>
    </Container>
  );
}
