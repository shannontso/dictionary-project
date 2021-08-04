import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      <p>{props.phonetics.text}</p>
      <a href={props.phonetics.audio} target="_blank">
        Listen
      </a>
    </div>
  );
}
