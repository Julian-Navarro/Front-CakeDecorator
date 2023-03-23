import axios from "axios";
import { HOST } from "../utils";
import { GET_COURSES_FROM_DB, GET_USERS, POST_PRODUCT} from "./actionTypes";

export function getCoursesFromDB() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${HOST}/courses`);
      dispatch({
        type: GET_COURSES_FROM_DB,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${HOST}/users`);
      dispatch({
        type: GET_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postProduct (payload) {
  return async function (dispatch) {
      try {
          const info3 = await axios.post(`${HOST}/products`, payload);
          return dispatch({
              type: POST_PRODUCT,
          })
      } catch (error) {
          console.log(error)
      }
  }
}