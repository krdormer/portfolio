import React from 'react';
// For styles
import {
  ProjectPageButtonContainerStyles,
  ProjectPageInfoText,
  ProjectPageProjectContainer,
  ProjectPageProjectStyles,
  ProjectPageProjectTitle,
  ProjectsPageStyles,
} from './projects-page.styles';
import Button from '@material-ui/core/Button';
// SVG image import as component
import { ReactComponent as CrwnImage } from '../../assets/crwn_clothing_tag.svg';
import { ReactComponent as DigitalMagicImage } from '../../assets/digital_magic_tag.svg';
import { ReactComponent as RoboJokeTellerImage } from '../../assets/robo_joke_teller_image.svg';
// For routing to project links
import { Link } from 'react-router-dom';
// NPM Component imports
import { Animated } from 'react-animated-css';

const svgImageStyles = {
  width: '250px',
  height: '200px',
  opacity: '1',
};

const ProjectsPage = () => (
  <ProjectsPageStyles>
    <Animated isVisible={true} animationIn="fadeInDown">
      <h1>My Projects</h1>
    </Animated>
    <Animated isVisible={true} animationIn="fadeInDown">
      <ProjectPageInfoText>
        <p>
          These are some of my favorite projects to date. Each will have a live
          demo associated with it, as well as a link to the GitHub repo where
          you can review the code if interested.
        </p>
        <p>
          Feel free to take a look, play around with them, break them; I'm
          always open to feedback so I can produce the highest-quality software
          I can!
        </p>
      </ProjectPageInfoText>
    </Animated>
    <ProjectPageProjectContainer>
      <Animated isVisible animationIn="slideInLeft">
        <ProjectPageProjectStyles>
          <ProjectPageProjectTitle>CRWN Clothing</ProjectPageProjectTitle>
          <CrwnImage style={svgImageStyles} />
          <ProjectPageButtonContainerStyles>
            <Link
              to={{
                pathname: 'https://crwn-clothing-21-krd.herokuapp.com/',
              }}
              target="_blank"
              className="project-button-link"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="outlined" color="primary">
                Live Demo!
              </Button>
            </Link>
          </ProjectPageButtonContainerStyles>
          <div className="project-button-container">
            <Link
              to={{
                pathname: 'https://github.com/krdormer/crwn_clothing',
              }}
              target="_blank"
              className="project-button-link"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="outlined" color="primary">
                GitHub Link
              </Button>
            </Link>
          </div>
        </ProjectPageProjectStyles>
      </Animated>
      <Animated isVisible animationIn="slideInLeft">
        <ProjectPageProjectStyles>
          <ProjectPageProjectTitle>Digital Magic</ProjectPageProjectTitle>
          <DigitalMagicImage style={svgImageStyles} />
          <ProjectPageButtonContainerStyles>
            <Link
              to={{
                pathname: 'https://relaxed-wescoff-b22e85.netlify.app/',
              }}
              target="_blank"
              className="project-button-link"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="outlined" color="primary">
                Live Demo!
              </Button>
            </Link>
          </ProjectPageButtonContainerStyles>
          <div className="project-button-container">
            <Link
              to={{
                pathname: 'https://github.com/krdormer/DigitalMagic',
              }}
              target="_blank"
              className="project-button-link"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="outlined" color="primary">
                GitHub Link
              </Button>
            </Link>
          </div>
        </ProjectPageProjectStyles>
      </Animated>
      <Animated isVisible animationIn="slideInLeft">
        <ProjectPageProjectStyles>
          <ProjectPageProjectTitle>Robo-Joke-Teller</ProjectPageProjectTitle>
          <RoboJokeTellerImage style={svgImageStyles} />
          <div className="project-button-container">
            <Link
              to={{
                pathname: 'https://jovial-benz-9278be.netlify.app/',
              }}
              target="_blank"
              className="project-button-link"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="outlined" color="primary">
                Live Demo!
              </Button>
            </Link>
          </div>
          <ProjectPageButtonContainerStyles>
            <Link
              to={{
                pathname: 'https://github.com/krdormer/joke-teller-bot',
              }}
              target="_blank"
              className="project-button-link"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="outlined" color="primary">
                GitHub Link
              </Button>
            </Link>
          </ProjectPageButtonContainerStyles>
        </ProjectPageProjectStyles>
      </Animated>
    </ProjectPageProjectContainer>
  </ProjectsPageStyles>
);

export default ProjectsPage;
