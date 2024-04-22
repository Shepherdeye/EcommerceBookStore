import React, { useState } from 'react'
import './Authors.css'
import { authors } from '../../data/authors'
export const Authors = () => {
  const [search, setSearch] = useState("");

  return (
    <div className='Authors-container'>
      <div className="authors-search-area">
        <input value={search} onInput={e => setSearch(e.target.value)} type="search" placeholder='Search For Authors ....' />
      </div>
      <div className="authors-wrapper">

        {
          authors.filter(e => e.name.toLowerCase().includes(search))
                 .map((author, key) => {
                    return (
                      <div key={key} className="auther-wrapper-item">
                        <img src={author.image} alt={author.name} />
                        <br />
                        <h3>{author.name}</h3>

                      </div>
                    )
            })
        }

      </div>
    </div>
  )
}
