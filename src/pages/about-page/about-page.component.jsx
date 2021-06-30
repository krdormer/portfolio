import React, { useState } from 'react';
import './about-page.styles.css';
import {Animated} from "react-animated-css";

const AboutPage = () => {
    const [visible_first, setVisibilityFirst] = useState(false);
    const [visible_second, setVisibilitySecond] = useState(false);
    const [visible_third, setVisibilityThird] = useState(false);
    const [visible_fourth, setVisibilityFourth] = useState(false);
    const [visible_fifth, setVisibilityFifth] = useState(false);



    setInterval(() => {
        setVisibilityFirst(true)
    }, 1000)

    setInterval(() => {
        setVisibilitySecond(true)
    }, 2000)

    setInterval(() => {
        setVisibilityThird(true)
    }, 3000)

    setInterval(() => {
        setVisibilityFourth(true)
    }, 4000)

    setInterval(() => {
        setVisibilityFifth(true)
    }, 5000)
    
    return (
    <div className="about-page">
        <div className="about-info">
            <Animated isVisible={true} animationIn='fadeInDown'>
                <h1>A bit about me...</h1>
            </Animated>
            <Animated animateOnMount={false} isVisible={visible_first} animationIn='fadeInDown' >
                <p>
                    I am a software developer focused mainly on web technologies. I currently reside in the
                    Austin, Texas area and could not love it more! 
                </p>
            </Animated>
            <Animated animateOnMount={false} isVisible={visible_second} animationIn='fadeInDown' >
                <p>
                    I have a highly diverse career background - driven mainly by my desire to learn new things,
                    and apply them to the world around me. I graduated high school with an Emergency Medical Technician
                    (EMT) license and worked on an ambulance and in a local ER while I attended Texas State University in
                    San Marcos. There my studies were focused primarily around human health in various forms, with a major
                    in psychology and dual minors in biology and biochemistry. 
                </p>
            </Animated>
            <Animated animateOnMount={false} isVisible={visible_third} animationIn='fadeInDown' >
                <p>
                    It was these studies that I have to thank for my current passion; in school I learned that the body
                    functions like one giant machine, supplemented with billions of smaller machines. After school out of curiosity or fate
                    I discovered programming, and the concept of abstraction and everything clicked! I was able to build beautiful, interesting,
                    and useful things based on the genius of my CS predecessors and I have not stopped yet! 
                </p>
            </Animated>
            <Animated animateOnMount={false} isVisible={visible_fourth} animationIn='fadeInDown' >
            <p>
                When I am in need of a 'tech detox' I absolutely love to go camping. I will venture out alone at times, but of course 
                the best times are had with my wife and our two dogs. I am also a budding runner / biker and have some aspirations to complete 
                a triathlon someday. I also love going out and exploring my city, and juist finding interesting things to do. 
            </p>
            </Animated>
            <Animated animateOnMount={false} isVisible={visible_fifth} animationIn='fadeInDown' >
            <p>
                If you happen to live in the Austin area and know of cool stuff to do, or if you're not but would just like to chat there are links to
                my various contact methods in the 'Contact' section in the navigation bar above. 
            </p>
            </Animated>
        </div>
    </div>
)};

export default AboutPage;