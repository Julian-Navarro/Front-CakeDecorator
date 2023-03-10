import React from "react";
import CourseListCard from "./CourseListCard";
import "./CourseListCards.css"

export default function CourseListCards({courses}){
    return (
        <div className="containerLists">
            {
            courses.map((c) => <CourseListCard key={c.id} description={c.description} id={c.id} img={c.img} price={c.price} title={c.title} type={c.type} category={c.category} videos={c.videos}/> )
            }

        </div>
    )
}