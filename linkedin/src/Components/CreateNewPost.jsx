import { Row, Form } from 'react-bootstrap'
import {
  FcStackOfPhotos,
  FcVideoCall,
  FcCalendar,
  FcKindle,
} from 'react-icons/fc'

const HomePageLeft = () => {
  return (
    <>
      <div className="new-post">
        <Row>
          <div className="d-flex">
            <img
              className="new-post-image"
              src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            />
            <Form>
              <Form.Group className=" new-post-form">
                <Form.Control type="email" placeholder="Start a post" />
              </Form.Group>
            </Form>
          </div>
        </Row>
        <Row className="px-4 justify-content-between new-post-type">
          <a href="#">
            <FcStackOfPhotos className="mt-1" />
            <span className="ml-2">Photo</span>
          </a>
          <a href="#">
            <FcVideoCall className="mt-1" />
            <span className="ml-2">Video</span>
          </a>
          <a href="#">
            <FcCalendar className="mt-1" />
            <span className="ml-2">Event</span>
          </a>
          <a href="#">
            <FcKindle className="mt-1" />
            <span className="ml-2">Write Article</span>
          </a>
        </Row>
      </div>
    </>
  )
}

export default HomePageLeft
