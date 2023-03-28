import { GET_COURSES_FROM_DB, GET_USERS } from "./actionTypes";
const initialState = {
  courses: [],
  users: [],
  user: {},
  product: {},
  products: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_FROM_DB:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
