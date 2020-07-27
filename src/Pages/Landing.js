import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./styles.css";
import BlueJo from "../Jo/Jo-happy-blue-10-flat.svg";
import Reactions from "../Components/JoReactions/reactions";

export default function Landing() {
  return (
    <div>
      <Jumbotron>
        <img src={BlueJo} alt="happy Jo"></img>
      </Jumbotron>
      <Container className="jothefish">
        <h2>Jo the Fish</h2>
        <h5>
          Jo sits in your browser and will warn you when something smells a bit
          fishy.
        </h5>
        <p>
          We help Jo's friends to make informed choices on the internet and in
          doing so, help revenue and profits to end up in the hands of companies
          that make the world a better place, sharing the facts of what the
          business is about or who is behind it.
        </p>
        <p>
          Jo is deeply allergic to: any type of discrimination, hate speech,
          unethical business practices, racial inequality, links to 'dirty
          money', privacy invasion, modern slavery, child labor, mass pollution,
          public-misinformation for self gain, funding of anti-LGBTQIA+
          organizations, human-rights violations... Jo likes people and
          businesses who do right for the community, people who own up to their
          mistakes and use it as fuel to drive drastic change, people that fight
          for positive impact.
          <br /><br/> 
          <h5>See below to learn more about Jo...</h5>
        </p>
      </Container>
      <Reactions />
    </div>
  );
}
