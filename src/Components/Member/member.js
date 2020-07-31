import React from "react";
import { Col, Card } from "react-bootstrap";

export default function Member(props) {

    const image = props.member.img
    
  return (
    <div>
        <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          {/* <Card.Body>
            <Card.Title>{props.member.name}</Card.Title>
            <Card.Text>
                {props.member.bio}
            </Card.Text>
          </Card.Body> */}
        </Card>
        </Col>
    </div>
  );
}
