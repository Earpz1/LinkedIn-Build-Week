import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, fetchProfile, currentUser, fetchExperiences } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const currentUserData = useSelector((state) => state.user.currentUser);
  const usersLoaded = useSelector((state) => state.user.usersLoaded);
  const contact = useSelector((state) => state.user.contact);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchExperiences(currentUserData._id));
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {usersLoaded &&
          usersData[0].map((user) => (
            <li key={user._id}>
              {user.name} {user.surname}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
