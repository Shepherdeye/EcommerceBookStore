import React from 'react'
import { Link } from 'react-router-dom';

export const HeaderTop = ({ toggle, setToggle }) => {
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className="header-top">
            <div className="header-top-menu"  onClick={handleToggle}>

                {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
            </div>
            <div className="header-top-phone">
                <i className="bi bi-telephone-fill"></i>
                010-129-399-12
            </div>
            <div className="header-top-message">
                Welcome To  Our Book Store
            </div>
            <Link to={"/signin"}  className="header-top-login">
                <i className="bi bi-person-fill"></i>
                login

            </Link>
        </div>
    )
}
