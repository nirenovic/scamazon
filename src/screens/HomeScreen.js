import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList;
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="error">{error}</MessageBox>
                ) : (
                    <div className="product-grid content-block">
                        {
                            products.map(product => (
                                <div key={product._id} className="product">
                                    <a href={`/product/${product._id}`}>
                                        <Product key={product._id} product={product}></Product>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                )}
        </div>
    )
}