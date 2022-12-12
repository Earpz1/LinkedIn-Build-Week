import { Image } from "react-bootstrap";

const RightSideUser = ({ user }) => {
  return (
    <div>
      <div>
        <Image src={user.image} fluid id="rightSideUserImg" />
        <span className="ml-3">
          {user.name} {user.surname}
        </span>
      </div>
      <p className="pl-5">
        <small className="line-clamp">{user.bio}</small>
      </p>
    </div>
  );
};
export default RightSideUser;
