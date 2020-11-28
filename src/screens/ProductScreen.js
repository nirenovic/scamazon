import React from 'react';
import Product from '../components/product';
import data from '../data';

export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    return (
        <div className="product-wrapper content-block">
            <div className="product-main">
                <Product key={product._id} product={product}></Product>
                <p className="product-description">
                    {product.description}
                </p>
            </div>
            <div className="product-buy">
                {product.count > 0 ? (
                    <div>
                        <span className="success">{product.count} currently in stock.</span>
                        <button>Add to Cart</button>
                    </div>
                ) : (
                    <span className="error">Product currently unavailable.</span>
                )}
            </div>
        </div>
    )
}