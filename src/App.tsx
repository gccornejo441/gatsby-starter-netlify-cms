import React from 'react';
import hero_preview from "./hero_preview_dark.png";
import MemberSet from "./Dark-Main.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hero_preview} alt="hero_preview" />
        <p>
          Awesome design by Memberset
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height={90} width={360} src={MemberSet} alt="MemberSet Logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
