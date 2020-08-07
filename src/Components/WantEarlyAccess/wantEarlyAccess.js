import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { postMailchimp } from "../../utils/API";
import "./wantEarlyAccess.css";

export default function SignUpEarlyAccess() {
  const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const [confirmation, setConfirmation] = useState("");

  const subscribe = (event) => {
    event.preventDefault();
    postMailchimp({
      email_address: email
    }).then(() => {
      console.log("You have been added to the list. Thank you!");
    }).catch(() => {
      console.log("Email invalid. Please try again.");
    })
  };

  // const url = process.env.MAILCHIMP_URL

  return (
    <div>
      {/* <MailchimpSubscribe url={url} /> */}
      <Container className="form" id="earlyAccess">
        <h2 className="whiteText">Want early access?</h2>
        <Form>
          <Form.Control
            className="contactinput"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="primary" type="submit" onClick={subscribe}>
            Submit
          </Button>
          {/* {error ? error : ""} */}
        </Form>
      </Container>
    </div>
  );
}