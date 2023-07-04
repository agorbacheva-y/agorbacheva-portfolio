const NavLinks = ({ scrollToAbout, scrollToContact, scrollToHome, scrollToProjects }) => {
  return (
    <div className="navbar__elements">
      <ul>
        <li>
          <a className="navbar__link" to="/" onClick={scrollToHome}>Home</a>
        </li>
        <li>
          <a className="navbar__link" to="/aboutme" onClick={scrollToAbout}>About</a>
        </li>
        <li>
          <a className="navbar__link" to="/projects" onClick={scrollToProjects}>Projects</a>
        </li>
        <li>
          <a className="navbar__link" to="/contact" onClick={scrollToContact}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;