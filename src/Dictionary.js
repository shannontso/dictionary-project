import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f917000010000016655896f27334030989073958302a638";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6"
`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Results results={results} photos={photos} />
      </div>
    );
  } else {
    load();
    return `Loading..`;
  }
}
