import { Col, Container, Row } from 'react-bootstrap'
import ProfileHeader from './ProfileHeader'
import ProfileRight from './ProfileRight'

const Profile = () => {
  return (
    <>
      <Container className="mt-3">
        <div className=" d-flex justify-content-between">
          <div>
            <ProfileHeader />
          </div>
          <Col>
            <ProfileRight />
          </Col>
        </div>
      </Container>
    </>
  )
}

export default Profile
