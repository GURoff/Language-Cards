import React, {useState, useEffect} from "react";
import './styles/App.css';

function App() {
  const [word, setWord] = useState('');

  const changeWord = () => {
    setWord(prompt("What Is Your Word?"));
  }

  useEffect(changeWord, []);
  
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Homepage</h1>
      <p>Your word is <b>{word}</b>!</p>
      <button onClick={changeWord}>Change Word</button>
    </div>
  );
}

export default App;
