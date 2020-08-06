import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
// const mailchimp = require("@mailchimp/mailchimp_marketing");
// import MailchimpSubscribe from "react-mailchimp-subscribe"
// import jsonp from 'jsonp';
// import queryString from 'query-string';

export default function SignUpEarlyAccess() {
  const [email, setEmail] = useState("");
  // const [error, setError] = useState("");

  // const listId = process.env.MAILING_LIST_ID;
  // const subscribingUser = {
  //   firstName: email,
  //   lastName: email,
  //   email: email
  // };

  // async function subscribe (event) {
  //   event.preventDefault();
  //   const response = await mailchimp.lists.addListMember(listId, {
  //     email_address: subscribingUser.email,
  //     status: "subscribed",
  //     merge_fields: {
  //       FNAME: subscribingUser.firstName,
  //       LNAME: subscribingUser.lastName
  //     }
  //   });
  //   console.log(
  //     `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  //   );
  // };
  const subscribe = () => {
    //   const formData = {
    //     EMAIL: email
    //   };
    //   jsonp(`${process.env.REACT_APP_MAILCHIMP_URL}${queryString.stringify(formData)}`, { param: 'c' }, (err, data) => {
    //     console.log('err:', err);
    //     console.log('data:', data);
    //   });
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