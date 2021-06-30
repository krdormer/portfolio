import React from 'react';
import './projects-page.styles.css';

import { ReactComponent as CrwnImage } from '../../assets/crwn_clothing_tag.svg';
import { ReactComponent as  DigitalMagicImage} from '../../assets/digital_magic_tag.svg';

const ProjectsPage = () => (
    <div className="projects-page">
        <h1>My Projects</h1>
        <p>
            These are some of my favorite projects to date. Each will have a live demo associated with
            it, as well as a link to the GitHub repo where you can review the code if interested. 
        </p>
        <p>
            Feel free to take a look, play around with them, break them, I'm always open to feedback
            so I can improve! 
        </p>
        <div className='project'>
            <CrwnImage className="projectOne" />
            <label> Hi </label>
        </div>
        <div className="project">
            <DigitalMagicImage className='projectTwo' />
            <label> Hi </label>
        </div>
    </div>
);

export default ProjectsPage;