import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";
import Photos from "./Photos";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section className="section1">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
        <Photos photos={props.photos} />
      </div>
    );
  } else {
    return null;
  }
}
