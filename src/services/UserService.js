//Make calls to backend API for users

const BASE_URL = "https://renae.kosir.cloud";

//make a user - send POST request
const createUser = (userData) => {
  console.log("creating user: ", userData);
  fetch(BASE_URL + "/users", {
    mode: "no-cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      APP_SECRET: "ZgJo1jQVgreb+yAmwjo+nw==",
      DB_PWD: "KWQthaDGpkJYLCAg",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      console.log("successful creating of user: ", response.data);
    })
    .catch((e) => {
      console.log("error creating user: ", e);
    });
};
//get a user details - GET request

const UserService = {
  createUser,
};

export default UserService;
