import React, {useState} from "react";
import "./navbar.scss"
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";

const Navbar = () =>{
    const [active, setActive] = useState("navBar")

    const showNavbar = () => {
        setActive("navBar activeNavbar")
    }

    const removeNavBar = () =>{
        setActive("navBar")
    }

    const [activeHeader, setActiveHeader] = useState("header")
    const addBg = () =>{
        if (window.scrollY >= 10){
            setActiveHeader("header activeHeader")
        }
        else {
            setActiveHeader("header")
        }
    }

    window.addEventListener("scroll", addBg)

    return(
        <header className={activeHeader}>
            <div className={"logoDiv"}>
                <h1 className={"logo"}>
                    <a href={"#home"}>
                        zipDemon
                    </a>
                </h1>
            </div>

            <div className={active}>
                <ul onClick={removeNavBar} className={"navLists"}>
                    <li className={"navItem"}>
                        <a href={"#about"} className={"navLink"}>
                            <span>About</span>
                        </a>
                    </li>
                    <li className={"navItem"}>
                        <a href={"#skill"} className={"navLink"}>
                            <span>Skills</span>
                        </a>
                    </li>
                    <li className={"navItem"}>
                        <a href={"#projects"} className={"navLink"}>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li className={"navItem"}>
                        <a href={"#contact"} className={"navLink"}>
                            <span>Contact</span>
                        </a>
                    </li>
                    <button className={"btn"}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href={""}>Resume</a>
                    </button>
                </ul>

                <div onClick={removeNavBar} className={"closeNavBar"}>
                    <AiFillCloseCircle className={"icon"}/>
                </div>
            </div>

            <div onClick={showNavbar} className={"toggleNavBar"}>
                <TbGridDots className={"icon"}/>
            </div>
        </header>
    )
}
export default Navbar;