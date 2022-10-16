import React from "react";
import "./about.scss"
import {TbCloudDownload} from "react-icons/tb";
import cv from "../cv/Okoroafor, Kelechi Divine.pdf"
import profile from "../img/Okoroafor Kelechi Divine.JPG"

const About = () =>{
    return(
        <section id={"about"} className={"about section container"}>
            <div className={"sectionTitle"}>
                {/*<span className={"titleNumber"}></span>*/}
                <h5 className={"titleText"}>About Me
                    <div className={"underline"}><span></span></div>
                </h5>
            </div>

            <div className={"sectionContent grid"}>
                <div className={"textSection"}>
                    <h4>
                        I am a determined Web developer. I have experience using
                        HTML, Sass, Javascript, Java and Springboot to build
                        accessible component-based web pages and systems. <br/>
                        Ability to deliver quality results while collaborating in
                        rapidly changing work environments and team compositions.
                        <br/>
                        I am a passionate person eager to learn more technologies to become
                        a sweet and better software engineer than I was yesterday.
                    </h4>

                    <div className={"aboutBtn"}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href={cv} target={"_blank"} className={"flex"}>
                            Check out my CV here <TbCloudDownload className={"icon"}/>
                        </a>
                    </div>
                </div>

                <div className={"aboutImgDiv"}>
                    <img src={profile} alt={"Okoroafor Kelechi Divine"}
                    className={"aboutImg"}
                    />
                </div>
            </div>
        </section>
    )
}
export default About;