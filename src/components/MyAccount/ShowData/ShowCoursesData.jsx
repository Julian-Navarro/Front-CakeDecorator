import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import CoursesCards from "../Cards/Courses/CoursesCards";

export default function ShowCoursesData() {
  const [allMyCourses, setAllMyCourses] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));

  // console.log("USER", userInfo.id);
  // console.log("ALL COURSES", allMyCourses);

  async function getMyCourses() {
    const response = await axios.get(
      `${HOST}/courses/getUserCourses?id=${userInfo.id}`
    );
    setAllMyCourses(response.data);
  }

  useEffect(() => {
    console.log("ME RENDERIZO EN SHOW DATA COURSE");
    getMyCourses();
  }, []);

  useEffect(()=>{
    if(allMyCourses.length> 0){
      console.log("ME RENDERIZO EN SHOW CON IF")
    }
  },[allMyCourses])

  return (
    <div>
      <h1>Explora tus cursos</h1>
      {allMyCourses.length > 0 ? (
        <div>
          <CoursesCards allMyCourses={allMyCourses} />
        </div>
      ) : (
        "Sin titulos"
      )}
    </div>
  );
}
