// React and React hook imports
import React, { useState, useEffect } from 'react';
// For styles
import {
  AboutPageStyles,
  AboutPageInfoStyles,
  AboutPageListStyles,
  AboutPageUnorderedListStyles,
  AboutPageTitleTextStyles,
  AboutPageIntroTextStyles,
  AboutPageSubTitleStyles,
  AboutPageListItemStyles,
} from './about-page.styles';
// For animations, using Animated component
import { Animated } from 'react-animated-css';

const AboutPage = () => {
  // Sets a state hook for each <p> tag, used for timing of display on screen
  const [visible_first, setVisibilityFirst] = useState(false);
  const [visible_second, setVisibilitySecond] = useState(false);
  const [visible_third, setVisibilityThird] = useState(false);
  const [visible_fourth, setVisibilityFourth] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setVisibilityFirst(true);
    }, 1000);
    setInterval(() => {
      setVisibilitySecond(true);
    }, 2000);
    setInterval(() => {
      setVisibilityThird(true);
    }, 3000);
    setInterval(() => {
      setVisibilityFourth(true);
    }, 4000);
  });

  return (
    <AboutPageStyles>
      <AboutPageInfoStyles>
        <Animated isVisible={true} animationIn="fadeInDown">
          <AboutPageTitleTextStyles>A bit about me...</AboutPageTitleTextStyles>
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_first}
          animationIn="fadeInDown"
        >
          <AboutPageIntroTextStyles>
            I am a self-taught software developer located in Austin, TX with a
            background in web development and its related technologies, looking
            to break into a professional role in the industry.
          </AboutPageIntroTextStyles>
        </Animated>
        <AboutPageListStyles>
          <Animated
            animateOnMount={false}
            isVisible={visible_second}
            animationIn="fadeInDown"
          >
            <AboutPageUnorderedListStyles>
              <AboutPageSubTitleStyles>My Past Work</AboutPageSubTitleStyles>
              <AboutPageListItemStyles>
                Ice Cream Scooper
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>Store Stocker</AboutPageListItemStyles>
              <AboutPageListItemStyles>
                Emergency Medical Technician
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>Optician</AboutPageListItemStyles>
              <AboutPageListItemStyles>
                Food Delivery Courier
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>
                Customer Support Specialist
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>
                Hobbyist Programmer
              </AboutPageListItemStyles>
            </AboutPageUnorderedListStyles>
          </Animated>
          <Animated
            animateOnMount={false}
            isVisible={visible_third}
            animationIn="fadeInDown"
          >
            <AboutPageUnorderedListStyles>
              <AboutPageSubTitleStyles>My Hobbies</AboutPageSubTitleStyles>
              <AboutPageListItemStyles>
                Camping and Hiking
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>
                Trail Bike Riding
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>Running</AboutPageListItemStyles>
              <AboutPageListItemStyles>Video Games</AboutPageListItemStyles>
            </AboutPageUnorderedListStyles>
          </Animated>
          <Animated
            animateOnMount={false}
            isVisible={visible_fourth}
            animationIn="fadeInDown"
          >
            <AboutPageUnorderedListStyles>
              <AboutPageSubTitleStyles>My Education</AboutPageSubTitleStyles>
              <AboutPageListItemStyles>
                Texas State University
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>
                Zero To Mastery Academy
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>
                Open Source Society University
              </AboutPageListItemStyles>
            </AboutPageUnorderedListStyles>
          </Animated>
        </AboutPageListStyles>
      </AboutPageInfoStyles>
    </AboutPageStyles>
  );
};

export default AboutPage;
