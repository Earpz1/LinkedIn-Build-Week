import { Button, NavDropdown } from 'react-bootstrap'
import { HiHome, HiUserCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const TopNavProfile = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="d-flex justify-content-center">
        <HiUserCircle size={20} />
      </div>
      <NavDropdown title="Me" id="basic-nav-dropdown">
        <div className="dropdown-item">
          <div className="d-flex flex-column firstnavitem">
            <div className="d-flex mb-2">
              <div>
                <HiUserCircle size={48} />
              </div>
              <div>
                <p className="m-0">username</p>
                <p className="m-0">user position</p>
              </div>
            </div>
            <Button
              className="rounded-pill"
              onClick={() => {
                navigate('/Profile')
              }}
            >
              View Profile
            </Button>
          </div>
        </div>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </>
  )
}
export default TopNavProfile
