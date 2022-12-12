import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'

const ProfileHeader = () => {
  const usersData = useSelector((state) => state.user.currentUser)

  return (
    <>
      <img
        className="profile-image"
        src={usersData.image}
        alt={usersData.name}
      />
      <br />
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
      <Button className="mr-3" variant="primary">
        Open to
      </Button>
      <Button className="mr-3" variant="outline-primary">
        Add Profile Section
      </Button>
      <Button variant="outline-dark">More</Button>
    </>
  )
}

export default ProfileHeader
