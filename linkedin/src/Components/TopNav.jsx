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
import { useState } from "react";
import { useSelector } from "react-redux";
import { FiDelete } from "react-icons/fi";

import FormSearchUser from "./FormSearchUser";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [isQuerySet, setIsQuerySet] = useState(false);
  const [clearInput, setClearInput] = useState(query);

  console.log("the query is: ", query);
  console.log("the input is: ", clearInput);
  const handleQuery = (e) => {
    setQuery(e.target.value);
    setIsQuerySet(true);
  };

  const handleClearInput = () => {
    // setClearInput("");
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const usersList = useSelector((state) => state.user.users);
  const users = usersList[0];
  const areUsersLoaded = useSelector((state) => state.user.usersLoaded);

  return (
    <Navbar expand="lg p-0 justify-content-center mt-2">
      <div className="d-flex justify-content-center align-items-center">
        <Link href="#home">
          <SiLinkedin size={42} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <div className="d-flex justify-content-center align-items-center"> */}
        {/* <GoSearch /> */}
        <div id="topNavFormDiv">
          <FiDelete id="topNavDeleteInput" onClick={handleClearInput} />
          <GoSearch id="topNavSerachIcon" className="ml-2" />

          <Form onSubmit={handleSubmit}>
            <FormControl
              value={query}
              onChange={handleQuery}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              id="topNavFormControl"
            />
          </Form>
          {isQuerySet && (
            <ul id="topNavFormList">
              {areUsersLoaded &&
                users
                  .filter((user) => user.name.toLowerCase().startsWith(`${query}`))
                  .slice(0, 6)
                  .map((user) => (
                    <li className="formListItems line-clamp-one" key={user._id}>
                      <FormSearchUser user={user} />
                    </li>
                  ))}
            </ul>
          )}
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
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default TopNav;
