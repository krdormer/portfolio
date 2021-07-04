// React and React hook imports 
import React, { useState } from 'react';
// For styles
import './about-page.styles.css';
// For animations, using Animated component 
import {Animated} from "react-animated-css";

const AboutPage = () => {
    // Sets a state hook for each <p> tag, used for timing of display on screen
    const [visible_first, setVisibilityFirst] = useState(false)
    const [visible_second, setVisibilitySecond] = useState(false);
    const [visible_third, setVisibilityThird] = useState(false);



    // Timers set to appropriate hook, displays one <p/> tag per second 

    setInterval(() => {
        setVisibilityFirst(true)
    }, 1000)

    setInterval(() => {
        setVisibilitySecond(true)
    }, 2000)

    setInterval(() => {
        setVisibilityThird(true)
    }, 3000)

    // setInterval(() => {
    //     setVisibilityFourth(true)
    // }, 9000)

    // setInterval(() => {
    //     setVisibilityFifth(true)
    // }, 12000)
    
    return (
    <div className="about-page">
        <div className="about-info">
            <Animated isVisible={true} animationIn='fadeInDown'>
                <h1>A bit about me...</h1>
            </Animated>
            <Animated animateOnMount={false} isVisible={visible_first} animationIn='fadeInDown'>
                <p>
                    I am a self-taught software developer located in Austin, TX with a background in web development 
                    and its related technologies, looking to break into a professional role in the industry. 
                </p>
            </Animated>
            <div className="about-list-container">
                <div className="experience about-content">
                    <Animated animateOnMount={false} isVisible={visible_second} animationIn='fadeInDown'>
                        <h4>My Past Work</h4>
                        <ul className='experience-list'>
                            <li>Ice Cream Scooper</li>
                            <li>Store Stocker</li>
                            <li>Emergency Medical Technician</li>
                            <li>Optician</li>
                            <li>Food Delivery Courier</li>
                            <li>Customer Support Specialist</li>
                            <li>Hobbyist Programmer</li>
                        </ul>
                    </Animated>
                </div>
                <div className="hobbies">
                    <Animated animateOnMount={false} isVisible={visible_third} animationIn='fadeInDown'>
                        <h4>My Hobbies</h4>
                        <ul className='hobbies-list about-content'>
                            <li>Camping and Hiking</li>
                            <li>Trail Bike Riding</li>
                            <li>Running</li>
                            <li>Video Games</li>
                        </ul>
                    </Animated>
                </div>
                <div className="education">
                    <Animated animateOnMount={false} isVisible={visible_third} animationIn='fadeInDown'>
                        <h4>My Education</h4>
                        <ul className='education-list about-content'>
                            <li>Texas State University</li>
                            <li>Zero To Mastery Academy</li>
                            <li>Open Source Society University</li>
                        </ul>
                    </Animated>
                </div>
            </div>
        </div>
    </div>
)};

export default AboutPage;