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
          <h1>A bit about me...</h1>
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_first}
          animationIn="fadeInDown"
        >
          <p>
            I am a self-taught software developer located in Austin, TX with a
            background in web development and its related technologies, looking
            to break into a professional role in the industry.
          </p>
        </Animated>
        <AboutPageListStyles>
          <div className="experience about-content">
            <Animated
              animateOnMount={false}
              isVisible={visible_second}
              animationIn="fadeInDown"
            >
              <h4>My Past Work</h4>
              <AboutPageExperienceListStyles>
                <li>Ice Cream Scooper</li>
                <li>Store Stocker</li>
                <li>Emergency Medical Technician</li>
                <li>Optician</li>
                <li>Food Delivery Courier</li>
                <li>Customer Support Specialist</li>
                <li>Hobbyist Programmer</li>
              </AboutPageExperienceListStyles>
            </Animated>
          </div>
          <AboutPageHobbyListStyles>
            <Animated
              animateOnMount={false}
              isVisible={visible_third}
              animationIn="fadeInDown"
            >
              <h4>My Hobbies</h4>
              <ul className="hobbies-list about-content">
                <li>Camping and Hiking</li>
                <li>Trail Bike Riding</li>
                <li>Running</li>
                <li>Video Games</li>
              </ul>
            </Animated>
          </AboutPageHobbyListStyles>
          <div className="education">
            <Animated
              animateOnMount={false}
              isVisible={visible_fourth}
              animationIn="fadeInDown"
            >
              <h4>My Education</h4>
              <AboutPageEducationListStyles>
                <li>Texas State University</li>
                <li>Zero To Mastery Academy</li>
                <li>Open Source Society University</li>
              </AboutPageEducationListStyles>
            </Animated>
          </div>
        </AboutPageListStyles>
      </AboutPageInfoStyles>
    </AboutPageStyles>
  );
};

export default AboutPage;
