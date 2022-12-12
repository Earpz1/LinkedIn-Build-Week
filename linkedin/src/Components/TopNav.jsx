import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
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
    <Navbar expand="lg justify-content-center">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/">
            <SiLinkedin size={38} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div
            className="d-flex justify-content-center align-items-center"
            id="generalSearchArea"
          >
            <div className="pl-3 pr-2">
              <GoSearch />
            </div>
            <Form inline className="searchInput">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          id="topNavRight"
        >
          <Navbar.Collapse id="basic-navbar-nav" className="ml-5">
            <Nav className="mr-auto">
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/" className="top-nav-links">
                  <div className="ml-4 navbar-links">
                    <HiHome className=" navbar-icons" />
                    <p className="mb-0 top-nav-text-icons">Home</p>
                  </div>
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
                <div className="topNavMeBox">
                  <TopNavProfile />
                </div>
              </div>
              <div className="topNavWorkBox">
                <TopNavWork />
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNav;
