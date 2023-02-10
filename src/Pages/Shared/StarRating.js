import React from 'react';
import { AiFillStar } from "react-icons/ai"

const StarRating = ({ rating }) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<AiFillStar key={i} />);
        }
    }
    return <div className='text-2xl text-yellow-400 flex'>{stars}</div>;
}

export default StarRating;
