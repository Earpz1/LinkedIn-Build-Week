import { NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const TopNavWork = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <BsFillGrid3X3GapFill size={20} />
      </div>
      <NavDropdown title="Work" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
export default TopNavWork;
