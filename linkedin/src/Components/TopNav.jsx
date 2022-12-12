import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { SiLinkedin } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { HiHome, HiUserCircle } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import { BsBriefcaseFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="d-flex">
        <Link href="#home">
          <SiLinkedin size={42} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <GoSearch />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </div>
      </div>
      <div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div>
              <Link href="#home">
                <HiHome />
              </Link>
              <Link href="#link">
                <MdPeopleAlt />
              </Link>
              <Link>
                <BsBriefcaseFill />
              </Link>
              <Link>
                <AiFillMessage />
              </Link>
              <Link>
                <FaBell />
              </Link>
              <NavDropdown
                title={
                  <Link to={"/profile"}>
                    <HiUserCircle />
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div>
              <NavDropdown
                title={<BsFillGrid3X3GapFill />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default TopNav;
