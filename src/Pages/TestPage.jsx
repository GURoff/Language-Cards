import React, { useState, useEffect } from 'react';
import VocabularyItem from '../components/VocabularyItem';
import Cards from '../components/Cards';
import DeckOfCards from '../components/DeckOfCards';

const TestPage = () => {
    const [frontContent, setFrontContent] = useState('');
    const [backContent, setBackContent] = useState('');

    const [savedWords, setSavedWords] = useState([]);

    useEffect(() => {
        const savedWords = JSON.parse(localStorage.getItem('saved words'));
        setSavedWords(savedWords);
        console.log(savedWords);
    }, []);

    return (
        <div>
            {savedWords.map((word) =>
                <Cards key={word.id} savedWords={word} />
            )}
            {/* <DeckOfCards /> */}
        </div>
    );
};

export default TestPage;