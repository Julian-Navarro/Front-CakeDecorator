import React, { useEffect, useState } from "react";
import CourseListCards from "./CourseListCards";
import { Button, Div, P} from "../../utils/StyledComponents/StyledComponents";

export default function CourseList ({ path, handlerEditCourse, componentCourseListFlag, courses }) {


    useEffect(()=>{
    //   dispatch(getCoursesFromDB()) 
    console.log("COURSE LISTS: courses", courses); 
    }, [courses])
    
    return (
        <Div flexDir="column">
            <CourseListCards path={path} handlerEditCourse={handlerEditCourse} courses={courses}/>
        </Div>
    )
}