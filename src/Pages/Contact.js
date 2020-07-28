import React from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import "./styles.css";

export default function Contact() {
  return (
    <div>
      <Jumbotron>
        <h2>Get In Touch</h2>
      </Jumbotron>
      <Container className="jothefish">
        <p>Want to find out more? Contact us!</p>
        <Form>
          <Form.Control className="contactinput" type="text" placeholder="Name" />
          <Form.Control className="contactinput" type="email" placeholder="Email" />
          <Form.Control className="contactinput" as="textarea" placeholder="Message" rows="5" />
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
}
