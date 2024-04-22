import React, { useState } from 'react'
import './Header.css'
import { HeaderTop } from './HeaderTop'
import { HeaderMiddle } from './HeaderMiddle'
import { Navbar } from './Navbar'
export const Header = () => {
 const [toggle,setToggle]=useState(false);
    return (
        <div className='header'>
            <HeaderTop toggle={toggle} setToggle={setToggle}/>
            <HeaderMiddle />
            <Navbar toggle={toggle}  setToggle={setToggle} />

        </div>
    )
}
