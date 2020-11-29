import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector( state => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="error">{error}</MessageBox>
                ) : (
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
                )}
        </div>
    )
}