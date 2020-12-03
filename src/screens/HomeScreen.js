import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
                                    <Link to={`/product/${product._id}`}>
                                        <Product key={product._id} product={product}></Product>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                )}
        </div>
    )
}