import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, comment, rating, picture } = review;

    return (
        <div className='review'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Review: {comment}</p>
                <h4>Rating: {rating}</h4>
            </div>
        </div>
    );
};

export default Review;