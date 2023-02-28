import React, { useState } from 'react';
import VocabularyItem from './VocabularyItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MyButtonHide from '../components/UI/Buttons/MyButtonHide';

const VocabularyList = ({ words, remove }) => {
    const [showSettings, setShowSettings] = useState(false);

    if (!words.length) {
        return (
            <h1 style={{ textAlign: 'center', color: 'red' }}>
                Words not found. <p style={{ color: 'teal' }}>Add the word to your own vocabulary.</p></h1>
        )
    }

    const wordsTableHeader = [
        { id: '#', name: '', value: '' }];

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
                        <VocabularyItem number={index + 1} word={word} remove={remove} showSettings={showSettings} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
}

export default VocabularyList;
