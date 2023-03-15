import React, { useEffect } from "react";
import CourseListCards from "./CourseListCards";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromDB } from "../../redux/actions";

export default function CourseLists ({ path }) {
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.courses)
    
    useEffect(()=>{
      dispatch(getCoursesFromDB())  
    }, [dispatch])
    
    return (
        <div>
            <h2>COURSE LIST</h2>
            <CourseListCards path={path} courses={courses}/>
        </div>
    )
}