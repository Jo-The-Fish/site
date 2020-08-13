import React from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import "./styles.css";
import teamData from "../Team/teamData";
import Member from "../Components/Member/member";
import TeamMobile from "../Components/Member/teamMobile";
import Simon from "../Team/simon.jpg";
import Suubi from "../Team/suubi.jpg";
import Jenny from "../Team/JennyLee.png";
import Maggie from "../Team/maggie.jpg";
import Allan from "../Team/allan.jpg";
import Jeffrey from "../Team/jeffrey.jpeg";
import Jinny from "../Team/jinny.JPG";
import Sharlene from "../Team/sharlene.png";
import Micha from "../Team/micha.jpg";

export default function Team () {
  // const allMembers = teamData.map(member => <Member key={member.id} member={member} />)

  return (
    <div>
      <Jumbotron id="team">
        <h1>Our Team</h1>
      </Jumbotron>
      <Container fluid className="teamUnderTheWave">
      <Container className="desktopTeam">
        <Row className="membersTopGrid">
          <Col>
          <Member 
            src={Simon}
            alt="simon"
            role={teamData[0].role}
            bio={teamData[0].bio}
          />
          </Col>
          <Col>
          <Member 
            src={Allan}
            alt="allan"
            role={teamData[2].role}
            bio={teamData[2].bio}
          />
          </Col>
          <Col>
          <Member 
            src={Suubi}
            alt="suubi"
            role={teamData[1].role}
            bio={teamData[1].bio}
          />
          </Col>
          <Col>
          <Member 
            src={Jenny}
            alt="jenny"
            role={teamData[3].role}
            bio={teamData[3].bio}
          />
          </Col>
        </Row>

        <Row className="membersMiddleGrid">
          <Col>
          <Member 
            src={Maggie}
            alt="maggie"
            role={teamData[4].role}
            bio={teamData[4].bio}
          />
          </Col>
          <Col>
          <Member 
            src={Sharlene}
            alt="sharlene"
            role={teamData[5].role}
            bio={teamData[5].bio}
          />
          </Col>
          <Col>
          <Member 
            src={Jinny}
            alt="jinny"
            role={teamData[6].role}
            bio={teamData[6].bio}
          />
          </Col>
          <Col>
          <Member 
            src={Jeffrey}
            alt="jeffrey"
            role={teamData[7].role}
            bio={teamData[7].bio}
          />
          </Col>
        </Row>
        <Row className="membersLowerGrid">
        <Col>
          <Member 
            src={Micha}
            alt="micha"
            role={teamData[9].role}
            bio={teamData[9].bio}
          />
        </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className="teamUnderTheWave2">
      {/* Mobile */}
      <div id="mobileTeam">
          <TeamMobile 
            src={Simon}
            alt="simon"
            role={teamData[0].role}
            bio={teamData[0].bio}
          />
          <TeamMobile 
            src={Allan}
            alt="allan"
            role={teamData[2].role}
            bio={teamData[2].bio}
          />
          <TeamMobile 
            src={Suubi}
            alt="suubi"
            role={teamData[1].role}
            bio={teamData[1].bio}
          />
          <TeamMobile 
            src={Jenny}
            alt="jenny"
            role={teamData[3].role}
            bio={teamData[3].bio}
          />
          <TeamMobile 
            src={Maggie}
            alt="maggie"
            role={teamData[4].role}
            bio={teamData[4].bio}
          />
          <TeamMobile 
            src={Sharlene}
            alt="sharlene"
            role={teamData[5].role}
            bio={teamData[5].bio}
          />
          <TeamMobile 
            src={Jinny}
            alt="jinny"
            role={teamData[6].role}
            bio={teamData[6].bio}
          />
          <TeamMobile 
            src={Jeffrey}
            alt="jeffrey"
            role={teamData[7].role}
            bio={teamData[7].bio}
          />
          <TeamMobile 
            src={Micha}
            alt="micha"
            role={teamData[9].role}
            bio={teamData[9].bio}
          />
      </div>
      {/* end Mobile */}

      </Container>
    </div>
  );
}
