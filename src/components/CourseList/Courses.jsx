import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { getCoursesFromDB } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { HiMenu } from "react-icons/hi" 
import { Div, P } from "../../utils/StyledComponents/StyledComponents";
import CourseList from "./CourseList";
import s from "./CoursesList.module.css";

export default function Courses ({ path, componentCourseListFlag }) {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const allCourses = useSelector((state)=>state.courses)
    const [courses, setCourses] = useState([])

    function cb(){
        setCourses(allCourses)
    }

    useEffect(()=>{
        dispatch(getCoursesFromDB())
        cb();
        console.log("COURSES: courses: ", courses);
    }, [componentCourseListFlag])

    useEffect(()=>{
        cb();
        console.log("2 - US EFF, courses: ", courses);
    },[courses, allCourses]) 
return (
    <Div flexDir="column"bg="#fff"br="0" >
      <Div alItems="flex-start">
        <CourseList courses={courses}path={path}/>
      </Div>
    </Div>
    )
} 