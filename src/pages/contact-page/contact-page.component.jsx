import './contact-page.styles.css';

import { ReactComponent as LinkedInLogo } from '../../assets/linkedin_icon.svg';
import { ReactComponent as GithubLogo } from '../../assets/github_icon.svg';

import { Link } from 'react-router-dom';

import { Animated } from 'react-animated-css';

const ContactPage = () => (
    <div className="contact-page">
        <Animated isVisible={true} animationIn='fadeInDown'>
            <h1 style={{fontSize: '2.5rem'}}>Let's Connect!</h1>
        </Animated>
        <Animated isVisible={true} animationIn='fadeInDown'>
            <p className='contact-text'>
                I'm always looking to meet up with other folks in the industry! If you want to collaborate
                on a project, have resources or other cool things you want to share, or if you just want to
                chat don't hesitate to reach out! 
            </p>
        </Animated>
        <div className="contact-icon-container">
            <div className="contact-icon">
                <Link to={{ 
                    pathname: "https://github.com/krdormer" 
                }} target="_blank" className='project-button-link'>
                    <GithubLogo />
                </Link>
            </div>
            <div className="contact-icon">
                <Link to={{ 
                    pathname: "https://www.linkedin.com/in/kevin-dormer-637310195/" 
                }} target="_blank" className='project-button-link'>
                    <LinkedInLogo />
                </Link>
            </div>
        </div>
    </div>
);

export default ContactPage;