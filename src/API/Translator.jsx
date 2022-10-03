import React, { useState, useEffect, useMemo } from 'react';
import MyButton from '../components/UI/Buttons/MyButton';
import MyInput from '../components/UI/Input/MyInput';
import VocabularyList from '../components/VocabularyList';
import WordFilter from '../components/WordFilter';
import classes from './Translator.module.css';

const axios = require('axios').default;

const TranslatorItem = (props) => {
  /* instructions for translator from https://www.youtube.com/watch?v=0vQkTya1Qb4*/
  const [options, setOptions] = useState([]);
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [filter, setFilter] = useState({ sort: '', query: '' });

  //Connect with translator---------------------------------------------------------------------
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
  //Create vocabulary-----------------------------------------------------------------------
  const [words, setWords] = useState([
    // { id: 1, ourWord: 'dd', translatedWord: 'hh' },
    // { id: 2, ourWord: 'ss', translatedWord: 'gg' },
    // { id: 3, ourWord: 'aa', translatedWord: 'ff' },
  ])

  //Sorted words in vocabulary for future search
  const sortedWords = useMemo(() => {
    if (filter.sort) {
      return [...words].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return words;
  }, [filter.sort, words]);

  //Sorted and searched words from vocabulary
  const sortedAndSearchedWords = useMemo(() => {
    return sortedWords.filter(word => word.input.toLowerCase().includes(filter.query)) //is neccecary to add search for output too
  }, [filter.query, sortedWords]);

  //Add new word to our vocabulary from API translator
  const addNewWord = () => {
    const newWord = {
      id: Date.now(),
      input,
      output
    }
    setWords([...words, newWord])
    setInput('');
    setOutput('');
  }
  //Function for removing word from our vocabulary 
  const removeWord = (word) => {
    setWords(words.filter(p => p.id !== word.id))
  }

  // function successTranslateButton() {
  //   if(document.getElementById("inputForBaseWord").value==="") { 
  //            document.getElementById('ButtonForTranslate').disabled = true; 
  //        } else { 
  //            document.getElementById('ButtonForTranslate').disabled = false;
  //        }
  //    }

  return (
    <div>
      {/* Select translator's languages FROM and TO */}
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
        {/* Input for our base word */}
        <MyInput
          id='inputForBaseWord'
          // onKeyUp = {successTranslateButton}
          placeholder='enter your word'
          value={input}
          onInput={(e) => {
            if (/[0-9]/.test(e.target.value)) {
              alert('You cannot enter numbers, space and turn on CapsLock in this field. Click OK and try again')
              setInput('');
            } else {
              setInput(e.target.value);
            }
          }
          }
        />
        {/* Input for our translated word */}
        <MyInput
          disabled
          placeholder='here is your translate'
          value={output}
        />
      </form>
      <div>
        <MyButton id='ButtonForTranslate' onClick={e => translate()}>Translate</MyButton>
        <MyButton onClick={addNewWord}>Add to vocabulary</MyButton>
      </div>
      <hr style={{ margin: '15px 0' }} />
      <h1 style={{ textAlign: 'center', color: 'teal' }}>
        Your personal vocabulary
      </h1>
      <WordFilter
        filter={filter}
        setFilter={setFilter}
      />
      <VocabularyList words={sortedAndSearchedWords} remove={removeWord} />

    </div>
  );
};

export default TranslatorItem;