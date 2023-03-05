import React, { useState } from 'react';
import '../styles/Cards.css';

// { frontContent, backContent }
const Cards = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    // onClick={handleClick}
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div>

            </div>
            <div className="front">
                <div className="textOnCard">
                    <h2>front</h2>
                    <p>RU</p>
                </div>
            </div>
            <div className="back">
                <div className="textOnCard">
                    <h2>back</h2>
                    <p>Eng</p>
                </div>
            </div>

        </div>
    );
};

export default Cards;