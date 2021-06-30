import React from 'react';
import './projects-page.styles.css';

import Button from '@material-ui/core/Button';

import { ReactComponent as CrwnImage } from '../../assets/crwn_clothing_tag.svg';
import { ReactComponent as  DigitalMagicImage} from '../../assets/digital_magic_tag.svg';

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
                    <Button variant="outlined" color="primary">
                        Live Demo!
                    </Button>
                </div>
                <div className="project-button-container">
                    <Button variant="outlined" color="primary">
                        GitHub Link
                    </Button>
                </div>
            </div>
            <div className="project">
                <DigitalMagicImage className='projectTwo' />
                <div className="project-button-container">
                    <Button variant="outlined" color="primary">
                        Live Demo!
                    </Button>
                </div>
                <div className="project-button-container">
                    <Button variant="outlined" color="primary">
                        GitHub Link
                    </Button>
                </div>
            </div>
            <div className="project">
                <DigitalMagicImage className='projectTwo' />
                <div className="project-button-container">
                    <Button variant="outlined" color="primary">
                        Live Demo!
                    </Button>
                </div>
                <div className="project-button-container">
                    <Button variant="outlined" color="primary">
                        GitHub
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectsPage;