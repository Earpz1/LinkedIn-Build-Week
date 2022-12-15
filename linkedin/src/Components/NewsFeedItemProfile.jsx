import { Badge, Row, Button } from "react-bootstrap";
import { BsDot, BsDash } from "react-icons/bs";
import { FcLike, FcRating } from "react-icons/fc";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { getCurrentPostAction } from "../redux/actions";
import EditPost from "./EditPost";
import { useDispatch } from "react-redux";

const NewsFeedItemProfile = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="news-feed-post mt-3 d-flex justify-content-evenly">
        <Row className="d-flex">
          {/* <Link to={"#"} onClick={() => dispatch(getCurrentPostAction)}> */}
          <img
            className="news-post-profile-image ml-2"
            src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          />
          {/* </Link> */}

          <div className="d-flex flex-column">
            <div className="d-flex">
              <small>
                <strong>
                  {post.user.name} {post.user.surname}
                </strong>
              </small>{" "}
              <BsDot className="mt-1" /> <small>3rd+</small>
            </div>
            <div className="d-flex">
              <small>{post.user.title}</small> <BsDash className="mt-1" /> <small>{post.user.email}</small>
            </div>
          </div>
          <div className="mt-3 ml-2 d-flex flex-column">{post.text}</div>
          <img className="mt-3" src="https://picsum.photos/505/300" />
          <div className="d-flex mt-2 ml-2 justify-content-between w-100">
            <div>
              <FcLike /> <AiFillLike />
              <small>42</small>
            </div>
            <div>
              <a href="#" className="commentLink">
                <small className="mr-3">1 Comment</small>
              </a>
            </div>
          </div>
          <hr className="bottom-post-divider" />
          <div className="post-action-buttons d-flex justify-content-between w-100 mx-3">
            <a href="#">
              <AiOutlineLike /> Like
            </a>
            <a href="#">
              <FaRegCommentDots /> Comment
            </a>
            <a href="#">
              <BiRepost /> Repost
            </a>
            <a href="#">
              <IoIosSend /> Sendasdfds
            </a>
            <div>
              <EditPost post={post} />
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default NewsFeedItemProfile;