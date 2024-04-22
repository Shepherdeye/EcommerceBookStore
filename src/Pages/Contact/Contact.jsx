import React from 'react'
import './Contact.css'
export const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-icons-wrapper">

        <div className="contact-icons-item">
          <div className="contact-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p>123 Street NasrCity, Cairo, Egypt</p>
        </div>
        <div className="contact-icons-item">
          <div className="contact-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone
          </div>
          <p>010-129-399-12</p>

        </div>
        <div className="contact-icons-item">
          <div className="contact-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p>Eldeebsayed22@gmail.com</p>

        </div>


      </div>
      <form className="contact-form">
        <h2 className="contact-form-title">Contact Us</h2>
        <div className="contact-form-wrapper">
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="email" placeholder="Email *" />
          <textarea rows="4" placeholder='Message...*'></textarea>
          <button type="submit" className='submit-btn' disabled>Send</button>
          
        </div>
      </form>
    </div>
  )
}
