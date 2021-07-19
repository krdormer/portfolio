// React and React hook imports
import React, { useState, useEffect } from 'react';
// For styles
import {
  AboutPageStyles,
  AboutPageInfoStyles,
  AboutPageListStyles,
  AboutPageEducationListStyles,
  AboutPageExperienceListStyles,
  AboutPageHobbyListStyles,
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

  useEffect(() => {
    setInterval(() => {
      setVisibilityFirst(true);
    }, 1000);

    setInterval(() => {
      setVisibilitySecond(true);
    }, 2000);
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
        <Animated
          animateOnMount={false}
          isVisible={visible_second}
          animationIn="fadeInLeft"
        >
          <AboutPageListStyles>
            <AboutPageExperienceListStyles>
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
            </AboutPageExperienceListStyles>
            <AboutPageHobbyListStyles>
              <AboutPageSubTitleStyles>My Hobbies</AboutPageSubTitleStyles>
              <AboutPageListItemStyles>
                Camping and Hiking
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>
                Trail Bike Riding
              </AboutPageListItemStyles>
              <AboutPageListItemStyles>Running</AboutPageListItemStyles>
              <AboutPageListItemStyles>Video Games</AboutPageListItemStyles>
            </AboutPageHobbyListStyles>
            <AboutPageEducationListStyles>
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
            </AboutPageEducationListStyles>
          </AboutPageListStyles>
        </Animated>
      </AboutPageInfoStyles>
    </AboutPageStyles>
  );
};

export default AboutPage;
