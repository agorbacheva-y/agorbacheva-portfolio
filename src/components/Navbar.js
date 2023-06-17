import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <Button
        className="d-none"
      >
        <MdMenu />
      </Button>

      <p>desktop and tablet</p>

      <Offcanvas
        responsive="xs"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="mb-0">
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
          </ul>
        </Offcanvas.Body>      
      </Offcanvas>
    </div>
  );
};

export default Navbar;