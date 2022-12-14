import { Button, Container } from "react-bootstrap";
import { HiUserCircle } from "react-icons/hi";

const HiddenNav = () => {
  return (
    <div id="NavBottom">
      <Container>
        <div className="d-flex justify-content-between">
          <div id="bottomNavLeft" className="d-flex align-itmes-center">
            <div id="bottomNavProfilePicBox">
              <HiUserCircle size={48} />
            </div>
            <div id="bottomNavUserInfoBox">
              <p className="m-0">User Name</p>
              <p className="m-0">User Position</p>
            </div>
          </div>
          <div id="bottomNavRight" className="d-flex align-items-center">
            <div className="bottomNavButtons">
              <Button className="px-2 rounded-pill">More</Button>
            </div>
            <div className="bottomNavButtons">
              <Button className="px-2 rounded-pill">Add profile section</Button>
            </div>
            <div className="bottomNavButtons">
              <Button className="px-2 rounded-pill">Open to</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HiddenNav;
