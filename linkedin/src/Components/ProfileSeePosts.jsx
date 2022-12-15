import { Button, Collapse } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import NewsFeedItemProfile from "./NewsFeedItemProfile";

const ProfileSeePosts = () => {
  const [seePosts, setSeePosts] = useState(false);
  //const usersData = useSelector((state) => state.user.currentUser);
  const profilePostsList = useSelector((state) => state.posts.posts.profilePosts.slice().reverse());

  const postsLoaded = useSelector((state) => state.posts.posts.postsLoaded);

  return (
    <>
      <Button
        onClick={() => setSeePosts(!seePosts)}
        aria-controls="example-collapse-text"
        aria-expanded={seePosts}
        variant="outline-dark"
        className="my-3"
      >
        See all posts
      </Button>
      <Collapse in={seePosts}>
        <div id="example-collapse-text">
          {postsLoaded &&
            profilePostsList.map((post) => (
              <li key={post._id} className="formListItems line-clamp">
                <NewsFeedItemProfile post={post} />
              </li>
            ))}
        </div>
      </Collapse>
    </>
  );
};
export default ProfileSeePosts;
