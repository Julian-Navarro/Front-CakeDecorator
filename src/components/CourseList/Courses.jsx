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
  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const allCourses = useSelector((state)=>state.courses)
  const [courses, setCourses] = useState([]);

  function handlerFilterValue(e) {
    e.preventDefault()
    if(e.target.name === "category") {
      setCategoryFilter(e.target.value)
    }
    if(e.target.name === "type") {
      setTypeFilter(e.target.value)
    }
  }


  function handlerSetCourses(){
    if(!categoryFilter && !typeFilter) {
      return setCourses(allCourses)
    }
    if(categoryFilter && typeFilter) {
      return handlerTwoFilters()
    }
    if(categoryFilter) {
      return handlerCategoryFilter()
    }
    if(typeFilter) {
      return handlerTypeFilter()
    }
  }
  function handlerTwoFilters(){
    let newCourses = allCourses.filter((course)=>{
      if(categoryFilter == course.category && typeFilter == course.type) {
        return true
      } else {
        return false
      }
    })
    console.log("COMBINADOS: ", newCourses);
    setCourses(newCourses)
  }
  function handlerCategoryFilter(){
    let newCourses = allCourses.filter((course)=>{
      if(categoryFilter == course.category) {
        return true
      } else {
        return false
      }
    })
    console.log("CATEGORY: ", newCourses);
    setCourses(newCourses)
  }
  function handlerTypeFilter(){
    let newCourses = allCourses.filter((course)=>{
      if(typeFilter == course.type) {
        return true
      } else {
        return false
      }
    })
    console.log("CATEGORY: ", newCourses);
    setCourses(newCourses)
  }

  useEffect(()=>{
    dispatch(getCoursesFromDB())
    console.log("1 - COURSES.jsx: ", courses);
  }, [componentCourseListFlag])

  useEffect(()=>{
    handlerSetCourses();
    console.log("2 - COURSES.jsx: ", courses);
  },[allCourses, categoryFilter, typeFilter]) 
return (
    <Div flexDir="column"bg="#fff"br="0">
      <CourseList handlerFilterValue={handlerFilterValue}
        courses={courses}path={path}setCourses={setCourses}
        categoryFilter={categoryFilter}typeFilter={typeFilter}/>
    </Div>
    )
} 