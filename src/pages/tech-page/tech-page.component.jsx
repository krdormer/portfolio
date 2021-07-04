import './tech-page.styles.css';
import { Animated } from 'react-animated-css';

// Layout each image one at a time? 

const TechPage = () => (
    <div className="tech-page">
        <Animated isVisible={true} animationIn='fadeInDown'>
            <h1>My Technologies</h1>
        </Animated>
        <div class="tech-container">
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-html5-plain-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-css3-plain-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-javascript-plain" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-react-original-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-sass-original" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-express-original-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-mongodb-plain-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-postgresql-plain-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-git-plain-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-github-original-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-python-plain-wordmark" />
            </Animated>
            <Animated isVisible animationIn='slideInLeft' className='tech-image'>
                <i class="devicon-swift-plain-wordmark" />
            </Animated>
        </div>
    </div>
);

export default TechPage;