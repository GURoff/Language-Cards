import React, { useState, useEffect } from 'react';
import '../styles/DeckOfCards.css';
import { backSide, frontSide } from './VocabularyItem';

const Deck = ({ cards }) => {
    const [deck, setDeck] = useState(cards);

    useEffect(() => {
        setDeck(cards);
    }, [cards]);

    const flipTopCard = () => {
        setDeck(prevDeck => {
            const newDeck = prevDeck.slice();
            newDeck.reverse();
            newDeck[0].isFlipped = !newDeck[0].isFlipped;
            return newDeck.reverse();
        });
    };

    const addCard = card => {
        setDeck(prevDeck => prevDeck.concat(card));
    };

    return (
        <div className="deck-container">
            {deck.map((card, index) => (
                <div
                    className={`card-container ${card.isFlipped ? 'is-flipped' : ''}`}
                    key={index}
                    style={{ zIndex: deck.length - index }}
                >
                    <div className="card-face card-front">
                        {card.frontSide}
                    </div>
                    <div className="card-face card-back">
                        {card.backSide}
                    </div>
                </div>
            ))}
            <button onClick={flipTopCard}>Flip Top Card</button>
            <button onClick={() => addCard({ frontContent: 'New Card', backContent: 'New Card' })}>Add Card</button>
        </div>
    );
};

export default Deck;
