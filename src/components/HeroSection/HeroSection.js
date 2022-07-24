import React from "react";
import './HeroSection.css'
import vid from '../../images/mixkit-woman-looking-at-the-horizon-from-a-building-43183-small.mp4'

function HeroSection() {
    return (
        <main>
            <video className="bgVideo" src={vid} muted={true} autoPlay={true} loop={true} playsInline></video><br />
            <div className="main-content">
                <h1 className="hero-text">
                    Providing <span>Affordable AI</span> services.
                    {/*To be the first private company to send clients*/}
                    {/*to  the space from their rooms <br/> <br/> To help*/}
                    {/*the impaired recognize objects, colors etc*/}
                    {/*through the help of AI before 2032*/}
                </h1>
            </div>
        </main>
    )
}

export default HeroSection;