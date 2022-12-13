import ContactUser from "./ContactUser";
import ProfileRight from "./ProfileRight";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const contact = useSelector((state) => state.user.contact);
  return (
    <>
      <Container className="mt-3">
        <div className=" d-flex justify-content-between">
          <div>
            <ContactUser />
          </div>
          <Col>
            <ProfileRight />
          </Col>
        </div>
      </Container>
    </>
  );
};
export default Contact;
