import React from 'react';
import VocabularyItem from './VocabularyItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const VocabularyList = ({ words, remove }) => {

    if (!words.length) {
        return (
            <h1 style={{ textAlign: 'center', color: 'red' }}>
                Words not found. <p style={{ color: 'teal' }}>Add the word to your own vocabulary.</p></h1>
        )
    }

    return (
        <div>
            <TransitionGroup>
                {words.map((word, index) =>
                    <CSSTransition
                        key={word.id}
                        timeout={500}
                        classNames="word"
                    >
                        <VocabularyItem number={index + 1} word={word} remove={remove} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default VocabularyList;
