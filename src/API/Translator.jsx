import React, { useState, useEffect } from 'react';
import MyButton from '../components/UI/Buttons/MyButton';
import MyInput from '../components/UI/Input/MyInput';
import MySelect from '../components/UI/Select/MySelect';
import VocabularyList from '../components/VocabularyList';
import classes from './Translator.module.css';

const axios = require('axios').default;

const TranslatorItem = (props) => {
  /* instructions for translator from https://www.youtube.com/watch?v=0vQkTya1Qb4*/ 
  const [options, setOptions] = useState([]);
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('')

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
    { id: 1, ourWord: '', translatedWord: '' },
    { id: 2, ourWord: '', translatedWord: '' },
    { id: 3, ourWord: '', translatedWord: '' },
  ])
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
//Sorting words in the vocabulary by base language and by translated language 
  const sortVocabularyWords = (sort) => {
    setSelectedSort(sort);
    console.log(words);
    setWords([...words].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

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
          type='text'
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
{/* Input for our translated word */}
        <MyInput
          type='text'
          disabled
          placeholder='here is your translate'
          value={output}
        />
      </form>
      <div>
        <MyButton onClick={e => translate()}>Translate</MyButton>
        <MyButton onClick={addNewWord}>Add to vocabulary</MyButton>
      </div>
      <div>
        <hr style={{ margin: '15px 0' }} />
        <h1 style={{ textAlign: 'center', color: 'teal' }}>
          Your personal vocabulary
        </h1>
{/* Input for search */}
        <MyInput
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
{/* Select for sort by... */}
        <MySelect
          defaultValue="Sort by..."
          value={selectedSort}
          onChange={sortVocabularyWords}
          options={[
            { value: 'input', name: 'base language' },
            { value: 'output', name: 'target language' },
          ]}
        />
      </div>
      {words.length
        ? <VocabularyList words={words} remove={removeWord} />
        : <h1 style={{ textAlign: 'center', color: 'red' }}>
          Words not found. <p style={{ color: 'teal' }}>Add the word to your own vocabulary.</p></h1>
      }

    </div>
  );
};

export default TranslatorItem;