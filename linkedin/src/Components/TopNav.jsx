import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { SiLinkedin } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { HiHome } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import TopNavProfile from "./TopNavProfile";
import TopNavWork from "./TopNavWork";

const TopNav = () => {
  return (

    <Navbar expand="lg p-0 justify-content-center mt-2">
      <div className="d-flex justify-content-center align-items-center">
        <Link href="#home">
          <SiLinkedin size={42} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="d-flex justify-content-center align-items-center">

    <Navbar bg="light" expand="lg">
      <div className="d-flex">
        <Link to="/">
          <SiLinkedin size={42} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="searchBar">

          <GoSearch />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center" id="topNavRight">
        <Navbar.Collapse id="basic-navbar-nav" className="ml-5">
          <Nav className="mr-auto">
            <div className="d-flex justify-content-center align-items-center">
              <Link href="#home" className="top-nav-links">
                <div className="ml-4 navbar-links">
                  <HiHome className=" navbar-icons" />
                  <p className="mb-0 top-nav-text-icons">Home</p>
                </div>

      <div className="mainNavLinksBox">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="mainNavLinks">
              <Link to="/">
                <HiHome />

              </Link>
              <Link href="#link" className="top-nav-links">
                <div className="ml-4 navbar-links">
                  <MdPeopleAlt className=" navbar-icons" />
                  <p className="mb-0 top-nav-text-icons">My Network</p>
                </div>
              </Link>
              <Link className="top-nav-links">
                <div className="ml-4 navbar-links">
                  <BsBriefcaseFill className=" navbar-icons" />
                  <p className="mb-0 top-nav-text-icons">Jobs</p>
                </div>
              </Link>
              <Link className="top-nav-links">
                <div className="ml-4 navbar-links">
                  <AiFillMessage className=" navbar-icons" />
                  <p className="mb-0 top-nav-text-icons">Messaging</p>
                </div>
              </Link>
              <Link className="top-nav-links">
                <div className="ml-4 navbar-links">
                  <FaBell className=" navbar-icons" />
                  <p className="mb-0 top-nav-text-icons">Notifications</p>
                </div>
              </Link>

              <TopNavProfile />
            </div>
            <div>
              <TopNavWork />

              <NavDropdown
                title={
                  <Link to="/profile">
                    <HiUserCircle />
                  </Link>
                }
                id="basic-nav-dropdown one"
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
                id="basic-nav-dropdown two"
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
