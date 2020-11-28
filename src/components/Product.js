import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        <div>
            <div className="product-image-wrapper">
                <div className="product-image" style={{backgroundImage: "url(" + product.image + ")"}}></div>
            </div>
            <div className="product-text-wrapper">
                <div className="product-text">
                    <span className="product-title">{product.name}</span>
                    <span className="product-price">${product.price}</span>
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                </div>
            </div>
        </div>
    )
}