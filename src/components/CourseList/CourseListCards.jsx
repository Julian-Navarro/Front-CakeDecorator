import React from "react";
import CourseListCard from "./CourseListCard";
import { Div } from "../../utils/StyledComponents/StyledComponents";
export default function CourseListCards({courses, handlerEditCourse, path}){
    return (
        <Div flWr="wrap"mb="2rem">
            {
            courses.map((c) => <CourseListCard 
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
            }
        </Div>
    )
}