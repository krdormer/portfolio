import React from 'react';
// For styles
import './projects-page.styles.css';
// Material UI Button 
import Button from '@material-ui/core/Button';
// SVG image import as component 
import { ReactComponent as CrwnImage } from '../../assets/crwn_clothing_tag.svg';
import { ReactComponent as  DigitalMagicImage} from '../../assets/digital_magic_tag.svg';
// For routing to project links
import { Link } from 'react-router-dom';

const ProjectsPage = () => (
    <div className="projects-page">
        <h1>My Projects</h1>
        <div className="project-text">
            <p>
                These are some of my favorite projects to date. Each will have a live demo associated with
                it, as well as a link to the GitHub repo where you can review the code if interested. 
            </p>
            <p>
                Feel free to take a look, play around with them, break them, I'm always open to feedback
                so I can improve! 
            </p>
        </div>
        <div className="project-container">
            <div className='project'>
                <CrwnImage className="projectOne" />
                <div className="project-button-container">
                    <Link to={{ 
                        pathname: "https://crwn-clothing-21-krd.herokuapp.com/" 
                    }} target="_blank" className='project-button-link'>
                        <Button variant="outlined" color="primary">
                            Live Demo!
                        </Button>
                    </Link>
                </div>
                <div className="project-button-container">
                    <Link to={{ 
                        pathname: "https://github.com/krdormer/crwn_clothing" 
                    }} target="_blank" className='project-button-link'>
                        <Button variant="outlined" color="primary">
                            GitHub Link
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="project">
                <DigitalMagicImage className='projectTwo' />
                <div className="project-button-container">
                    <Link to={{ 
                        pathname: "https://relaxed-wescoff-b22e85.netlify.app/" 
                    }} target="_blank" className='project-button-link'>
                        <Button variant="outlined" color="primary">
                            Live Demo!
                        </Button>
                    </Link>
                </div>
                <div className="project-button-container">
                    <Link to={{ 
                        pathname: "https://github.com/krdormer/DigitalMagic" 
                    }} target="_blank" className='project-button-link'>
                        <Button variant="outlined" color="primary">
                            GitHub Link
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="project">
                <DigitalMagicImage className='projectTwo' />
                <div className="project-button-container">
                    <Link to={{ 
                        pathname: "https://jovial-benz-9278be.netlify.app/" 
                    }} target="_blank" className='project-button-link'>
                        <Button variant="outlined" color="primary">
                            Live Demo!
                        </Button>
                    </Link>
                </div>
                <div className="project-button-container">
                    <Link to={{ 
                        pathname: "https://github.com/krdormer/joke-teller-bot" 
                    }} target="_blank" className='project-button-link'>
                        <Button variant="outlined" color="primary">
                            GitHub Link
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectsPage;