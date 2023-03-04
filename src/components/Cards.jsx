import React, { useState } from 'react';
import '../styles/Cards.css';
import VocabularyItem from './VocabularyItem';
// { frontContent, backContent }
const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    // onClick={handleClick}
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="front">
                <div className="textOnCard">
                    <h2>{props.word.input}</h2>
                    <p>RU</p>
                </div>
            </div>
            <div className="back">
                <div className="textOnCard">
                    <h2>{props.word.output}</h2>
                    <p>Eng</p>
                </div>
            </div>
        </div>
    );
};

export default Card;