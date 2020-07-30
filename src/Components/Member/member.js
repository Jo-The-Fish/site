import React from "react";
import { Col } from "react-bootstrap";

export default function Member(props) {
    return (
        <div>
            <Col>
            <p>{props.member.name}</p>
            </Col>
        </div>
    )
}