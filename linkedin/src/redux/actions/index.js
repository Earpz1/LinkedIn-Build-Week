import { bindActionCreators } from "@reduxjs/toolkit";

export const USER_SELECTED = "USER_SELECTED";
export const USERS_LOADED = "USERS_LOADED";
export const CURRENT_USER = "CURRENT_USER";
export const GET_CONTACT = `GET_CONTACT`;
export const SELECTED_EXPERIENCE = "SELECTED_EXPERIENCE";
export const GET_CONTACT_EXPERIENCES = "GET_CONTACT_EXPERIENCES";
export const USER_NOW = "USER_NOW";

export const userNowAction = (user) => {
  return {
    type: USER_NOW,
    payload: user,
  };
};

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

export const getContactExperiencesAction = (contactExperiences) => {
  return {
    type: GET_CONTACT_EXPERIENCES,
    payload: contactExperiences,
  };
};

export const selectedExperienceAction = (experience) => {
  return {
    type: "SELECTED_EXPERIENCE",
    payload: experience,
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

export const fetchExperiences = (userID) => {
  return async (dispatch, getState) => {
    console.log("We are fetching the users experiences here");
    console.log(userID);
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs",
      },
    };
    const fetchURL = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`;

    try {
      let response = await fetch(fetchURL, options);
      console.log(response);
      if (response.ok) {
        console.log("Fetch Successful");
        let usersExperience = await response.json();
        console.log(usersExperience);
        dispatch(selectedExperienceAction(usersExperience));
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

export const getContactExperiences = (contactId) => {
  return async (dispatch, getState) => {
    console.log("getting all the contact's experiences");
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs",
      },
    };
    const fetchURL = `https://striveschool-api.herokuapp.com/api/profile/${contactId}/experiences`;

    try {
      const response = await fetch(fetchURL, options);
      if (response.ok) {
        console.log("the response for the contact's experiences is:", response);
        let experiences = await response.json();
        console.log("the contact's experiences are:", experiences);
        dispatch(getContactExperiencesAction(experiences));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
// export const getContactExperiences = () => {
//   return async (dispatch, getState) => {
//     console.log("getting all the contact's experiences");
//     const options = {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs",
//       },
//     };
//     const fetchURL = `https://striveschool-api.herokuapp.com/api/profile/5fc4af0bb708c200175de88e/experiences`;

//     try {
//       const response = await fetch(fetchURL, options);
//       if (response.ok) {
//         console.log("the response for the contact's experiences is:", response);
//         let experiences = await response.json();
//         console.log("the contact's experiences are:", experiences);
//         dispatch(getContactExperiencesAction(experiences));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
