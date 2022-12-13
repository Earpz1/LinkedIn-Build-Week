import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import EditModal from "./EditModal";

const ProfileHeader = () => {
  const usersData = useSelector((state) => state.user.currentUser);
  const usersLoaded = useSelector((state) => state.user.usersLoaded);

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
        <div id="lowerProfileCard" className="d-flex justify-content-between">
          <div>
            <div className="mb-3">
              <h3 className="m-0">
                {usersData.name} {usersData.surname}
              </h3>
              <p className="m-0">{usersData.title}</p>
              <p className="m-0 greyedInfo">
                {usersData.area} - <a href="#">Contact Info</a>
              </p>

              <a href="#">1 Connection</a>
            </div>
            <div>
              <Button className="mr-3 rounded-pill" variant="primary">
                Open to
              </Button>
              <Button className="mr-3 rounded-pill" variant="outline-primary">
                Add Profile Section
              </Button>
              <Button variant="outline-dark" className="rounded-pill">
                More
              </Button>
            </div>
          </div>
          <div>
            <EditModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
