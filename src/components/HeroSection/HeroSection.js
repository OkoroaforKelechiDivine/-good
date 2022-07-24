import React from "react";
import vid from '../../images/mixkit-woman-looking-at-the-horizon-from-a-building-43183-small.mp4'

function HeroSection() {
    return (
        <main>
            <video className="bgVideo" src={vid} muted={true} autoPlay={true} loop={true} playsInline></video><br />
            <div className="main-content">
                {/*<h1 className="hero-text">Building Innovative Ideas <br/> through the power of AI and Software's</h1>*/}
                {/*<h1>At WilWa-X we are hel[pin </h1>*/}
            </div>
        </main>
    )
}

export default HeroSection;