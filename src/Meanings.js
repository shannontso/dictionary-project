import React from "react";

export default function Meanings(props) {
  return (
    <div>
      <h4>{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>"{definition.example}"</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
