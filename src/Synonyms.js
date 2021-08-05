import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <h6>Similar words:</h6>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
