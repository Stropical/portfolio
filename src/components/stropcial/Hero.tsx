
import { useEffect } from "react";
import Project from "./Project";
import BigProject from "./BigProject";

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
                    <p className="hero-desc typing typing-4sd typing-extra-fast">I am an aspiring software engineer looking for a will to live. I am on a mission to create exoskeleton and prosthetic technology never done before. I&apos;ve been developing software for 11 years, 3 with NodeJS, 5 with Unity. I am the head developer of the robotics team and teach kids how to code and use modern frameworks and technology.</p>
                </div>
                <div className="hero-right">
                    <div className="project-box">
                        <BigProject 
                            title="EVS MIDDLEWARE"
                            category="JAVASCRIPT | NPM | JEST"
                            description="Express video stream (EVS) is a middleware plugin I made that allows express to stream video. Statically feeding a whole video file can wreck bandwidth, so I built this to split a video into chunks display a video chunk by chunk. It includes a config where you can define video IDs and file paths and even dynamically add more videos. Project is fully unit tested with jest and uses Travis CI for testing on every commit."
                            date="SEPT. 12 2021"
                            link="http://marreel.com"
                            imgurl="/eng1.jpg"
                            yStart="1"
                            yEnd="3"
                        />
                        <Project 
                            title="ROBOTICS (VEX)"
                            category="EMBEDDED C++ | LEADERSHIP"
                            description="Repo for this years VEX Robotics team 75491. Primarily developed by me, but in the proccess I lead a team of people to create their own. These people joined with zero expirience coding and ended developing and contributing functional code on Github."
                            date="SEPT. 2019 - CURRENT"
                            link="http://marreel.com"
                        />
                        <Project 
                            title="EXO ARM"
                            category="LINUX | C++ | FUSION"
                            description="An exoskeleton arm currently in development. Soft-body-nylon frame paired with a linear actuator for maximum comfort and mobility. Utilizes a hand built EMG circuit, and an Rasperry Pi running a C++ program to calculate output voltages."
                            date="MAR. 22 2022 - CURRENT"
                            link="http://marreel.com"
                        />
                        <Project 
                            title="ARC LANG"
                            category="TYPESCRIPT | LLVM"
                            description="A compiler aimed at working like typescript, but compiling down to LLVM IR to have bare metal speed. Very very simple programs work, but still a work in progress."
                            date="Mar. 1 2020"
                            link="http://marreel.com"
                        />
                        <Project 
                            title="VEX CORE DRIVETRAIN"
                            category="VEX C++"
                            description="Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards."
                            date="MAR. 1 2020"
                            link="http://MARreel.com"
                            yStart="3"
                            yEnd="5"
                            xStart="2"
                            xEnd="2"
                        />
                        <Project 
                            title="VEX CORE DRIVETRAIN"
                            category="VEX C++"
                            description="Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards."
                            date="MAR. 1 2020"
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