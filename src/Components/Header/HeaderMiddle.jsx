import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import BookStoreContext from '../../Context/bookStorContext'

export const HeaderMiddle = () => {
    const {cartInfolenght}=useContext(BookStoreContext)
    return (
        <div className="header-middle">
            <Link to={"/"} className="header-middle-logo">
                Book
                <i className="bi bi-book"></i>
                Store
            </Link>
            <div className="header-middle-search-box">
                <input type="text" className='header-middle-search-box-input' placeholder='Search For Book ....' />
                <i className="bi bi-search"></i>
            </div>
            <Link to={"/cart"} className="header-middle-cart-wrapper">
                {
                cartInfolenght>0 && <span className='cart-notification'>{cartInfolenght}</span>
                }
                <i className='bi bi-cart'></i>
            </Link >
        </div>
    )
}
