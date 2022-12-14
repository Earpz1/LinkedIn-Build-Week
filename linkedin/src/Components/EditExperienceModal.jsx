import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUser, fetchProfile } from '../redux/actions'
import { BsPencil } from 'react-icons/bs'
import { fetchExperiences } from '../redux/actions'

function EditExperienceModal(props) {
  console.log(props.experience)
  const dispatch = useDispatch()
  const usersData = useSelector((state) => state.user.currentUser)

  const [show, setShow] = useState(false)
  const [role, setrole] = useState(props.experience.role)
  const [company, setcompany] = useState(props.experience.company)
  const [startdate, setstartdate] = useState(props.experience.startDate)
  const [enddate, setenddate] = useState(props.experience.endDate)
  const [description, setdescription] = useState(props.experience.description)
  const [area, setarea] = useState(props.experience.area)

  const handleRole = (event) => {
    setrole(event.target.value)
    console.log(role)
  }

  const handleCompany = (event) => {
    setcompany(event.target.value)
    console.log(company)
  }

  const handleStartDate = (event) => {
    setstartdate(event.target.value)
    console.log(startdate)
  }

  const handleEndDate = (event) => {
    setenddate(event.target.value)
    console.log(enddate)
  }

  const handledescription = (event) => {
    setdescription(event.target.value)
    console.log(description)
  }

  const handlearea = (event) => {
    setarea(event.target.value)
    console.log(area)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const experience = {
      role: role,
      company: company,
      startDate: startdate,
      endDate: enddate,
      description: description,
      area: area,
    }

    console.log('We are editing users here')

    const options = {
      method: 'PUT',
      body: JSON.stringify(experience),
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs',
      },
    }
    const fetchURL = `https://striveschool-api.herokuapp.com/api/profile/${usersData._id}/experiences/${props.experience._id}`

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)
      if (response.ok) {
        console.log('Edit was successful')
        let usersData = await response.json()
        console.log(usersData)
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
      <Button id="editButton" onClick={handleShow}>
        <BsPencil size={20} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* * Indicates required */}
          <Form>
            <Form.Label>Role:</Form.Label>
            <Form.Control type="text" value={role} onChange={handleRole} />
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              value={props.experience.company}
              onChange={handleCompany}
            />
            <Form.Label>Start Date: </Form.Label>
            <Form.Control
              type="date"
              value={startdate}
              onChange={handleStartDate}
            />
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={enddate}
              onChange={handleEndDate}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={handledescription}
            />
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" value={area} onChange={handlearea} />
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button type="Submit" variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditExperienceModal
