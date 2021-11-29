//Make calls to backend API for users

import BASE_URL from "../vars/backend.js";

//make a user - send POST request
const createUser = (userData) => {
  console.log("creating user: ", JSON.stringify(userData));
  fetch(BASE_URL + "/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      return response.data;
      console.log("successful creating of user: ", response.data);
    })
    .catch((e) => {
      console.log("error creating user: ", e);
    });
};
//get a user details - GET request

const signInAttempt = async (loginDetails) => {
  // console.log("logging in: ", JSON.stringify(loginDetails));
  return fetch(BASE_URL + "/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  })
    .then((response) => {
      return response.json();
      console.log("successful login: ", JSON.stringify(response.id));
    })
    .catch((e) => {
      return null;
    })
    .then((responseData) => {
      if (responseData) {
        // console.log("successful login: ", JSON.stringify(responseData));
        return responseData;
        console.log("successful login: ", JSON.stringify(responseData));
      } else {
        return null;
        console.log("unsuccessful");
      }
    })
    .catch((e) => {
      return null;
      console.log("unsuccessful");
      console.log("error logging in: ", e);
    });
};

const getContactInfo = async (userId) => {
  return fetch(BASE_URL + "/users/" + userId + "/contact")
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

const saveContactInfo = (userId, data) => {
  console.log("saving contact: ", userId, JSON.stringify(data));
  let copy = data;
  copy.userId = userId;
  fetch(BASE_URL + "/contacts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(copy),
  })
    .then((response) => {
      return response.data;
      console.log("successful creating of user: ", response.data);
    })
    .catch((e) => {
      console.log("error creating user: ", e);
    });
};

const UserService = {
  createUser,
  signInAttempt,
  getContactInfo,
  saveContactInfo,
};

export default UserService;
