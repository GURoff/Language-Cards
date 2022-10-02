import React from 'react';
import VocabularyItem from './VocabularyItem';

const VocabularyList = ({ words, remove }) => {

    return (
        <div>
            {words.map((word, index) =>
                <VocabularyItem number={index + 1} word={word} key={word.id} remove={remove} />
            )}
        </div>
    );
}

export default VocabularyList;
