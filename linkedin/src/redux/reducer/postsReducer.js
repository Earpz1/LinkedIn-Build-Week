import { GET_CURRENT_POST, GET_POSTS_LIST } from "../actions";

const initialState = {
  posts: {
    postsList: [],
    currentPost: null,
  },
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_LIST:
      return {
        ...state,
        posts: {
          ...state.experience,
          postsList: [action.payload],
        },
      };

    case GET_CURRENT_POST:
      return {
        ...state,
        posts: {
          ...state.experience,
          currentPost: action.payload,
        },
      };

    default:
      return state;
  }
};

export default postsReducer;
