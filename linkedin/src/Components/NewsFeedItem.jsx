import { Row } from 'react-bootstrap'
import { BsDot, BsDash } from 'react-icons/bs'
import { FcLike, FcRating } from 'react-icons/fc'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'
import { IoIosSend } from 'react-icons/io'

const NewsFeedItem = () => {
  return (
    <>
      <div className="news-feed-post mt-4 d-flex justify-content-evenly">
        <Row className="d-flex">
          <img
            className="news-post-profile-image ml-2"
            src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          />
          <div className="d-flex flex-column">
            <div className="d-flex">
              <small>
                <strong>Username</strong>
              </small>{' '}
              <BsDot className="mt-1" /> <small>3rd+</small>
            </div>
            <div className="d-flex">
              <small>Job Title here</small> <BsDash className="mt-1" />{' '}
              <small>Company here</small>
            </div>
          </div>
          <div className="mt-3 ml-2 d-flex flex-column">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            blanditiis aliquam provident. Enim consequatur doloribus unde
            laboriosam! Ullam ipsam amet neque ipsa obcaecati esse reiciendis.
            Corporis sapiente enim unde quo!
          </div>
          <img className="mt-3" src="https://picsum.photos/505/300" />
          <div className="d-flex mt-2 ml-2 justify-content-between w-100">
            <div>
              <FcLike /> <AiFillLike />
              <small>42</small>
            </div>
            <div>
              <small className="mr-3">1 Comment</small>
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
              <IoIosSend /> Send
            </a>
          </div>
        </Row>
      </div>
    </>
  )
}

export default NewsFeedItem
