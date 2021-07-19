// For styling
import {
  ContactPageContactIconContainer,
  ContactPageContactIconStyles,
  ContactPageContactTextStyles,
  ContactPageStyles,
} from './contact-page.styles';

import { ReactComponent as LinkedInLogo } from '../../assets/linkedin_icon.svg';
import { ReactComponent as GithubLogo } from '../../assets/github_icon.svg';

import { Link } from 'react-router-dom';

import { Animated } from 'react-animated-css';

const ContactPage = () => (
  <ContactPageStyles>
    <Animated isVisible={true} animationIn="fadeInDown">
      <h1 style={{ fontSize: '2.5rem' }}>Let's Connect!</h1>
    </Animated>
    <Animated isVisible={true} animationIn="fadeInDown">
      <ContactPageContactTextStyles>
        I'm always looking to meet up with other folks in the industry! If you
        want to collaborate on a project, have resources or other cool things
        you want to share, or if you just want to chat don't hesitate to reach
        out!
      </ContactPageContactTextStyles>
    </Animated>
    <ContactPageContactIconContainer>
      <ContactPageContactIconStyles>
        <Link
          to={{
            pathname: 'https://github.com/krdormer',
          }}
          target="_blank"
          className="project-button-link"
        >
          <GithubLogo />
        </Link>
      </ContactPageContactIconStyles>
      <ContactPageContactIconStyles>
        <Link
          to={{
            pathname: 'https://www.linkedin.com/in/kevin-dormer-637310195/',
          }}
          target="_blank"
          className="project-button-link"
        >
          <LinkedInLogo />
        </Link>
      </ContactPageContactIconStyles>
    </ContactPageContactIconContainer>
  </ContactPageStyles>
);

export default ContactPage;
