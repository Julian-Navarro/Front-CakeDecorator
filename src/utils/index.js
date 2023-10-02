import axios from "axios";

export const HOST = "http://localhost:3001";

export async function postCourses(obj) {
  try {
    let newCourse = await axios.post(`${HOST}/courses`, obj);
  } catch (error) {
    console.log(error);
    throw new Error("Error Posting Course");
  }
}
export async function updateCourse(obj) {
  try {
    let updatedCourse = await axios.put(`${HOST}/courses?id=${obj.id}`, obj);
  } catch (error) {
    console.log(error);
    throw new Error("Error Updating Course");
  }
}
export async function getCourse(id) {
  let course = await axios.get(`${HOST}/courses/id?id=${id}`);
  return course.data;
}
