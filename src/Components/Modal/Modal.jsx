import React, { useContext, useState } from 'react'
import './Modal.css'
import { Rating } from '../Book-slider/Rating'
import { Link } from 'react-router-dom'
import BookStoreContext from '../../Context/bookStorContext'
export const Modal = ({ setOpenModel, bookdata }) => {

    const { addToCart } = useContext(BookStoreContext);
    const [qty, setQty] = useState(1);




    return (
        <div onClick={() => setOpenModel(false)} className='modal-container'>
            <div onClick={(e) => e.stopPropagation()} className="modal-content">
                <i onClick={() => setOpenModel(false)} className="bi bi-x-circle-fill close-icon"></i>
                <div className="modal-content-img">
                    <img src={`/books/${bookdata.image}`} alt="" />
                </div>
                <div className="model-content-info">
                    <h3>{bookdata.title}</h3>
                    <h4> Auther : {bookdata.author}</h4>
                    <h5> price : $ {bookdata.price}</h5>
                    <div className='model-content-info-rating'>
                        <Rating rating={bookdata.rating} reviews={bookdata.reviews} />
                    </div>
                    <div className='model-content-info-cart'>
                        <input className='model-content-info-input'
                            value={qty}
                            onChange={e => setQty(e.target.value)}
                            type="number" min={1} max={100} />
                        <button onClick={() => addToCart({ ...bookdata, quantity: parseInt(qty) })} className='model-content-info-btn'>
                            <i class="bi bi-cart-plus"> Add To Cart </i>
                        </button>
                    </div>
                    <Link to={`/book/${bookdata.id}`} className="model-content-info-more">
                        See more Details
                    </Link>
                </div>
                <div className="modal-info">

                </div>
            </div>

        </div>
    )
}
