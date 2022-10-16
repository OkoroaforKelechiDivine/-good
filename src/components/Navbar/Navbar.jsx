import React, {useState} from "react";
import "./navbar.scss"
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";

const Navbar = () =>{
    const [active, setActive] = useState("navBar")

    const showNavbar = () => {
        setActive("navBar activeNavbar")
    }

    return(
        <header className={"header"}>
            <div className={"logoDiv"}>
                <h1 className={"logo"}>
                    <a href={"#home"}>
                        Kelechi Divine
                    </a>
                </h1>
            </div>

            <div className={active}>
                <ul className={"navLists"}>
                    <li className={"navItem"}>
                        <a href={"#about"} className={"navLink"}>
                            <span>About</span>
                        </a>
                    </li>
                    <li className={"navItem"}>
                        <a href={"#skills"} className={"navLink"}>
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

                <div className={"closeNavBar"}>
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