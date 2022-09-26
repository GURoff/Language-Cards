import React, {useState, useEffect} from "react";
import './styles/App.css';

const axios = require('axios').default;

function AppAlexandr() {
  const [word, setWord] = useState('');
  let newWord = ('');
  
  const addWord = (e) => {
    e.preventDefault();
    newWord = {setWord};
    console.log(newWord);
  }

   {/* translator from https://www.youtube.com/watch?v=0vQkTya1Qb4*/}
    const [options, setOptions] = useState([]);
    const [from, setFrom] = useState('en');
    const [to, setTo] = useState('en');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const translate = () => {
      const params = new URLSearchParams();
      params.append('q', input);
      params.append('source', from);
      params.append('target', to);
      params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
      axios.post('https://libretranslate.de/translate', params, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(res => {
        // console.log(res.data);
        setOutput(res.data.translatedText);
      })
    };

    useEffect(()=> {
      axios
      .get('https://libretranslate.de/languages',
      {headers: {
        'accept': 'application/json'}}).then(res => {
        console.log(res.data);
        setOptions(res.data);
      })
    }, [])

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
    {/* translator */}
        <div>
          From ({from}):
            <select onChange = {e => setFrom(e.target.value)}>
              {options.map(opt => <option key = {opt.code} value = {opt.code}>{opt.name}</option>)}
            </select>
          To ({to}):
          <select onChange = {e => setTo(e.target.value)}>
              {options.map(opt => <option key = {opt.code} value = {opt.code}>{opt.name}</option>)}
            </select>
        </div>
        <div>
          <textarea 
            cols = '30' 
            rows = '1'
            placeholder = 'enter your word'
            onInput = {(e) => setInput(e.target.value)}>
          </textarea>
        </div>
        <div>
          <textarea 
            cols = '30' 
            rows = '1'
            placeholder = 'here is your translate'
            defaultValue = {output}>
          </textarea>
        </div>
        <div>
          <button onClick = {e => translate()}>Translate</button>
        </div>
    </div>
  );
}

export default AppAlexandr;
