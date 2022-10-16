import React from "react";
import "./home.scss"
// import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
// import {FaFacebook, FaMedium} from "react-icons/fa";
// import { FiTwitter} from "react-icons/fi";
// import {CiYoutube} from "react-icons/ci";
import {TbArrowBigRightLines, TbChevronsDown} from "react-icons/tb";

const Home = () =>{
    return(
        <section id={"home"} className={"home section"}>
            {/*<div className={"leftIcons"}>*/}
            {/*    <div className={"socials grid"}>*/}
            {/*        /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
            {/*        <a href={""} target={"_blank"} rel="noreferrer">*/}
            {/*            <AiFillGithub className={"icon"}/>*/}
            {/*        </a>*/}
            {/*        /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
            {/*        <a href={""} target={"_blank"} rel="noreferrer">*/}
            {/*            <FiTwitter className={"icon"}/>*/}
            {/*        </a>*/}
            {/*        /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
            {/*        <a href={""} target={"_blank"} rel="noreferrer">*/}
            {/*            <AiFillLinkedin className={"icon"}/>*/}
            {/*        </a>*/}
            {/*        /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
            {/*        <a href={""} target={"_blank"} rel="noreferrer">*/}
            {/*            <FaMedium className={"icon"}/>*/}
            {/*        </a>*/}
            {/*        /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
            {/*        <a href={""} target={"_blank"} rel="noreferrer">*/}
            {/*            <FaFacebook className={"icon"}/>*/}
            {/*        </a>*/}
            {/*        /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
            {/*        <a href={""} target={"_blank"} rel="noreferrer">*/}
            {/*            <CiYoutube className={"icon"}/>*/}
            {/*        </a>*/}
            {/*        */}
            {/*        <div className={"line"}>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={"container homeContainer"}>
                <span className={"introText"}>
                    Hello, I am
                </span>
                <h1 className={"title"}>
                    Okoroafor Kelechi Divine
                </h1>
                <span className={"subTitle"}>
                    I am a multi-tasking software engineer from Lagos Nigeria
                </span>

                <p className={"homeParagraph"}>
                    I bring imaginations to life with the help of software
                </p>

                <div className={"lowerHomeSection"}>
                    <button className={"contactBtn"}>
                        <a href={"#contact"} className={"flex"}>
                            Get In touch me <TbArrowBigRightLines className={"icon"}/>
                        </a>
                    </button>

                    <div className={"scrollDiv"}>
                        <a href={"#about"} className={"flex"}>
                            <h6 className={"scroll"}>
                                Scroll Down<TbChevronsDown className={"icon"}/>
                            </h6>
                        </a>
                    </div>
                </div>
            </div>
            {/*<div className={"rightEmail"}>*/}
            {/*    <div>*/}
            {/*        <div className={"emailAddress"}>*/}
            {/*            <a href={"https://mailto:okoroaforkelechi123@gmail.com"} target={"_blank"} rel="noreferrer">*/}
            {/*                okoroafokelechi123@gmail.com*/}
            {/*            </a>*/}
            {/*        </div>*/}

            {/*        <div className={"line"}></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    )
}

export default Home;