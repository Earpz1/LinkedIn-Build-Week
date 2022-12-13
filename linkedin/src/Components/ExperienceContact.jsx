import { Button } from "react-bootstrap";
import { EditModal } from "./EditModal";
import { useSelector } from "react-redux";
import ExperienceContactItem from "./ExperienceContactItem";
const ExperienceContact = () => {
  const usersData = useSelector((state) => state.user.currentUser);
  const experiences = useSelector((state) => state.user.contactExperiences);
  console.log("the current experience is:", experiences);
  const usersLoaded = useSelector((state) => state.user.usersLoaded);
  return (
    <>
      {/* <div id="profileContainer">
        <div id="lowerProfileCard"> */}
      {/* <EditModal /> */}

      <ul id="experienceList">
        {usersData &&
          experiences[0].map((exp) => (
            <li key={exp._id} className="formListItems line-clamp">
              <ExperienceContactItem data={exp} />
            </li>
          ))}
      </ul>
      {/* </div>
      </div> */}
    </>
  );
};
export default ExperienceContact;
