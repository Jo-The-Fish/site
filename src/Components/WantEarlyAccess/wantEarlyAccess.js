import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function SignUpEarlyAccess() {
  return (
    <div>
      <Container className="form">
        <h2>Want early access?</h2>
        <Form>
          <Form.Control className="contactinput" type="email" placeholder="Email" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
