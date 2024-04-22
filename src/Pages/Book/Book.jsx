import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { books } from '../../data/books';
import { Rating } from '../../Components/Book-slider/Rating';
import "./Book.css"
import BookStoreContext from '../../Context/bookStorContext';



export const Book = () => {
  const { addToCart } = useContext(BookStoreContext);
  const { id } = useParams()
  const book = books.find(b => b.id == parseInt(id));
  const [qty, setQty] = useState(1);


  return (
    <div className='container-book'>
      <div className="book-content-img">
        <img src={`/books/${book.image}`} alt={book.title} />
      </div>

      <div className='book-content'>
        <div className="book-content-details">
          <h1 className='book-content-details-title'>{book.title}</h1>
          <h3 className='book-content-details-author'> <span> By  </span>{book.author} <span> (Author)</span> </h3>
          <h3 className='book-content-details-price'>Price:  {book.price}  $</h3>
          <Rating rating={book.rating} reviews={book.reviews} />

        </div>
        <div className="book-content-cart">
          <input className="book-content-cart-input" type="number" min={1} max={100}
            value={qty}
            onChange={e => setQty(e.target.value)}
          />
          <button onClick={() => addToCart({ ...book, quantity: qty })} className='book-content-cart-btn'>
            <i class="bi bi-cart-plus"></i>
            Add to Cart

          </button>
        </div>
      </div>
      <div className="book-desc-item">
        <div className="book-dsc-item-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores tempora ad numquam,
            sit distinctio molestiae a temporibus iste at
            enim nostrum consequuntur laudantium perspiciatis
            earum libero nobis eius dolore quisquam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores tempora ad numquam,
            sit distinctio molestiae a temporibus iste at
            enim nostrum consequuntur laudantium perspiciatis
            earum libero nobis eius dolore quisquam?</p>
        </div>
        <div className="book-dsc-item-icons">
          <div className="book-dsc-item-icon">
            <h3>PublicationDate</h3>
            <i class="bi bi-calendar3"></i>
            {book.PublicationDate}
          </div>
          <div className="book-dsc-item-icon">
            <h3>PrintLength</h3>
            <i class="bi bi-file-earmark-break"></i>
            {book.printLength}
          </div>
          <div className="book-dsc-item-icon">
            <h3>Language</h3>
            <i class="bi bi-globe2"></i>
            {book.language}
          </div>




        </div>

      </div>
    </div>
  )
}
