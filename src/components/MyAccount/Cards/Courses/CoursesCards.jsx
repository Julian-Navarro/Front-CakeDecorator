import React from "react";
import CourseCard from "../../Card/Course/CourseCard";
import { Link } from "react-router-dom";
import style from "./CoursesCards.module.css";

export default function CoursesCards({ allMyCourses }) {
  // console.log("ALL????", allMyCourses)
  return (
    <div>
      <h1>Tus cursos - (HIJO)</h1>
      <div>
        {allMyCourses ? (
          allMyCourses.map((course, idx) => (
            <div className={style.cardContainer} key={idx}>
              <CourseCard
                title={course.title}
                type={course.type}
                category={course.category}
                img={course.img}
                videos={course.videos}
              />
              <button>Reproducir</button>
              <Link
                to={`/myAccount/courseDetail/${course.user_course.courseId}`}
              >
                <button>Más info</button>
              </Link>
              <div>
                <br />
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No hay cursos</p>
          </div>
        )}
      </div>
    </div>
  );
}
