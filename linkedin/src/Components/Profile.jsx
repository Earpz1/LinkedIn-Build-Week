import { Col, Container, Row } from 'react-bootstrap'
import ProfileHeader from './ProfileHeader'
import ProfileRight from './ProfileRight'
import EditExperienceModal from './EditExperienceModal'
import AddExperienceModal from './AddExperience'
import Experience from './Experience'
const Profile = () => {
  return (
    <>
      <Container className="mt-3">
        <div className=" d-flex justify-content-between">
          <div>
            <ProfileHeader />
            <AddExperienceModal />
            <Experience />
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
