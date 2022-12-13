import { Badge } from "react-bootstrap";
import { RxDividerVertical } from "react-icons/rx";
import EditModal from "./EditModal";
import { useSelector } from "react-redux";

const ExperienceItem = ({ data }) => {
  const me = useSelector((state) => state.user.currentUser);
  const meId = me._id;
  return (
    <div id="profileContainer">
      <div id="lowerProfileCardExperience">
        {meId !== data._id ? (
          <>
            <EditModal />
            <p>
              <small>Role:</small>
              <Badge variant="light">{data.role}</Badge> <RxDividerVertical /> <small>Company:</small>
              <Badge variant="light">{data.company}</Badge>
            </p>
            <p>
              <small>Date:</small>
              <Badge variant="light">{data.startDate}</Badge> - <Badge variant="light">{data.endDate}</Badge>
            </p>
            <p>
              <Badge variant="dark">{data.description}</Badge>
            </p>
          </>
        ) : (
          <>
            <p>
              <small>Role:</small>
              <Badge variant="light">{data.role}</Badge> <RxDividerVertical /> <small>Company:</small>
              <Badge variant="light">{data.company}</Badge>
            </p>
            <p>
              <small>Date:</small>
              <Badge variant="light">{data.startDate}</Badge> - <Badge variant="light">{data.endDate}</Badge>
            </p>
            <p>
              <Badge variant="dark">{data.description}</Badge>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default ExperienceItem;
