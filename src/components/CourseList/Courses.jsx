import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { getCoursesFromDB } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { HiMenu } from "react-icons/hi" 
import { Div, P } from "../../utils/StyledComponents/StyledComponents";
import CourseList from "./CourseList";
import s from "./CoursesList.module.css";
import Navbar from "../Navbar/Navbar";

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
    <Div flexDir="column" >
        <Navbar/>
        <Div alItems="flex-start">
          <div className={isOpen?s.divGradientOpen:s.divGradientClose}
              pos="sticky"posTop="0px"posLeft="0px"overflow="hidden"bg="#333"hg="100vh"wd={isOpen?"14rem":"3.2rem"}>
              <Div pos="relative"zInd={"3"}posTop="0px"posLeft="2px"mt={"1rem"}jfCont="flex-start">
                  <IconButton bg="#252525" ml="0.2rem"height="2.4rem"_hover={{bg:"#dc4a61"}}boxShadow="2px 2px .2rem .05rem #333"borderRadius="50%"onClick={()=>setIsOpen(!isOpen)}>
                      <HiMenu fontSize="1.6rem"color="#eeee"/>
                  </IconButton>
              </Div>

              <Div flexDir="column"zInd="2"br="0 .5rem 0 0"hg="100%"wd="14rem"
                  pos="relative"posLeft={isOpen?"0":"-14rem"}>
                <P wd="100%" jfCont="flex-start">Cosas de adentro</P>
                <P wd="100%" jfCont="flex-start">Cosas de adentro</P>
                <P wd="100%" jfCont="flex-start">Cosas de adentro</P>
                <P wd="100%" jfCont="flex-start">Cosas de adentro</P>
              </Div>
          </div>
        <CourseList courses={courses}path={path}/>
        </Div>
    </Div>
    )
} 