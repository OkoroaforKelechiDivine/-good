import React from "react";
import './HeroSection.css'
import vid from '../../images/mixkit-woman-looking-at-the-horizon-from-a-building-43183-small.mp4'

function HeroSection() {
    return (
        <main>
            <video
                className={"bgVideo"}
                src={vid}
                muted={true}
                autoPlay={true}
                loop={true}
                playsInline
            >
            </video>
            <br />
            <div className={"main-content"}>
                <h1 className={"hero-text"}>
                    Providing <span>Affordable AI</span> services.<br></br>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}><button>Get one product here.</button></a>
                </h1>
            </div>
        </main>
    )
}
export default HeroSection;