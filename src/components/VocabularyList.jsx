import React from 'react';
import VocabularyItem from './VocabularyItem';

const VocabularyList = ({words, input}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'teal' }}>
                Your personal vocabulary
            </h1>
            {words.map((word, index) =>
                <VocabularyItem number = {index + 1} word={word} key={word.id} />
            )}
        </div>
    );
}

export default VocabularyList;
