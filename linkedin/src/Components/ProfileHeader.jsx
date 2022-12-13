import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import EditModal from './EditModal'

const ProfileHeader = () => {
  const usersData = useSelector((state) => state.user.currentUser)
  const usersLoaded = useSelector((state) => state.user.usersLoaded)

  return (
    <>
      <div id="profileContainer">
        <div id="upperCardBackgroundImage"></div>
        <div id="userProfilePic">
          <img
            className="profile-image img-fluid"
            src={usersData.image}
            alt={usersData.name}
          />
        </div>
        <div id="lowerProfileCard">
          <EditModal />
          <b>
            {usersData.name} {usersData.surname}
          </b>
          <br />
          {usersData.title}
          <br />
          {usersData.area} - <a href="#">Contact Info</a>
          <br />
          <a href="#">1 Connection</a>
          <br />
          <br />
          <Button className="mr-3" variant="primary">
            Open to
          </Button>
          <Button className="mr-3" variant="outline-primary">
            Add Profile Section
          </Button>
          <Button variant="outline-dark">More</Button>
        </div>
      </div>
    </>
  )
}

export default ProfileHeader
