import { GET_COURSES_FROM_DB, POST_USER } from "./actionTypes";
const initialState = {
  courses: [],
  user: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_FROM_DB:
      return {
        ...state,
        courses: action.payload,
      };
    case POST_USER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
