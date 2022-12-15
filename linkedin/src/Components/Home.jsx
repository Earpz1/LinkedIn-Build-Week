import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers, fetchProfile, currentUser, fetchExperiences, fetchPostsList } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import HomePageLeft from "./HomePageLeft";
import CreateNewPost from "./CreateNewPost";
import HomePageRight from "./HomePageRight";
import NewsFeedItem from "./NewsFeedItem";
import { AiFillCaretDown } from "react-icons/ai";
import ProfileRight from "./ProfileRight";

const Home = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const currentUserData = useSelector((state) => state.user.currentUser);
  const usersLoaded = useSelector((state) => state.user.usersLoaded);
  const contact = useSelector((state) => state.user.contact);

  const postsList = useSelector((state) => state.posts.posts.postsList);

  //const profilePostsList = useSelector((state) => state.posts.posts.profilePosts.slice().reverse());

  const postsLoaded = useSelector((state) => state.posts.posts.postsLoaded);
  console.log("the posts are: ", postsList);
  //console.log("the profile posts are: ", profilePostsList);
  //console.log("the profile posts are: ", reverseProfilePostsList);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchUsers());
    dispatch(fetchPostsList());
    // dispatch(fetchExperiences(currentUserData._id))
  }, [usersLoaded]);

  return (
    <>
      {postsLoaded && (
        <Container>
          <Row className="mt-4">
            <Col lg={3} className="pr-0">
              <HomePageLeft />
            </Col>
            <Col lg={5} className="px-0">
              <Row className="d-flex flex-column align-items-left mb-3">
                <CreateNewPost className="main-feed-content px-0" />
                <div className="d-flex align-items-center">
                  <hr className="mt-3" />
                  <span>
                    Sort by: Top{" "}
                    <a href="#">
                      <AiFillCaretDown />
                    </a>
                  </span>
                </div>
                {postsLoaded &&
                  postsList[0].length > 0 &&
                  postsList[0]
                    .slice(postsList[0].length - 15)
                    .reverse()
                    .map((post) => <NewsFeedItem key={post._id} post={post} />)}
                {/* {postsLoaded && profilePostsList.map((post) => <NewsFeedItem key={post._id} post={post} />)} */}
              </Row>
            </Col>
            <Col lg={3} className="px-0">
              <ProfileRight />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Home;
