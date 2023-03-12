import axios from "axios";
import { HOST } from "../utils";
import { GET_COURSES_FROM_DB, POST_USER } from "./actionTypes";

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

// export function postUser(input) {
//   return async function (dispatch) {
//     try {
//       input.role = "user";
//       console.log("ACTION INPUT: ",input);
//       dispatch({
//         type: POST_USER,
//         payload: input
//       })

//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
