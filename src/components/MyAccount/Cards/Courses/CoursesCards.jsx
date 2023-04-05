import React, { useEffect } from "react";
import CourseCard from "../../Card/Course/CourseCard";
import { Link } from "react-router-dom";

export default function CoursesCards({ allMyCourses }) {
  useEffect(() => {
    console.log("ME RENDERIZO EN COURSES CARDS");
  }, [allMyCourses]);
  return (
    <div>
      <div>
        {allMyCourses ? (
          allMyCourses.map((course) => (
            <div>
              <div>
                <CourseCard
                  title={course.title}
                  type={course.type}
                  category={course.category}
                  img={course.img}
                  videos={course.videos}
                />
              <div>
                <button>Reproducir</button>
                <Link
                  to={`/myAccount/courseDetail/${course.user_course.courseId}`}
                >
                  <button>Más info</button>
                </Link>
              </div>
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
