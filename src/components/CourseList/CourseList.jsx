import React, { useEffect, useState } from "react";
import CourseListCards from "./CourseListCards";
import { Div } from "../../utils/StyledComponents/StyledComponents";
import FilterCourses from "./FiltersCourses";

export default function CourseList ({ path, handlerEditCourse, componentCourseListFlag, allCourses, courses, setCourses, handlerFilterValue, categoryFilter, typeFilter}) {
    useEffect(()=>{
      // console.log("COURSELIST! \n ");
    }, [courses])
    
    return (
        <Div flexDir="column">
          <FilterCourses courses={courses}allCourses={allCourses}
            setCourses={setCourses}handlerFilterValue={handlerFilterValue}
            categoryFilter={categoryFilter}typeFilter={typeFilter}/>
          <CourseListCards path={path} handlerEditCourse={handlerEditCourse} 
            courses={courses}allCourses={allCourses}/>
        </Div>
    )
}