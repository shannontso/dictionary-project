import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      <p>
        {props.phonetics.text}
        <span> </span>
        <button className="phoneticsAudio">
          <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
            Listen
          </a>
        </button>
      </p>
    </div>
  );
}
