import React, { useContext, useEffect, useRef, useState } from 'react'
import './Book-slider.css'
import { Rating } from './Rating';
import { Modal } from '../Modal/Modal';
import BookStoreContext from '../../Context/bookStorContext';

export const Book_slider = ({ data, time }) => {
    const { addToCart } = useContext(BookStoreContext);

    const [bookslide, setBookslide] = useState(0);
    const [openmodel, setOpenModel] = useState(false);
    const [bookdata, setBookData] = useState(null);


    // handle Modal
    const handleModel = (book) => {
        setOpenModel(true);
        setBookData(book);

    }


    const handleBookSlide = (direction) => {
        if (direction === 'right') {
            setBookslide(bookslide + 1);

        } else {
            setBookslide(bookslide - 1)
        }
    
    };

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (bookslide === 0) {
                setBookslide(bookslide + 1);
            } else if (bookslide === data.length - 5) {
                setBookslide(bookslide - 1);
            } else {
                clearInterval(myInterval);
            }
        }, time);

        return () => clearInterval(myInterval); // Cleanup function to clear interval on unmount
    }, [bookslide]);

    return (
        <div className='book-slider-container'>
            {
                bookslide != 0 && <i onClick={() => handleBookSlide("left")} className="bi bi-chevron-left  book-slider-arrow-left"></i>
            }
            <div style={{ transform: `translatex(${bookslide * -220}px)` }} className="book-slider-wrapper">
                {
                    data.map((book, k) => {
                        return <div key={k} className="book-slider-item">
                            <img src={`/books/${book.image}`} className='book-slider-item-img' />
                            <h5 className='book-slider-item-title'> {book.title}</h5>
                            <Rating rating={book.rating} reviews={book.reviews} />
                            <div className="book-slider-item-price">{book.price}$</div>
                            <div className="book-slider-item-icon-wrapper">
                                <i onClick={() => handleModel(book)} className="bi bi-eye-fill"></i>
                                <i onClick={() => addToCart({ ...book, quantity: 1 })} className="bi bi-cart-plus"></i>
                            </div>
                        </div>
                    })
                }
            </div>
            {

                bookslide != data.length - 5 && <i onClick={() => handleBookSlide("right")} className="bi bi-chevron-right book-slider-arrow-right"></i>
            }

            {
                openmodel && <Modal setOpenModel={setOpenModel} bookdata={bookdata} />
            }
        </div>
    )
}
