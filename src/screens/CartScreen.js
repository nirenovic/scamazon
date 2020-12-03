import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search 
        ? Number(props.location.search.split('=')[1]) 
        : 1;
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    const removeFromCartHandler = (id) => {
        // delete action 
    }
    return (
        <div>
            <div className="content-block">
                <h1>Your Cart:</h1>
                {cartItems.length === 0 ? 
                    <MessageBox>
                        Cart is empty. <Link to="/">Start shopping</Link>
                    </MessageBox>
                    : (
                        <ul id="cart-items">
                            {cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="cart-item">
                                        <div className="cart-item-image" style={{backgroundImage: "url(" + item.image + ")"}}></div>
                                        <div className="cart-item-text">
                                            <div className="cart-item-text-name">
                                                <Link to={`/product/${item.product}`}>
                                                    <span>{item.name}</span>
                                                </Link>
                                            </div>
                                            <div className="cart-item-text-qty">
                                                <label htmlFor="cart-item-qty">Qty: </label>
                                                <input type="number" id="cart-item-qty" defaultValue={item.qty}/>
                                            </div>
                                            <div className="cart-item-text-price">${item.price * item.qty}</div>
                                            <button className="remove" onClick={() => removeFromCartHandler(item.product)}>
                                                <span className="lines"></span>
                                            </button>    
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    );
}