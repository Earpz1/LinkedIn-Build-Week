import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap'
import { SiLinkedin } from 'react-icons/si'
import { GoSearch } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import { MdPeopleAlt } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TopNavProfile from './TopNavProfile'
import TopNavWork from './TopNavWork'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FiDelete } from 'react-icons/fi'
import FormSearchUser from './FormSearchUser'

const TopNav = () => {
  const [query, setQuery] = useState('')
  const [isQuerySet, setIsQuerySet] = useState(false)
  const [clearInput, setClearInput] = useState(query)
  console.log('the query is: ', query)
  console.log('the input is: ', clearInput)
  const handleQuery = (e) => {
    setQuery(e.target.value)
    setIsQuerySet(true)
  }
  const handleClearInput = () => {
    // setClearInput("");
    setQuery('')
    setIsQuerySet(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const usersList = useSelector((state) => state.user.users)
  const users = usersList[0]
  const areUsersLoaded = useSelector((state) => state.user.usersLoaded)
  return (
    <Navbar expand="lg justify-content-center">
      <Container>
        <div
          className="d-flex justify-content-center align-items-center"
          id="parentDivForm"
        >
          <Link to="/">
            <SiLinkedin size={38} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div
            className="d-flex justify-content-center align-items-center"
            id="generalSearchArea"
          >
            <div id="topNavDeleteInput">
              <FiDelete onClick={handleClearInput} />
            </div>
            <div className="pl-3 pr-2">
              <GoSearch />
            </div>
            <Form inline className="searchInput" onSubmit={handleSubmit}>
              <FormControl
                value={query}
                onChange={handleQuery}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
            {isQuerySet && (
              <ul id="topNavFormList">
                {areUsersLoaded &&
                  users
                    .filter((user) => user.name.startsWith(`${query}`))
                    .map((user) => (
                      <li
                        className="formListItems line-clamp-one"
                        key={user._id}
                      >
                        <FormSearchUser user={user} />
                      </li>
                    ))}
              </ul>
            )}
          </div>

          {/* <div
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
          </div> */}
          {/* <div id="topNavFormDiv">
            <FiDelete id="topNavDeleteInput" onClick={handleClearInput} />
            <GoSearch id="topNavSerachIcon" className="ml-2" />
            <Form onSubmit={handleSubmit}>
              <FormControl
                value={query}
                onChange={handleQuery}
                type="text"
                placeholder="Search contacts"
                className="mr-sm-2"
                id="topNavFormControl"
              />
            </Form>
            {isQuerySet && (
              <ul id="topNavFormList">
                {areUsersLoaded &&
                  users
                    .filter((user) => user.name.toLowerCase().startsWith(`${query}`))
                    .slice(0, 18)
                    .map((user) => (
                      <li className="formListItems line-clamp-one" key={user._id}>
                        <FormSearchUser user={user} />
                      </li>
                    ))}
              </ul>
            )}
          </div> */}
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
  )
}

export default TopNav
