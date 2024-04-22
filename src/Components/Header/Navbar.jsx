import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// const myReff = useRef(null)


export const Navbar = ({ toggle, setToggle }) => {
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className={`navbar ${toggle ? "toggle" : "not-toggle"} `}>
            <ul className="nav-links">
                <Link to={"/home"} onClick={()=>setToggle(!toggle)} className="nav-link">Home</Link>
                <Link to={"/authors"} onClick={()=>setToggle(!toggle)} className="nav-link">Authers</Link>
                <Link to={"/about"} onClick={()=>setToggle(!toggle)} className="nav-link">About Us</Link>
                <Link to={"/contact"} onClick={()=>setToggle(!toggle)} className="nav-link">Contact Us</Link>
                <Link to={"/register"} onClick={()=>setToggle(!toggle)} className="nav-link">Register</Link>
            </ul>
        </nav>
    )
}
