import { USER_SELECTED, USERS_LOADED } from '../actions'

const initialState = {
  users: [],
  usersLoaded: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SELECTED:
      return {
        ...state,
        users: [...state.users, action.payload],
      }

    case USERS_LOADED:
      return {
        ...state,
        usersLoaded: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
