import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import NavLinks from './NavLinks';

const Navbar = ({ showNavbar, handleShow, handleClose, scrollToContact, scrollToProjects, scrollToAbout, scrollToHome, scrollToTop }) => {

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

            <NavLinks 
              scrollToAbout={scrollToAbout} 
              scrollToContact={scrollToContact} 
              scrollToHome={scrollToHome} 
              scrollToProjects={scrollToProjects} 
            />
          </div>
        </div>
      )}
        
      <div className='navbar__tablet'>
        <NavLinks 
          scrollToAbout={scrollToAbout} 
          scrollToContact={scrollToContact} 
          scrollToHome={scrollToHome} 
          scrollToProjects={scrollToProjects} 
        />
      </div>

      <button className='arrow-up'>
        <a 
          className="navbar__link" 
          onClick={scrollToTop}
        >
          <KeyboardDoubleArrowUpIcon style={{fontSize: '2rem'}} />
        </a>
      </button>
    </nav>
  );
};

export default Navbar;