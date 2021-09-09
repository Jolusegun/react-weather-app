import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nashville" />
        <div>
          <small>
            This project was coded by Joyce O. Olusegun and {""}
            <a
              href="https://github.com/Jolusegun/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
