import React from 'react'

export default function Rating(props) {
    const {rating, numReviews} = props;
    var remainder = rating % 1;
    var wholeStars = rating - remainder;
    var stars = [];
    for (var i = 0; i < wholeStars; i++) {
        stars.push(<span><i className="fas fa-star"></i></span>);
    }
    remainder > 0 
        ? stars.push(<span><i className="fas fa-star-half-alt"></i></span>)
        : stars.push(<span><i className="far fa-star"></i></span>);
    return (
        <div className="rating">
            {stars} 
            <span>&nbsp;{numReviews + ' reviews'}</span>
        </div>
    )
}