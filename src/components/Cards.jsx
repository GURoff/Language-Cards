import React, { useState, useEffect } from 'react';
import '../styles/Cards.css';
import store from '../store/store';

// { frontContent, backContent }
const Cards = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [newWord, setNewWord] = useState(null);

    useEffect(() => {
        store.subscribe(() => {
            setNewWord(store.getState().newWord);
        });
    }, []);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    // onClick={handleClick}
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div>

            </div>
            <div className="back">
                <div className="textOnCard">
                    <h2>{props.savedWords.input}</h2>
                    <p>{props.savedWords.from}</p>
                </div>

            </div>

            <div className="front">
                <div className="textOnCard">
                    <h2>{props.savedWords.output}</h2>
                    <p>{props.savedWords.to}</p>
                </div>
            </div>

        </div>
    );
};

export default Cards;