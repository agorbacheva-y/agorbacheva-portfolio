import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [ showNavbar, setShowNavbar ]

  return (
    <nav>
      <div className='navbar__container'>
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
    </nav>
  );
};

export default Navbar;