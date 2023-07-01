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

      <div className='navbar__menu'>
        <button 
          className={`navbar__icon ${showNavbar ? "hidden" : "active"}`} 
          onClick={handleShow}
        >
          <MenuIcon  />
        </button>
      </div>

        
          { showNavbar && (
            <div className='navbar__overlay'>
              <div className='navbar__content'>

                <div className='navbar__close'>
                  <button className={`navbar__icon ${showNavbar ? "active" : "hidden"}`} >
                    <CloseIcon onClick={handleClose} />
                  </button>
                </div>

                <div className="navbar__elements">
                  <ul>
                    <li>
                      <NavLink className="navbar__link" to="/" onClick={handleClose}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar__link" to="/aboutme" onClick={handleClose}>About</NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar__link" to="/projects" onClick={handleClose}>Projects</NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar__link" to="/contact" onClick={handleClose}>Contact</NavLink>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}
        
        
    </nav>
  );
};

export default Navbar;