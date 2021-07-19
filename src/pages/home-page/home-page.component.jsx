import React, { useState } from 'react';
// For styles
import {
  HomePageDetailTextStyles,
  HomePageIntroTextStyles,
  HomePageStyles,
  HomePageTitleTextStyles,
} from './home-page.styles';
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
          <HomePageTitleTextStyles>Howdy, I'm Kevin!</HomePageTitleTextStyles>
        </Animated>
        <Animated
          animateOnMount={false}
          animationIn="fadeInUp"
          animationInDuration={2000}
          isVisible={visibleFirst}
        >
          <HomePageDetailTextStyles>
            I am a web developer from Austin, Texas.
          </HomePageDetailTextStyles>
        </Animated>
        <Animated
          animateOnMount={false}
          animationIn="fadeInUp"
          animationInDuration={2000}
          isVisible={visibleSecond}
        >
          <HomePageDetailTextStyles>
            Glad you're here. Please take a look around!
          </HomePageDetailTextStyles>
        </Animated>
      </HomePageIntroTextStyles>
    </HomePageStyles>
  );
};

export default HomePage;
