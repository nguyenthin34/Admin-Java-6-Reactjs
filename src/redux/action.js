
// export const addRole = (data) => {
//     return {
//         type: "role/add",
//         payload: data
//     }
// }

// const initialState = {
//   currentUser: {},
// };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "LOGIN_USER":
//       return { ...state, currentUser: action.payload };
//     default:
//       return state;
//   }
// }

// export const userPostFetch = (user) => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/api/v1/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         if (data.message) {
//         } else {
//           localStorage.setItem("token", data.jwt);
//           dispatch(loginUser(data.user));
//         }
//       });
//   };
// };

// const loginUser = (userObj) => ({
//   type: "LOGIN_USER",
//   payload: userObj,
// });


// export const userLoginFetch = (user) => {
//   return (dispatch) => {
//     return fetch("http://localhost:8080/api/auth/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         if (data.message) {
//         } else {
//           localStorage.setItem("token", data.jwt);
//           dispatch(loginUser(data.user));
//         }
//       });
//   };
// };
