import React from 'react';
import VocabularyItem from './VocabularyItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classes from '../styles/VocabularyList.module.css';

const VocabularyList = ({ words, remove }) => {

    if (!words.length) {
        return (
            <h1 style={{ textAlign: 'center', color: 'red' }}>
                Words not found. <p style={{ color: 'teal' }}>Add the word to your own vocabulary.</p></h1>
        )
    }
    return (
        <div>
            {/* <table className={classes.tableHead}>
                <thead>
                    <tr className={classes.trHead}>
                        <th>ID</th>
                        <th>FROM</th>
                        <th>TO</th>
                        <th>1</th>
                    </tr>
                </thead>
            </table> */}
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
