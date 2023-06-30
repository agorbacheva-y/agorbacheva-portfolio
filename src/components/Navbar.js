import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [ showNavbar, setShowNavbar ] = useState(false);

  const handleShow = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav>
      <div className='navbar__container'>
        <div className='navbar__menu'>
          <MenuIcon onClick={handleShow} />
        </div>

        <div className={`navbar__links ${showNavbar && 'active'}`} >
          <ul>
            <li>
              <NavLink className="navbar__link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/aboutme">About</NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;