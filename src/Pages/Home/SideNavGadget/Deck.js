import React from 'react';
import TopProducts from '../../Shared/TopProducts';

const Deck = ({ decks }) => {
    return (
        <TopProducts active={decks} />
    )
};

export default Deck;