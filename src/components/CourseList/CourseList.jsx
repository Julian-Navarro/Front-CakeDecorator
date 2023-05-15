import React, { useEffect, useState } from "react";
import CourseListCards from "./CourseListCards";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromDB } from "../../redux/actions";
import { IconButton } from "@chakra-ui/react"
import Navbar from "../Navbar/Navbar";
import { Button, Div, P} from "../../utils/StyledComponents/StyledComponents";
import { HiMenu } from "react-icons/hi" 
import s from "./CoursesList.module.css"
import Footer from "../Navbar/Footer";
export default function CourseLists ({ path, handlerEditCourse, componentCourseListFlag }) {
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.courses)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
      dispatch(getCoursesFromDB())  
    }, [componentCourseListFlag])
    
    return (
        <Div flexDir="column">
            <Navbar />
            <Div bg="#fff"alItems="flex-start">
                <div className={isOpen?s.divGradientOpen:s.divGradientClose}
                    pos="sticky"posTop="0px"posLeft="0px"overflow="hidden"bg="#333"hg="100vh"wd={isOpen?"14rem":"3.2rem"}>
                    <Div pos="absolute"zInd={"3"}posTop="0px"posLeft="2px"mt={"1rem"}jfCont="flex-start">
                        <IconButton bg="#252525" ml="0.2rem"height="2.4rem"_hover={{bg:"#dc4a61"}}boxShadow="2px 2px .2rem .05rem #333"borderRadius="50%"onClick={()=>setIsOpen(!isOpen)}>
                            <HiMenu fontSize="1.6rem"color="#eeee"/>
                        </IconButton>
                    </Div>

                    <Div flexDir="column"pos="relative"zInd="2"br="0 .5rem 0 0"hg="100%"wd="14rem"posLeft={isOpen?"0":"-14rem"}>
                        <P wd="100%" jfCont="flex-start">Cosas de adentro</P>
                        <P wd="100%" jfCont="flex-start">Cosas de adentro</P>
                        <P wd="100%" jfCont="flex-start">Cosas de adentro</P>
                        <P wd="100%" jfCont="flex-start">Cosas de adentro</P>
                    </Div>
                </div>
                <Div ml="1rem"mt="1rem">
                    <CourseListCards path={path} handlerEditCourse={handlerEditCourse} courses={courses}/>
                </Div>
            </Div>
            <Footer/>
        </Div>
    )
}