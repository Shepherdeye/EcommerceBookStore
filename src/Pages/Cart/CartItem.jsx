import React, { useContext, useState } from 'react'
import BookStoreContext from '../../Context/bookStorContext';

export const CartItem = ({ item }) => {
    const { image, title, author, quantity, price, id } = item;
    const { removeFromCart, addToCart } = useContext(BookStoreContext);
    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={`/books/${image}`} alt={title} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-info-title">
                    <h4> Title : <span>{title}</span></h4>
                </div>
                <div className="cart-item-info-author">
                    <h4>Authors :  <span>{author}</span></h4>
                </div>
            </div>
            <div className="cart-item-control">
                <div className="cart-item-quantity">
                    <button><i onClick={() => addToCart({ ...item, quantity: quantity + 1 })} class="bi bi-plus-lg"></i></button>
                    {quantity}
                    <button> <i onClick={() => addToCart({ ...item, quantity: quantity - 1 })} class="bi bi-dash-lg"></i></button>
                </div>
                <div className="cart-item-price">
                    <h5>{Math.floor(price * quantity)}$</h5>
                </div>
                <div className="cart-item-delete-icon">
                    <i onClick={() => removeFromCart(id)} class="bi bi-trash-fill"></i>
                </div>
            </div>
        </div >
    )
}
