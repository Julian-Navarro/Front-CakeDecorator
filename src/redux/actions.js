import axios from "axios";
import { HOST } from "../utils";
import { GET_COURSES_FROM_DB, GET_USERS } from "./actionTypes";

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
