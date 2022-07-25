import React from "react";
import TypeAnimation from 'react-type-animation'
import './HeroSection.css'
import HeroImg from '../../images/pexels-pixabay-373543.jpg'
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
                </h1>
                <button><a>Get one product here.</a></button>
                <div className="AnimatedText">
                    <p>
                        <TypeAnimation
                            cursor={true}
                            repeat={Infinity}
                            sequence={
                            ['React typing animation based on typical', 2000,
                                'wilwax', 2000,
                                'Hello Boy', 2000]}
                            wrapper="h2"
                            className="animated-text"
                        />
                    </p>
                </div>

            </div>
        </main>
    )
}
export default HeroSection;