import React from "react";
import img from '../../images/align-left.png';

function Header()  {
    function showNavLinks() {
        document.querySelector('.nav-links').classList.toggle('show');
        console.log('WORKING')
    }
    return (
        <header className="main-header">
            <div className="brand-logo">
                <h1>WilWa-X</h1>
            </div>

            <ul className="nav-links nav-links-1">
                <li className="nav-link"><a href="#">Home</a></li>
                <li className="nav-link"><a href="#">About Us</a></li>
                <li className="nav-link"><a href="#">Services</a></li>
                <li className="nav-link"><a href="#">Blogs</a></li>
                <li className="nav-link"><a href="#"> FAQs</a></li>
            </ul>
            <ul className="nav-links nav-links-2">
                <li className="nav-link"><a href="#">Menu</a></li>
                <li className="nav-link"><a href="#">Shops</a></li>
                <li className="nav-link account"><a href="#">Account</a></li>
            </ul>

            <div className="menu">
                <img onClick={showNavLinks} src={img} alt=""/>
            </div>
        </header>
    )
};

export default Header;