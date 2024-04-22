import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-socialmedia">
                <h5 className="footer-socialmedia-title">
                    Follow Us On Social Media
                </h5>
                <div className="footer-socialmedia-icons">
                    <i style={{ color: "blue" }} className="bi bi-facebook"></i>
                    <i style={{ color: "red" }} className="bi bi-instagram"></i>
                    <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
                    <i style={{ color: "gray" }} className="bi bi-telegram"></i>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-wrapper-item">
                    <div className="footer-item-title">
                        <h5>navigation</h5>
                    </div>
                    <ul className="footer-wrapper-links">
                       <Link to={"/home"} className="footer-wrapper-lin">Home</Link>
                       <Link to={"/Authors"} className="footer-wrapper-lin">Authers</Link>
                       <Link to={"/About"} className="footer-wrapper-lin">About Us</Link>
                       <Link to={"/Contact"} className="footer-wrapper-lin">Contact Us</Link>
                       <Link to={"/register"} className="footer-wrapper-lin"> Register</Link>

                    </ul>

                </div>
                <div className="footer-wrapper-item">
                    <div className="footer-item-title">
                        <h5>General Info</h5>
                    </div>
                    <div>
                        <div>
                            <ul className="footer-wrapper-links">

                                <div className='footer-wrapper-links-icon'>
                                    <i style={{ marginRight: "10px" }} className="bi bi-telephone-fill"></i>
                                    0123 456 789
                                </div>
                                <div className='footer-wrapper-links-icon'>
                                    <i style={{ marginRight: "10px" }} className="bi bi-envelope-fill"></i>
                                    sayed@12345
                                </div>
                                <div className='footer-wrapper-links-icon'>
                                    <i style={{ marginRight: "10px" }} className="bi bi-geo-alt-fill"></i>
                                    cairo-nasrcity-egypt
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer-wrapper-item">
                    <div className="footer-item-title">
                        <h5>About Us</h5>
                    </div>
                    <div>
                        <p className="footer-wrapper-links">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Expedita, ullam? Cupiditate,
                            harum delectus esse error debitis odio molestias vitae tempora
                            totam quo nisi hic sint eos molestiae libero earum quam.

                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer