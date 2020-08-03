import React, { useState } from "react";
import { Jumbotron, Container, Col, Row, Card } from "react-bootstrap";
import "./styles.css";
import teamData from "../Team/teamData";
// import Member from "../Components/Member/member";
import Simon from "../Team/simon.jpg";
import Suubi from "../Team/suubi.jpg";
import Jenny from "../Team/JennyLee.png";
import Maggie from "../Team/maggie.jpg";
import Allan from "../Team/allan.jpg";
import Jeffrey from "../Team/jeffrey.jpeg";
import Jinny from "../Team/jinny.JPG";
import Sharlene from "../Team/sharlene.png";
import Poop from "../Team/Poop-Emoji.png";

export default function Team() {
  // const allMembers = teamData.map(member => <Member key={member.id} member={member} />)

  //   const [simonBio, setSimonBio] = useState("");

  //   const handleBio = () => {
  //       console.log(teamData[0]);
  //       setSimonBio("ok")
  //   }
  //   const removeBio = () => {
  //       setSimonBio("");
  //   }

  return (
    <div>
      <Jumbotron>
        <h1>Our Team</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <img
              className="member"
              src={Simon}
              alt="simon"
              //   onMouseOver={handleBio}
              //   onMouseOut={removeBio}
            />
            <h3 style={{ textAlign: "center"}}>Simon Wijckmans <br /> Founder</h3>
          </Col>
          <Col>
            <img className="member" src={Allan} alt="allan" />
            <h3 style={{ textAlign: "center"}}>Allan Mwesigwa, <br /> Senior Software Developer</h3>
          </Col>
          <Col>
            <img className="member" src={Suubi} alt="suubi" />
            <h3 style={{ textAlign: "center"}}>Suubi David, <br /> Senior Software Developer</h3>
          </Col>
          <Col>
            <img className="member" src={Jenny} alt="jenny" />
            <h3 style={{ textAlign: "center"}}>Jenny Lee, <br /> Marketing Director</h3>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <img className="member" src={Maggie} alt="maggie" />
            <h3 style={{ textAlign: "center"}}>Maggie Chen, <br /> UX/UI Designer</h3>
          </Col>
          <Col>
            <img className="member" src={Sharlene} alt="sharlene" />
            <h3 style={{ textAlign: "center"}}>Sharlene May Minosa, <br /> Front End Developer</h3>
          </Col>
          <Col>
            <img className="member" src={Jinny} alt="jinny" />
            <h3 style={{ textAlign: "center"}}>Jinny Lee, <br /> Social Media Manager</h3>
          </Col>
          <Col>
            <img className="member" src={Jeffrey} alt="jeffrey" />
            <h3 style={{ textAlign: "center"}}>Jeffrey Cruz, <br /> Designer</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
