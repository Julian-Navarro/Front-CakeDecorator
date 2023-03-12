import { GET_COURSES_FROM_DB } from "./actionTypes";
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
    default:
      return {
        ...state,
      };
  }
}
