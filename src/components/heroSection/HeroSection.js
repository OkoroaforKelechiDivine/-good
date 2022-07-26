import React from "react";
import TypeAnimation from 'react-type-animation'
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
                    Providing <span>Affordable AI</span> services.<br/>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                </h1>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <button><a>Get one product here.</a></button>
                <div className={"AnimatedText"}>
                    <p>
                        <TypeAnimation
                            cursor={true}
                            repeat={Infinity}
                            sequence={[
                                'WilWa-X is a tech-physics private project that will specialize in sending clients on a tour to the space from their favourite locations,', 4000,
                                'It will also be responsible for helping the impaired recognize objects, colours, and their environments', 4000,
                                'through the help of AI before 2052.', 4000,
                                ]}
                            wrapper={"h1"}
                            className={"animated-text"}
                        />
                    </p>
                </div>
            </div>
        </main>
)
}
export default HeroSection;