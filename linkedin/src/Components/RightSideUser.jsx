import { Button, Image } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getContactAction,
  userNowAction,
  getContactExperiences,
} from "../redux/actions";

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
          <div className="d-flex" style={{ gap: "5px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                src={user.image}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid"
              />
            </div>
            <div style={{ width: "150px" }}>
              <span>
                {user.name} {user.surname}
              </span>
              <p>
                <small className="line-clamp">{user.bio}</small>
              </p>
              <div className="mb-2">
                <Button variant="outline-dark" id="followBtn" className="px-4">
                  <AiOutlinePlus className="mr-1" />
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
        <hr className="lineBreaks" />
      </Link>
    </>
  );
};
export default RightSideUser;
