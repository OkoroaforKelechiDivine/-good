import React from "react";
import './Header.css'

function Header(){

    function showNavLinks() {
        document.querySelector('.menu-nav-links').classList.toggle('show');
    }

    return (
        <header className="main-header">
            <div className="brand-logo">
                <h2>WilWa-X</h2>
            </div>
                <ul className="nav-links">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#">Blogs</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link"><a href="#">Shops</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li className="nav-link account"><a href="#">Account</a></li>
                <li className="nav-link menu"><a href="#">Menu</a></li>
            </ul>
            <ul className="menu-nav-links">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div className="closeButton">
                    <span>&times;</span>
                </div>
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
        </header>
    )
}
export default Header;