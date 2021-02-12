import React, { useEffect, useState, useRef } from "react";
import { Card } from "react-bootstrap";
import "./member.css";
import LazyImage from "./LazyImage";
// import { CSSTransition } from "react-transition-group";

export default function Member(props) {
  const node = useRef();

  const [open, setOpen] = useState(false);
  // const [showBio, setShowBio] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div ref={node}>
      {/* <img style={{borderRadius:"5%"}} src={props.src} alt={props.alt} onClick={() => setOpen(!open)} /> */}
      <LazyImage
            key={props.id}
            src={props.img}
            alt={props.name}
          />

      {open && (
          <Card id="showBio">
            <h3 className="whiteText">{props.role}</h3>
            {props.bio}
          </Card>
      )}
    </div>
  );
}
