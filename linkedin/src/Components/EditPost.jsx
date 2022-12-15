import { Modal, Button, Row, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser, fetchProfile, fetchExperiences } from "../redux/actions";
import { BsPlus, BsEmojiSmile, BsFillImageFill, BsCameraVideoFill, BsFillFileArrowUpFill } from "react-icons/bs";
import { IoEarth } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { FaEllipsisH } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import { profilePostsListAction, getCurrentPostAction } from "../redux/actions";
import { BsPencil } from "react-icons/bs";

function EditPost({ post }) {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.posts.posts.currentPost);
  console.log("the current post is: ", currentPost);

  //   const [show, setShow] = useState(false);
  //   const [showEmoji, setShowEmoji] = useState(false);
  //   const [postText, setPostText] = useState("");

  //   console.log("we are currently posting: ", postText);

  //   const handleEmojiShow = () => {
  //     if (showEmoji) {
  //       setShowEmoji(false);
  //     } else {
  //       setShowEmoji(true);
  //     }
  //   };

  //   const handlePostText = (e) => {
  //     setPostText(e.target.value);
  //   };

  // const getCurrentPost = async (e) => {
  //     e.preventDefault()
  //     console.log("we are getting the current post")
  //     const options = {
  //         method: "GET",

  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs",
  //         },
  //     };
  //     const fetchURL = `https://striveschool-api.herokuapp.com/api/posts/{postId}`;

  //     try {
  //         let response = await fetch(fetchURL, options);
  //         console.log(response);

  //         if (response.ok) {
  //           console.log("Post was successful");
  //           const post = await response.json();
  //           console.log("the post is: ", post);
  //           dispatch(profilePostsListAction(post));
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  // }

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     console.log("We are editing posts here");

  //     const post = {
  //       text: postText,
  //     };

  //     const options = {
  //       method: "PUT",
  //       body: JSON.stringify(post),
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs",
  //       },
  //     };
  //     const fetchURL = `https://striveschool-api.herokuapp.com/api/posts/`;

  //     try {
  //       let response = await fetch(fetchURL, options);
  //       console.log(response);

  //       if (response.ok) {
  //         console.log("Post was successful");
  //         const post = await response.json();
  //         console.log("the post is: ", post);
  //         dispatch(profilePostsListAction(post));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     handleClose();
  //   };

  //   const handleClose = () => {
  //     setShow(false);
  //     setPostText("");
  //   };
  const handleShow = () => {
    //setShow(true)
    dispatch(getCurrentPostAction());
  };

  return (
    <>
      <Button id="editButton" onClick={handleShow}>
        <BsPencil size={20} />
      </Button>

      {/* <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <img
                className="news-post-profile-image ml-2"
                src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              />
              <div className="d-flex flex-column">
                <p>Username</p>
                <div className="d-flex">
                  <Button variant="outline-dark" className="privacy-button">
                    <IoEarth className="globe-icon" />
                    Anyone
                    <AiFillCaretDown className="expand-icon-privacy" />
                  </Button>
                </div>
              </div>
              <Form.Group className="mt-3">
                <Form.Control
                  value={postText}
                  onChange={handlePostText}
                  className="new-post-textarea"
                  as="textarea"
                  rows={5}
                  cols={100}
                  placeholder="Edit your post here..."
                />
              </Form.Group>

              <BsEmojiSmile onClick={handleEmojiShow} className="emoji-picker" />
              {showEmoji && <EmojiPicker searchDisabled="true" skinTonesDisabled="true" showPreview="false" />}
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Row className="w-100 justify-content-between">
            <div className="footer-icons-new-post">
              <BsFillImageFill className="ml-3 mr-2" />
              <BsCameraVideoFill className="ml-5 mr-2" />
              <BsFillFileArrowUpFill className="ml-5 mr-2" />
              <FaEllipsisH className="ml-5 mr-2" />
            </div>
            <Button type="Submit" variant="warning" onClick={handleSubmit}>
              Save
            </Button>
            <Button type="Submit" variant="outline-danger" onClick={handleClose}>
              Delete
            </Button>
          </Row>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default EditPost;
