import RoleReducer from "../components/role/RoleSlice";



import { combineReducers } from "redux";
// const rootReducer = (state = {}, action) => {
//   return {
//     role: RoleReducer(state, action)
//   }
// }

const rootReducer = combineReducers({
    role: RoleReducer
});
export default rootReducer;