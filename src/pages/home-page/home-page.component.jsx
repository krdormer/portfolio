import React, { useState } from 'react';
// For styles
import './home-page.styles.css';
// For animations, using Animated component 
import {Animated} from "react-animated-css";

const HomePage = () => {
    const [visibleFirst, setVisibilityFirst] = useState(false);
    const [visibleSecond, setVisibilitySecond] = useState(false);

    setInterval(() => {
        setVisibilityFirst(true);
    }, 1000)

    setInterval(() => {
        setVisibilitySecond(true);
    }, 3000)

    return (
    <div className="homepage">
        <div className="intro-text">
            <Animated isVisible animationIn='fadeInDown' >
                <h1 className='intro-title'>Howdy, I'm Kevin!</h1>
            </Animated>
            <Animated animateOnMount={false} animationIn="fadeInUp" animationInDuration={2000} isVisible={visibleFirst} >
                <p className='intro-detail'>I am a web developer from Austin, Texas.</p>
            </Animated>
            <Animated animateOnMount={false} animationIn="fadeInUp" animationInDuration={2000} isVisible={visibleSecond}>
                <p className='intro-detail'>This is my portfolio, take a look around!</p>
            </Animated>
        </div>
    </div>
)};

export default HomePage;