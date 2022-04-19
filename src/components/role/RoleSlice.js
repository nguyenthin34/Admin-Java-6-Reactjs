import { getAll } from "../../api/RoleApi";
import { add } from "../../api/RoleApi";




const initState = getAll();

const RoleReducer = (state = initState, action) => {

  switch (action.type) {
    case "role/add":
      add(action.payload);
      return [
        ...state, action.payload,
      ];
   
    default:
      return state;
  }
};

export default RoleReducer;
