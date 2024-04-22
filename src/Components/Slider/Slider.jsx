import React, { useEffect, useState } from 'react'
import './Slider.css'
import firstBook from "../../images/book1.png"
import secondBook from "../../images/book2.png"
import thirdBook from "../../images/book3.png"
export const Slider = () => {
    const [slideindex, setSlideindex] = useState(0);
    const handleSlide = (direction) => {
        if (direction === "left") {
            setSlideindex(slideindex - 1);
        } else {
            setSlideindex(slideindex + 1);
        }
    }
    window.onmousemove = () => {
        const myInterval2 = setInterval(() => {
            if (slideindex === 2) {
                setSlideindex(0)
                clearInterval(myInterval2)
            } else {
                setSlideindex(slideindex + 1)
                clearInterval(myInterval2)

            }
        }, 3000);

    }
    return (
        <div className='slider-container'>
            {slideindex !== 0 && <i i onClick={() => handleSlide("left")} className="bi bi-chevron-double-left  arrow-left"></i>}
            <div style={{ transform: `translatex(${slideindex * -100}vw)` }} className="slider-wrapper">

                <div className="slide first-slide">
                    <div className="slide-img-wrapper">
                        <img src={firstBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">
                            Book Store
                        </h1>
                        <p className="slide-info-desc">
                            its not  just a book, it’s an adventure
                        </p>
                    </div>
                </div>
                <div className="slide second-slide">
                    <div className="slide-img-wrapper">
                        <img src={secondBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">
                            The Book For Every one
                        </h1>
                        <p className="slide-info-desc">
                            You can  read in  the  Home  or  in  the BookStore
                        </p>
                    </div>
                </div>
                <div className="slide third-slide">
                    <div className="slide-img-wrapper">
                        <img src={thirdBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">
                            Check out  the new  title .
                        </h1>
                        <p className="slide-info-desc">
                            We send you the book you want at home
                        </p>
                    </div>
                </div>


            </div>
            {/* right icon */}
            {slideindex !== 2 && <i i onClick={() => handleSlide("right")} className="bi bi-chevron-double-right  arrow-right"></i>}
        </div >
    )
}

