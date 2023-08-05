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
  function handlerFilterValue(e) {
    e.preventDefault()
    console.log(e.target.name, e.target.value);
    let newCourses = allCourses.filter((course) => {
      if(e.target.name == "category") {
        if(course.category === e.target.value) {
          return true
        } else {
          return false
        }
      } else {
        if(course.type === e.target.value) {
          return true
        } else {
          return false
        }
      }
      })
    console.log("__NEW COURSES",newCourses);
    setCourses(newCourses)
  }
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
    },[allCourses]) 
return (
    <Div flexDir="column"bg="#fff"br="0">
      <CourseList handlerFilterValue={handlerFilterValue}
        courses={courses}path={path}setCourses={setCourses}/>
    </Div>
    )
} 