import { GET_LISTS_FROM_DB } from "./actionTypes";
import axios from "axios";
import { HOST } from "../utils";

export function getCoursesFromDB() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${HOST}courses`);
      dispatch({
        type: GET_LISTS_FROM_DB,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
