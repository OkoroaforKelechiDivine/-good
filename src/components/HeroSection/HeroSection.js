import React from "react";
import vid from '../../images/mixkit-woman-looking-at-the-horizon-from-a-building-43183-small.mp4'

function HeroSection() {
    return (
        <main>
            <video className="bgVideo" src={vid} muted={true} autoPlay={true} loop={true} playsInline></video>
            <div className="main-content">
                <h1 className="hero-text">Building Innovative Ideas <br/> through the power of AI and Softwares</h1>
            </div>
        </main>
    )
}

export default HeroSection;