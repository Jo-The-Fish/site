import React, { useEffect, useState, useRef } from "react";
import { Card } from "react-bootstrap";
import "./member.css";

export default function Member(props) {
  const node = useRef();

  const [open, setOpen] = useState(false);

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
      <img src={props.src} alt={props.alt} onClick={(e) => setOpen(!open)} />
      {open && (
        <Card>
          <h3>{props.role}</h3>
          {props.bio}
        </Card>
      )}
    </div>
  );
}
