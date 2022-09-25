import React, {useState} from "react";
import './styles/App.css';

function AppAlexandr() {
  const [word, setWord] = useState('');
  let newWord = ('');
  
  const addWord = (e) => {
    e.preventDefault();
    newWord = {setWord};
    console.log(newWord);
  }

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Homepage</h1>
      <input
        type = 'text'
        value = {word}
        placeholder = 'add your word'
        onChange = {(e) => setWord(e.target.value)}
      />
      <button onClick={addWord}>Ok</button>
      <p>You word is <b>{word}</b></p> 
    </div>
  );
}

export default AppAlexandr;
