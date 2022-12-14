import { Button, Image } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContactAction, userNowAction, getContactExperiences } from "../redux/actions";

const RightSideUser = ({ user }) => {
  const dispatch = useDispatch();
  console.log("the right side user is: ", user);
  return (
    <>
      <Link
        to={`/${user.name}-${user.surname}`}
        onClick={() => {
          dispatch(getContactAction(user));
          // dispatch(userNowAction(user));

          dispatch(getContactExperiences(user._id));
        }}
      >
        <div id="rightSideUserSingleElement">
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
        <hr className="lineBreaks" />
      </Link>
    </>
  );
};
export default RightSideUser;
