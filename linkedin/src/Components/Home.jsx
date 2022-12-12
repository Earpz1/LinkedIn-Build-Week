import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, fetchProfile } from "../redux/actions";
import HomeRight from "./HomeRight";

const Home = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const usersLoaded = useSelector((state) => state.user.usersLoaded);

  useEffect(() => {
    dispatch(fetchProfile());
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
