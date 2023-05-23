import React from "react";
import CourseListCard from "./CourseListCard";
import { Div } from "../../utils/StyledComponents/StyledComponents";
import { useEffect } from "react";
export default function CourseListCards({courses, handlerEditCourse, path}){
    useEffect(()=>{
        console.log("COURSES: ",courses);
    },[courses])
    return (
        <Div flWr="wrap"mb="2rem">
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
                    videos={c.videos}/> )
                :"No se encontraron cursos"
            }
        </Div>
    )
}