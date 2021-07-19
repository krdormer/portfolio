import React, { useState } from 'react';
// For styles
import { HomePageIntroTextStyles, HomePageStyles } from './home-page.styles';
// For animations, using Animated component
import { Animated } from 'react-animated-css';
import { useEffect } from 'react';

const HomePage = () => {
  const [visibleFirst, setVisibilityFirst] = useState(false);
  const [visibleSecond, setVisibilitySecond] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setVisibilityFirst(true);
    }, 1000);

    setInterval(() => {
      setVisibilitySecond(true);
    }, 2500);
  }, []);

  return (
    <HomePageStyles>
      <HomePageIntroTextStyles>
        <Animated isVisible animationIn="fadeInDown">
          <h1 className="intro-title">Howdy, I'm Kevin!</h1>
        </Animated>
        <Animated
          animateOnMount={false}
          animationIn="fadeInUp"
          animationInDuration={2000}
          isVisible={visibleFirst}
        >
          <p className="intro-detail">
            I am a web developer from Austin, Texas.
          </p>
        </Animated>
        <Animated
          animateOnMount={false}
          animationIn="fadeInUp"
          animationInDuration={2000}
          isVisible={visibleSecond}
        >
          <p className="intro-detail">
            Glad you're here. Please take a look around!
          </p>
        </Animated>
      </HomePageIntroTextStyles>
    </HomePageStyles>
  );
};

export default HomePage;
