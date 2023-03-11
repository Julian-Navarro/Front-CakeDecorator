import axios from "axios";
import { HOST } from "../utils";
import { GET_COURSES_FROM_DB } from "./actionTypes";

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
