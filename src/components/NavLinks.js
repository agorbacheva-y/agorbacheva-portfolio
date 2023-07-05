const NavLinks = ({ scrollToAbout, scrollToContact, scrollToHome, scrollToProjects }) => {
  return (
    <div className="navbar__elements">
      <ul>
        <li>
          <button className="navbar__link" onClick={() => scrollToHome()} >
            Home
          </button>
        </li>
        <li>
          <button className="navbar__link" onClick={() => scrollToAbout()} >
            About
          </button>
        </li>
        <li>
          <button className="navbar__link" onClick={() => scrollToProjects()} >
            Projects
          </button>
        </li>
        <li>
          <button className="navbar__link" onClick={() => scrollToContact()} >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;