import React from "react";
import img from '../../images/align-left.png';

function Header(){

    function showNavLinks() {
        document.querySelector('.nav-links').classList.toggle('show');
    }

    return (
        <header className="main-header">
            <div className="brand-logo">
                <h1>WilWa-X</h1>
            </div>

            <ul className="nav-links nav-links-1">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#">Home</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#">About Us</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#">Services</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#">Blogs</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#"> FAQs</a></li>
            </ul>
            <ul className="nav-links nav-links-2">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#">Menu</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#">Shops</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link account"><a href="#">Account</a></li>
            </ul>

            <div className="menu">
                <img onClick={ showNavLinks } src={ img } alt=""/>
            </div>
        </header>
    )
}
export default Header;