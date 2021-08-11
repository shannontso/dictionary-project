import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div>
      <div className="App">
        <header>
          <h1>Dictionary</h1>
        </header>
        <div>
          <Dictionary defaultKeyword="moon" />
        </div>
      </div>
      <footer>
        <small>
          Coded by{" "}
          <a
            href="https://github.com/shannontso"
            target="_blank"
            rel="noreferrer"
          >
            Shannon Tan
          </a>
        </small>
      </footer>
    </div>
  );
}
