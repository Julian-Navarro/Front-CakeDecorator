import React from "react";
import CourseListCard from "./CourseListCard";
import { Div, P } from "../../utils/StyledComponents/StyledComponents";
import { useEffect } from "react";
export default function CourseListCards({ allCourses, courses, handlerEditCourse, path}){
    useEffect(()=>{
        // console.log("COURSES: ",courses);
    },[courses])
    return (
        <Div flWr="wrap"mb="2rem"mt="2rem"wd="100%">
            { 
                courses.length>0
                ? courses.map((c) => <CourseListCard 
                    key={c.id} 
                    handlerEditCourse={handlerEditCourse} 
                    path={path} 
                    course={c} 
                    description={c.description} 
                    id={c.id} 
                    img={c.img} 
                    price={c.price} 
                    title={c.title} 
                    type={c.type} 
                    category={c.category} 
                    videos={c.videos}
                    duration={c.duration}
                    startDate={c.startDate}
                    limit={c.limit}
                    /> )
                : <P fSize="2rem">No se encontraron cursos</P>
            }
        </Div>
    )
}