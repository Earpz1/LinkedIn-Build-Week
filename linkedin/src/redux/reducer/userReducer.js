import {
  USER_SELECTED,
  USERS_LOADED,
  CURRENT_USER,
  // EDITED_CURRENT_USER,
} from '../actions'

const initialState = {
  users: [],
  currentUser: null,
  usersLoaded: false,
  editedUser: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SELECTED:
      return {
        ...state,
        users: [action.payload],
      }

    case USERS_LOADED:
      return {
        ...state,
        usersLoaded: action.payload,
      }

    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
