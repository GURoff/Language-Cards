import React, { useState } from 'react';
import '../styles/Card.css';
import VocabularyList from './VocabularyList';

const Card = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="front">
                <div className="textOnCard">
                    <h2>{frontContent}</h2>
                    <p>RU</p>
                </div>
            </div>
            <div className="back">
                <div className="textOnCard">
                    <h2>{backContent}</h2>
                    <p>Eng</p>
                </div>
            </div>
        </div>
    );
};

export default Card;