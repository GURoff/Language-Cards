import React, { useState } from 'react';
import VocabularyItem from './VocabularyItem';
import MySelect from './UI/Select/MySelect';

const VocabularyList = ({ words, remove, selectedSort, setSelectedSort }) => {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'teal' }}>
                Your personal vocabulary
            </h1>
            <div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                />

                <MySelect
                    defaultValue="Sort by"
                    value={selectedSort}
                    onChange={sort => setSelectedSort(sort)}
                    options={[
                        { value: 'ourWord', name: 'base language' },
                        { value: 'translatedWord', name: 'target language' },
                    ]}
                />
            </div>
            {words.map((word, index) =>
                <VocabularyItem remove={remove} number={index + 1} word={word} key={word.id} />
            )}
        </div>
    );
}

export default VocabularyList;
