import React, { useState } from "react";
import { Jumbotron, Container, Col, Row, Card } from "react-bootstrap";
import "./styles.css";
// import teamData from "../Team/teamData";
// import Member from "../Components/Member/member";
import Simon from "../Team/simon.jpg";
import Suubi from "../Team/suubi.jpg";
import Jenny from "../Team/JennyLee.png";
import Maggie from "../Team/maggie.jpg";
import Allan from "../Team/allan.jpeg";
import Jeffrey from "../Team/jeffrey.jpeg";
import Jinny from "../Team/jinny.JPG";
import Sharlene from "../Team/sharlene.png";
// import Poop from "../Team/Poop-Emoji.png";

export default function Team() {
  // const allMembers = teamData.map(member => <Member key={member.id} member={member} />)
  
  const [simonBio, setSimonBio] = useState("");

  const handleBio = () => {
      setSimonBio("People describe me as a young entrepreneur with lots of energy and eagerness to get stuff done. I prefer a more humble approach, I try to do right for people and want to leave my mark on this world. Jo the Fish is a representation of how I think we should choose the people and businesses we (in)directly empower. Your values reflected in your internet behaviour.");
  }
  const removeBio = () => {
      setSimonBio("");
  }

  return (
    <div>
      <Jumbotron>
        <h1>Our Team</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
          <img className="member" src={Simon} alt="simon" 
          onMouseOver={handleBio}
          onMouseOut={removeBio}
          />
          {simonBio ? 
          <Card> {simonBio} </Card> : ""}
          </Col>
          <Col>
          <img className="member" src={Suubi} alt="suubi" />
          </Col>
          <Col>
          <img className="member" src={Allan} alt="allan" />
          </Col>
          <Col>
          <img className="member" src={Jenny} alt="jenny" />
          </Col>
        </Row>
        <Row>
          <Col>
          <img className="member" src={Maggie} alt="maggie" />
          </Col>
          <Col>
          <img className="member" src={Sharlene} alt="sharlene" />
          </Col>
          <Col>
          <img className="member" src={Jinny} alt="jinny" />
          </Col>
          <Col>
          <img className="member" src={Jeffrey} alt="jeffrey" />
          </Col>
        </Row>
        {/* <Row>
            <Col md={4}>
            <img className="member" src={Poop} alt="unavailable" />
            </Col>
        </Row> */}
      </Container>
    </div>
  );
}
