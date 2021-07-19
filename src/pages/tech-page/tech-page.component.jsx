// React and React hook imports
import React, { useState, useEffect } from 'react';
// For styling
import { TechPageStyles, TechPageTechContainer } from './tech-page.styles';
import { Animated } from 'react-animated-css';

const TechPage = () => {
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
  }, []);

  return (
    <TechPageStyles>
      <Animated isVisible={true} animationIn="fadeInDown">
        <h1 style={{ fontSize: '2.5rem' }}>My Technologies</h1>
      </Animated>
      <TechPageTechContainer>
        <Animated
          animateOnMount={false}
          isVisible={visible_first}
          animationIn="slideInLeft"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-html5-plain-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_first}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-css3-plain-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_first}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-javascript-plain" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_second}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-react-original-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_second}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-sass-original" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_second}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-express-original-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_third}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-mongodb-plain-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_third}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-postgresql-plain-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_third}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-git-plain-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_fourth}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-github-original-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_fourth}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-python-plain-wordmark" />
        </Animated>
        <Animated
          animateOnMount={false}
          isVisible={visible_fourth}
          animationIn="slideInLeft"
          className="tech-image"
          style={{ margin: '0 10%', padding: '0', color: '#e56b6f' }}
        >
          <i class="devicon-swift-plain-wordmark" />
        </Animated>
      </TechPageTechContainer>
    </TechPageStyles>
  );
};

export default TechPage;
