// For styles 
import './header.styles.css';
// For routing 
import { Link } from 'react-router-dom';

// Link paths here will match up to predefined routes/components in app.js
const Header = () => (
    <div className="header">
        <div className="link-container">
            <Link className='link-option' to='/'>Home</Link>
            <Link className='link-option' to='/about'>About</Link>
            <Link className='link-option' to='/projects'>Projects</Link>
            <Link className='link-option' to='/tech'>Tech</Link>
            <Link className='link-option' to='/contact'>Contact</Link>
        </div>
    </div>
);

export default Header;