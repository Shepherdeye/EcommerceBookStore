import React from 'react'

export const Totalsummary = ({ data }) => {
    const totalPrice = data.reduce(((acc, cur) => acc + cur.price * cur.quantity), 0);
    return (
        <div className="cart-order-summary">
            <div className="order-summary-title">
                <h3>Order Summary</h3>
            </div>
            <div className="order-summary-item">
                <h5>Subtotal</h5>
                <h5>{(totalPrice).toFixed(2)} $</h5>
            </div>
            <div className="order-summary-item">
                <h5>Subtotal</h5>
                <h5>0$</h5>
            </div>
            <div className="order-summary-item">
                <h5>Discount</h5>
                <h5>0$</h5>
            </div>
            <div className="order-summary-item">
                <h3>Total</h3>
                <h3 className='order-summary-item-total'>{(totalPrice).toFixed(2)}$</h3>
            </div>
        </div>
    )
}
