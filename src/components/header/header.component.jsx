// For styles
import { HeaderNavLinkStyles, HeaderNavStyles } from './header.styles';
// For routing
import { Link } from 'react-router-dom';

// Link paths here will match up to predefined routes/components in app.js
const Header = () => (
  <HeaderNavStyles>
    <Link className="link-option" to="/" style={HeaderNavLinkStyles}>
      Home
    </Link>
    <Link className="link-option" to="/about" style={HeaderNavLinkStyles}>
      About
    </Link>
    <Link className="link-option" to="/projects" style={HeaderNavLinkStyles}>
      Projects
    </Link>
    <Link className="link-option" to="/tech" style={HeaderNavLinkStyles}>
      Tech
    </Link>
    <Link className="link-option" to="/contact" style={HeaderNavLinkStyles}>
      Contact
    </Link>
  </HeaderNavStyles>
);

export default Header;
