import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="front">
                <div className="textOnCard">
                    <h2>Front</h2>
                    <p>RU</p>
                </div>
            </div>
            <div className="back">
                <div className="textOnCard">
                    <h2>Back</h2>
                    <p>Eng</p>
                </div>
            </div>
        </div>
    );
};

export default Card;