import { GET_LISTS_FROM_DB } from "./actionTypes";

const initialState = {
  user: {},
  courses: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS_FROM_DB:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
