import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meanings.css";
import "./Synonyms.css";

export default function Meanings(props) {
  return (
    <div className="meanings">
      <h4>{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <Examples examples={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
