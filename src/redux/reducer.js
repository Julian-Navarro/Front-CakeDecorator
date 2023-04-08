import { GET_COURSES_FROM_DB, GET_USERS, GET_USER } from "./actionTypes";
const initialState = {
  courses: [],
  users: [],
  user: {},
  product: {},
  products: [],
  findProductUser: []
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
    case GET_USER:
      return{
        ...state,
        user: action.payload
      }
    case "GET_BY_NAME":
      return{
        ...state,
        findProductUser: action.payload
      }
    default:
      return {
        ...state,
      };
  }
}
