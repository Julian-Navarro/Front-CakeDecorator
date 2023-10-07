import axios from "axios";

export const HOST = "http://localhost:3001";

export async function postCourses(obj) {
  try {
    const newCourse = await axios.post(`${HOST}/courses`, obj);
  } catch (error) {
    console.log(error);
    throw new Error("Error Posting Course");
  }
}
export async function updateCourse(obj) {
  try {
    const updatedCourse = await axios.put(`${HOST}/courses?id=${obj.id}`, obj);
  } catch (error) {
    console.log(error);
    throw new Error("Error Updating Course");
  }
}
export async function getCourse(id) {
  try {
    const course = await axios.get(`${HOST}/courses/id?id=${id}`);
    return course.data;
  } catch (error) {
    console.log(error);
  }
}
export async function postProduct(input) {
  try {
    const product = await axios.post(`${HOST}/products`, input);
    return product.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error posting product");
  }
}
export async function editProduct(input) {
  try {
    const product = await axios.put(`${HOST}/products`, input);
    return product.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error editing product");
  }
}
export async function getCategories() {
  try {
    const categories = await axios.get(`${HOST}/categories`);
    return categories.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error reading categories from database");
  }
}
export async function getBrands() {
  try {
    const brands = await axios.get(`${HOST}/brands`);
    return brands.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error reading brands from database");
  }
}
