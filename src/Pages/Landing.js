import React from "react";
import "./styles.css";
import BlueJo from "../Jo/Jo-happy-blue-10-flat.svg"
import Reactions from "../Components/JoReactions/reactions"

export default function Landing() {
  return (
    <div>
      <div className="jothefish">
        <img src={BlueJo} alt="happy Jo"></img>
        <h2>Jo the Fish</h2>
        <h5>Jo sits in your browser and will warn you when something smells a bit
        fishy.</h5>
        <p>
            We help Jo's friends to make informed choices on the internet and in
            doing so, help revenue and profits to end up in the hands of companies
            that make the world a better place, sharing the facts of what the
            business is about or who is behind it.
        </p>
      </div>
      <Reactions />
    </div>
  );
}
