import React, { useState } from 'react';
import VocabularyItem from '../components/VocabularyItem';
import Cards from '../components/Cards';
import DeckOfCards from '../components/DeckOfCards';

const TestPage = () => {
    const [frontContent, setFrontContent] = useState('');
    const [backContent, setBackContent] = useState('');

    return (
        <div>
            <Cards />
            {/* <Cards frontContent={frontContent}
                backContent={backContent} /> */}
            {/* <DeckOfCards /> */}
        </div>
    );
};

export default TestPage;