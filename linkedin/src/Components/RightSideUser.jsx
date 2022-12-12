import { Button, Image } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

const RightSideUser = ({ user }) => {
  return (
    <div>
      <div>
        <Image src={user.image} fluid id="rightSideUserImg" />
        <span className="ml-3">
          {user.name} {user.surname}
        </span>
      </div>
      <p className="pl-5 mb-2">
        <small className="line-clamp">{user.bio}</small>
      </p>
      <Button variant="outline-dark" id="followBtn" className="ml-5 mb-4">
        <AiOutlinePlus className="mr-1" />
        Follow
      </Button>
    </div>
  );
};
export default RightSideUser;
