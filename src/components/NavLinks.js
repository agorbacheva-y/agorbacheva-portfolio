const NavLinks = ({ scrollToAbout, scrollToContact, scrollToHome, scrollToProjects }) => {
  return (
    <div className="navbar__elements">
      <ul>
        <li>
          <a className="navbar__link" onClick={scrollToHome}>
            Home
          </a>
        </li>
        <li>
          <a className="navbar__link" onClick={scrollToAbout}>
            About
          </a>
        </li>
        <li>
          <a className="navbar__link" onClick={scrollToProjects}>
            Projects
          </a>
        </li>
        <li>
          <a className="navbar__link" onClick={scrollToContact}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;