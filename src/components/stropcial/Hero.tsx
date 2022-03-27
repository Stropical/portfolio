
import { useEffect } from "react";
import Project from "./Project";

function typingAnim() {
    var elements = document.getElementsByClassName("typing"); // or:
    const elemArr = [].slice.call(elements);

    elemArr.forEach(function (text) {
        const textContent = text.textContent;
        const textLength = textContent.length+1;
        let current = 0;
        let delay = 0, speedOffset = 0;

        switch (true) {
            case text.classList.contains("typing-1sd"): delay = 500; break;
            case text.classList.contains("typing-2sd"): delay = 1500; break;
            case text.classList.contains("typing-3sd"): delay = 1500; break;
            case text.classList.contains("typing-4sd"): delay = 5000; break;
        }

        switch (true) {
            case text.classList.contains("typing-fast"): speedOffset = 65; break;
            case text.classList.contains("typing-extra-fast"): speedOffset = 80; break;
        }

        text.textContent = textContent.substring(0, current);

        setTimeout(() => {
            let timer = setInterval(() => {
                text.textContent = textContent.substring(0, current);
                current++;
                if (current === textLength) {
                    clearInterval(timer);
                }
            }, 100 - speedOffset);
        }, delay);
    })
}

function fadeInAnim() {

}

export const Hero = function () {

    useEffect(() => {
        typingAnim();
    })

    return( 
        <>        
    
            <div className="hero-container">
                <div className="hero-left">
                    <h1 className="hero-title typing">ETHAN</h1>
                    <h1 className="hero-title typing typing-1sd">MARREEL</h1>
                    <h2 className="hero-subtitle typing typing-2sd typing-fast"> ROBOTICS ENGINEER  SOFTWARE DEVELOPER  WATER POLO PLAYER </h2>
                    <p className="hero-desc typing typing-4sd typing-extra-fast">I am an aspiring software engineer looking for a will to live. I am on a mission to create exoskeleton and prosthetic technology never done before.</p>
                </div>
                <div className="hero-right">
                    <div className="project-box">
                        <Project 
                            title="EVS MIDDLEWARE"
                            category="TYPESCRIPT "
                            description="This is a project description"
                            date="Mar. 1 2020"
                            link="http://marreel.com"
                            yStart="1"
                            yEnd="3"
                        />
                        <Project 
                            title="EXO OS"
                            category="EMBEDDED C++"
                            description="This is a project description"
                            date="Mar. 1 2020"
                            link="http://marreel.com"
                        />
                        <Project 
                            title="VCRYPT DEV ENV"
                            category="JAVSCRIPT"
                            description="A distributed decentralized file system. Utilizes AES-128 encryption paired with breaking files into thousands of parts for maximum security."
                            date="Mar. 1 2020"
                            link="http://marreel.com"
                        />
                        <Project 
                            title="VEX CORE DRIVETRAIN"
                            category="VEX C++"
                            description="Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards."
                            date="Mar. 1 2020"
                            link="http://marreel.com"
                        />
                        <Project 
                            title="VEX CORE DRIVETRAIN"
                            category="VEX C++"
                            description="Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards."
                            date="Mar. 1 2020"
                            link="http://marreel.com"
                            yStart="3"
                            yEnd="5"
                            xStart="2"
                            xEnd="2"
                        />
                        <Project 
                            title="VEX CORE DRIVETRAIN"
                            category="VEX C++"
                            description="Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards."
                            date="Mar. 1 2020"
                            link="http://marreel.com"
                        />
                        <div className="prj-space"></div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Hero;