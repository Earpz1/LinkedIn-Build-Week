export const USER_SELECTED = "USER_SELECTED";
export const USERS_LOADED = "USERS_LOADED";
export const CURRENT_USER = "CURRENT_USER";
export const GET_CONTACT = `GET_CONTACT`;

export const userSelectedAction = (users) => {
  return {
    type: USER_SELECTED,
    payload: users,
  };
};

export const usersLoaded = () => {
  return {
    type: "USERS_LOADED",
    payload: true,
  };
};

export const currentUser = (user) => {
  return {
    type: "CURRENT_USER",
    payload: user,
  };
};

// action used to set the value of the 'contact' property in the userReducer.js
// - through it we dynamically render the information of the contact, after click,
export const getContactAction = (contact) => {
  return {
    type: GET_CONTACT,
    payload: contact,
  };
};

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    console.log("We are fetching users here");
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs",
      },
    };
    const fetchURL = "https://striveschool-api.herokuapp.com/api/profile/";

    try {
      let response = await fetch(fetchURL, options);
      console.log(response);
      if (response.ok) {
        console.log("Fetch Successful");
        let usersData = await response.json();
        console.log(usersData);
        dispatch(userSelectedAction(usersData));
        dispatch(usersLoaded());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProfile = () => {
  return async (dispatch, getState) => {
    console.log("We are fetching the current user profile here");
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs",
      },
    };
    const fetchURL = "https://striveschool-api.herokuapp.com/api/profile/me";

    try {
      let response = await fetch(fetchURL, options);
      console.log(response);
      if (response.ok) {
        console.log("Fetch Successful");
        let usersData = await response.json();
        console.log(usersData);
        dispatch(currentUser(usersData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (user) => {
  return async (dispatch, getState) => {
    console.log("We are editing users here");
    const options = {
      method: "PUT",
      body: JSON.stringify({ user }),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs",
      },
    };
    const fetchURL = "https://striveschool-api.herokuapp.com/api/profile/";

    try {
      let response = await fetch(fetchURL, options);
      console.log(response);
      if (response.ok) {
        console.log("Edit was successful");
        let usersData = await response.json();
        console.log(usersData);
        dispatch(fetchProfile());
      }
    } catch (error) {
      console.log(error);
    }
  };
};
