import React, { useState, useEffect } from 'react';
import MyButton from '../components/UI/Buttons/MyButton';
import MyTextArea from '../components/UI/TextAreas/MyTextArea.jsx';
import VocabularyList from '../components/VocabularyList';
import classes from './Translator.module.css';

const axios = require('axios').default;

const TranslatorItem = (props) => {
  {/* translator from https://www.youtube.com/watch?v=0vQkTya1Qb4*/ }
  const [options, setOptions] = useState([]);
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

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
      setOutput(res.data.translatedText);
    })
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages',
        {
          headers: {
            'accept': 'application/json'
          }
        }).then(res => {
          setOptions(res.data);
        })
  }, [])

  const [words, setWords] = useState([
    { id: 1, ourWord: '', translatedWord: '' },
    { id: 2, ourWord: '', translatedWord: '' },
    { id: 3, ourWord: '', translatedWord: '' },
  ])

  const addNewWord = (e) => {
    const newWord = {
      id: Date.now(),
      input,
      output
    }
    setWords([...words, newWord])
    setInput('');
    setOutput('');
  }

  const removeWord = (word) => {
    setWords(words.filter(p => p.id !== word.id))
  }

  const sortVocabularyWords = (sort) => { 
    setSelectedSort(sort);
    setWords([...words].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div>
      {/* translator */}
      <div className={classes.translatorStyles}>
        From ({from}):
        <select className={classes.translatorSelect} onChange={e => setFrom(e.target.value)}>
          {options.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
        </select>
        To ({to}):
        <select className={classes.translatorSelect} onChange={e => setTo(e.target.value)}>
          {options.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
        </select>
      </div>
      <form>
        <MyTextArea
          placeholder='enter your word'
          value={input}
          onInput={(e) => {
            if (/[0-9]/.test(e.target.value)) {
              alert('You cannot enter numbers or space in this field. Click OK and try again')
              setInput('');
            } else {
              setInput(e.target.value);
            }
          }
          }
        />
        <MyTextArea
          disabled
          placeholder='here is your translate'
          defaultValue={output}
          onChange={e => setInput(e.target.value)}
        />
      </form>
      <div>
        <MyButton onClick={e => translate()}>Translate</MyButton>
        <MyButton onClick={addNewWord}>Add to vocabulary</MyButton>
      </div>

      {words.length
        ? <VocabularyList words={words} remove={removeWord} sortVocabularyWords = {sortVocabularyWords} selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
        : <h1 style={{ textAlign: 'center', color: 'red' }}>
          Words not found. <p style={{ color: 'teal' }}>Add the word to your own dictionary.</p></h1>
      }

    </div>
  );
};

export default TranslatorItem;