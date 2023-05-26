import React, { useEffect, useState } from "react";
import CourseListCards from "./CourseListCards";
import { Button, Div, P} from "../../utils/StyledComponents/StyledComponents";
import Footer from "../Navbar/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { getCoursesFromDB } from "../../redux/actions";
// import Navbar from "../Navbar/Navbar";
// import { HiMenu } from "react-icons/hi" 
// import s from "./CoursesList.module.css"
export default function CourseList ({ path, handlerEditCourse, componentCourseListFlag, courses }) {
    // const dispatch = useDispatch()
    // const courses = useSelector((state) => state.courses)
    // const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
    //   dispatch(getCoursesFromDB()) 
    console.log("COURSE LISTS: courses", courses); 
    }, [courses])
    
    return (
        <Div flexDir="column">
            <CourseListCards path={path} handlerEditCourse={handlerEditCourse} courses={courses}/>
            <Footer/>
        </Div>
    )
}