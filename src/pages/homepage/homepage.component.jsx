import './homepage.styles.css';
import {Animated} from "react-animated-css";

const HomePage = () => (
    <div className="homepage">
        <Animated isVisible animationIn='fadeInDown' >
            <h1>Howdy, I'm Kevin!</h1>
        </Animated>
        <Animated animationIn="fadeIn" animationInDuration={2000} isVisible >
            <p>I am a web developer from Austin, Texas.</p>
        </Animated>
    </div>
);

export default HomePage;