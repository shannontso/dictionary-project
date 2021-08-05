import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <section className="form">
          <form onSubmit={handleSubmit} className="searchForm">
            <input
              type="search"
              placeholder="What would you like to search?"
              className="searchBox"
              onChange={handleKeywordChange}
            ></input>
            <input type="submit" value="Go" className="submitButton"></input>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return `Loading..`;
  }
}
