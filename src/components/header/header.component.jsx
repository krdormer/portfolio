import './header.styles.css';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <div className="link-container">
            <Link className='link-option' to='/'>Home</Link>
            <Link className='link-option' to='/about'>About</Link>
        </div>
    </div>
);

export default Header;