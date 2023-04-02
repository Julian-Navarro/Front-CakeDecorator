import React, { useEffect, useState } from "react";
import CourseListCards from "./CourseListCards";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromDB } from "../../redux/actions";
import Navbar from "../Navbar/Navbar";

export default function CourseLists ({ path, handlerEditCourse, componentCourseListFlag }) {
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.courses)



    useEffect(()=>{
      dispatch(getCoursesFromDB())  
    }, [componentCourseListFlag])
    
    return (
        <div>
            
            {
                path === false
                ? <Navbar />
                : null
            }

            <h2>COURSE LIST</h2>
            <CourseListCards path={path} handlerEditCourse={handlerEditCourse} courses={courses}/>
        </div>
    )
}