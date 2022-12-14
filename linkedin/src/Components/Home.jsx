import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
  fetchUsers,
  fetchProfile,
  currentUser,
  fetchExperiences,
} from '../redux/actions'
import { Container, Row, Col } from 'react-bootstrap'
import HomePageLeft from './HomePageLeft'
import CreateNewPost from './CreateNewPost'
import HomePageRight from './HomePageRight'
import NewsFeedItem from './NewsFeedItem'
import { AiFillCaretDown } from 'react-icons/ai'

const Home = () => {
  const dispatch = useDispatch()
  const usersData = useSelector((state) => state.user.users)
  const currentUserData = useSelector((state) => state.user.currentUser)
  const usersLoaded = useSelector((state) => state.user.usersLoaded)
  const contact = useSelector((state) => state.user.contact)

  useEffect(() => {
    dispatch(fetchProfile())
    dispatch(fetchExperiences(currentUserData._id))
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col lg={3} className="pr-0">
            <HomePageLeft />
          </Col>
          <Col lg={5} className="px-0">
            <Row className="d-flex flex-column align-items-left mb-3">
              <CreateNewPost className="main-feed-content px-0" />
              <div className="d-flex align-items-center">
                <hr className="mt-3" />
                <span>
                  Sort by: Top{' '}
                  <a href="#">
                    <AiFillCaretDown />
                  </a>
                </span>
              </div>
              <NewsFeedItem />
              <NewsFeedItem />
              <NewsFeedItem />
            </Row>
          </Col>
          <Col lg={3} className="px-0">
            <HomePageRight className="px-0" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
