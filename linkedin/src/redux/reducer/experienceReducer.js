import { SELECTED_EXPERIENCE } from "../actions";

const initialState = {
  experience: {
    content: [],
  },
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_EXPERIENCE:
      return {
        ...state,
        experience: {
          ...state.experience,
          content: [action.payload],
        },
      };

    default:
      return state;
  }
};

export default experienceReducer;
