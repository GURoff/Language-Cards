import React, { useState, useEffect } from 'react';
import VocabularyItem from './VocabularyItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MyButtonHide from '../components/UI/Buttons/MyButtonHide';

const VocabularyList = ({ words, remove, setWords, from, to }) => {
    const [showSettings, setShowSettings] = useState(false);
    //Saving words (data) in local storage-------------------------
    useEffect(() => {
        const savedWords = JSON.parse(localStorage.getItem('saved words'));
        setWords(savedWords);
    }, []);
    //------------------

    if (!words.length) {
        return (
            <h1 style={{ textAlign: 'center', color: 'red' }}>
                Words not found. <p style={{ color: 'teal' }}>Add the word to your own vocabulary.</p></h1>
        )
    }

    return (
        <div>
            <MyButtonHide onClick={() => setShowSettings(!showSettings)}>
                {showSettings ? 'Done' : 'Edit'}
            </MyButtonHide>
            <TransitionGroup>
                {words.map((word, index) =>
                    <CSSTransition
                        key={word.id}
                        timeout={500}
                        classNames="word"
                    >
                        <VocabularyItem number={index + 1} word={word} showSettings={showSettings} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default VocabularyList;
