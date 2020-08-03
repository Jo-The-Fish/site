import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import jsonp from 'jsonp';
import queryString from 'query-string';

export default function SignUpEarlyAccess() {

  const [email, setEmail] = useState("");

  const subscribe = () => {
    const formData = {
      EMAIL: email
    };
    jsonp(`${process.env.REACT_APP_MAILCHIMP_URL}${queryString.stringify(formData)}`, { param: 'c' }, (err, data) => {
      console.log('err:', err);
      console.log('data:', data);
    });
  }
  return (
    <div>
      <Container className="form">
        <h2 className="whiteText">Want early access?</h2>
        <Form>
          <Form.Control className="contactinput" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          <Button variant="primary" type="submit" onClick={subscribe}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
