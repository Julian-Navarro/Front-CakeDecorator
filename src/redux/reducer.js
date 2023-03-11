<<<<<<< HEAD
import { GET_COURSES_FROM_DB } from "./actionTypes";
const initialState = {
  courses: [],
  user: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_FROM_DB:
=======
import { GET_LISTS_FROM_DB } from "./actionTypes";

const initialState = {
  user: {},
  courses: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS_FROM_DB:
>>>>>>> 647e6bb8ef3d1f6ea8b41f91e56c29a5d257ec4c
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
<<<<<<< HEAD
=======

export default rootReducer;
>>>>>>> 647e6bb8ef3d1f6ea8b41f91e56c29a5d257ec4c
