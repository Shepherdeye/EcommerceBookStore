import React, { useContext } from 'react'
import './Cart.css'
import { Totalsummary } from './Totalsummary'
import { CartItem } from './CartItem'
import BookStoreContext from '../../Context/bookStorContext'

export const Cart = () => {
  const { cartInfo } = useContext(BookStoreContext);
  return (
    <div className='cart-container'>
      <div className='cart-main-title'>
        <h1>Your Shopping Cart</h1>
      </div>
      <div className="cart-wrapper">
        {
          cartInfo.map((Item, key) => {
            return <CartItem key={key} item={Item} />
          })
        }

      </div>
      <Totalsummary data={cartInfo} />
    </div>
  )
}
