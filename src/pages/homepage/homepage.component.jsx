import './homepage.styles.css';
import {Animated} from "react-animated-css";

const HomePage = () => (
    <div className="homepage">
        <div className="intro-text">
            <Animated isVisible animationIn='fadeInDown' >
                <h1>Howdy, I'm Kevin!</h1>
            </Animated>
            <Animated animationIn="fadeIn" animationInDuration={2000} isVisible >
                <p>I am a web developer from Austin, Texas.</p>
                <p>This is my portfolio, and i'd love if you took a look around!</p>
            </Animated>
        </div>
    </div>
);

export default HomePage;