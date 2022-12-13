import { Image } from "react-bootstrap";
const FormSearchUser = ({ user }) => {
  return (
    <div>
      <Image src={user.image} fluid id="rightSideUserImg" />
      <span className="ml-3">
        {user.name} {user.surname}
      </span>
    </div>
  );
};
export default FormSearchUser;
