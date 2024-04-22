import React from 'react'
import { Slider } from "../../Components/Slider/Slider.jsx"
import { Services } from "../../Components/Services/Services.jsx"
import { HeadingTitle } from '../../Components/HeadingTitle/HeadingTitle.jsx'
import { Book_slider } from "../../Components/Book-slider/Book-slider.jsx"
import { books } from "../../data/books.js";

export const HomePage = () => {
  
  return (
    <div>
      <Slider />
      <HeadingTitle title=" Most Gifted" />
      <Book_slider time={5000} data={books} />
      <HeadingTitle title="Best Seller" />
      <Book_slider time={7000} data={books} />
      <HeadingTitle title="Most wished For" />
      <Book_slider time={9000} data={books} />
      {/* <Services /> */}

    </div>
  )
}
