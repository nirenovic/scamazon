import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {data} = await Axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
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