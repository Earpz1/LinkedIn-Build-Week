import { Image } from "react-bootstrap";

const RightSideUser = ({ user }) => {
  return (
    <div>
      <Image src={user.image} fluid id="rightSideUserImg" />
      <span>
        {user.name} {user.surname}
      </span>
    </div>
  );
};
export default RightSideUser;
