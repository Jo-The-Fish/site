import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./styles.css";
import teamData from "../teamData";
import Member from "../Components/Member/member";


export default function Team() {
    const allMembers = teamData.map(member => <Member key={member.id} member={member} />)

  return (
    <div>
        <Jumbotron>
        <h1>Our Team</h1>
        </Jumbotron>
        <Container>
            {allMembers}
        </Container>

    </div>
  );
}
