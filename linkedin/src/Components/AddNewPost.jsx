import { Modal, Button, Row, Container, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUser, fetchProfile, fetchExperiences } from '../redux/actions'
import {
  BsPlus,
  BsEmojiSmile,
  BsFillImageFill,
  BsCameraVideoFill,
  BsFillFileArrowUpFill,
} from 'react-icons/bs'
import { IoEarth } from 'react-icons/io5'
import { AiFillCaretDown } from 'react-icons/ai'
import { FaEllipsisH } from 'react-icons/fa'
import EmojiPicker from 'emoji-picker-react'
import ImageUpload from './ImageUpload'

function AddNewPost() {
  const [show, setShow] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)
  const [emoji, setemoji] = useState(null)
  const [postContent, setpostContent] = useState('')

  const onEmojiClick = (emojiObject) => {
    setpostContent(postContent + emojiObject.emoji)
  }

  const handleEmojiShow = () => {
    if (showEmoji) {
      setShowEmoji(false)
    } else {
      setShowEmoji(true)
    }
  }

  const handlePostContent = (event) => {
    setpostContent(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      body: JSON.stringify(),
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs',
      },
    }
    const fetchURL = `https://striveschool-api.herokuapp.com/api/profile/experiences`

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        console.log('Edit was successful')
      }
    } catch (error) {
      console.log(error)
    }
    handleClose()
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant="none"
        className="new-post-button text-left"
        onClick={handleShow}
      >
        Start a post
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
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
                  className="new-post-textarea"
                  as="textarea"
                  rows={5}
                  cols={100}
                  value={postContent}
                  placeholder="What would you like to post?"
                  onChange={handlePostContent}
                />
              </Form.Group>
              <BsEmojiSmile
                onClick={handleEmojiShow}
                className="emoji-picker"
              />
              {showEmoji && (
                <EmojiPicker
                  searchDisabled="true"
                  skinTonesDisabled="true"
                  showPreview="false"
                  onEmojiClick={onEmojiClick}
                />
              )}
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
            <Button type="Submit" variant="primary" onClick={handleSubmit}>
              Post
            </Button>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddNewPost
