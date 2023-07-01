import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [ showNavbar, setShowNavbar ] = useState(false);

  const handleShow = () => {
    setShowNavbar(true);
  };

  const handleClose = () => {
    setShowNavbar(false);
  }

  return (
    <nav className='navbar'>

        <button 
          className="navbar__menu" 
          onClick={handleShow}
        >
          <MenuIcon  />
        </button>
        
      

        <div className="navbar__elements">
          { showNavbar && (
            <>
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
          
              <button className="navbar__close">
                <CloseIcon onClick={handleClose} />
              </button>
            </>
          )}
        </div>
        
    </nav>
  );
};

export default Navbar;