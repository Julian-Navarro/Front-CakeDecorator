import React, { useEffect, useState } from "react";
import CourseListCards from "./CourseListCards";
import { Div, P } from "../../utils/StyledComponents/StyledComponents";
import FilterCourses from "./FiltersCourses";
import Donuts from "../../utils/IMAGES/DONUTS.png"
import logo from "../../utils/IMAGES/Logo.png"
import s from "./CoursesList.module.css"
export default function CourseList ({ path, handlerEditCourse, componentCourseListFlag, allCourses, courses, setCourses, handlerFilterValue, categoryFilter, typeFilter}) {
    useEffect(()=>{
      // console.log("COURSELIST! \n ");
    }, [courses])
    
    return (
        <Div flexDir="column"wd="100%">
          <Div hg="41rem"mt="5rem"pos="relative"zInd="1"bg=""display={path==="adm"?"none":"flex"}wd="100%">
            <Div wd="40rem"pos="absolute"posLeft="-7rem"zInd="1">
              <img src={Donuts} alt="" className={s.donuts}/>
            </Div>

            <Div flexDir="column"zInd="2"
              jfCont="flex-start"hg="100%"alItems="flex-end">

              <Div flexDir="column"wd="700px"bg=""
                className={s.contaninerTextAndLogo}>
              <img src={logo} alt=""className={s.logo} />
              <Div bg="lightskyblue"flexDir="column"br="0"
                clPath="0% 0%, 98% 0%, 100% 100%, 3% 100%"
                className={s.divTexts}
                >
              <P bg=""fSize="1.8rem"fnFamily="Shrikhand"
                wd="700px"textSh="#333"color="#fff"className={s.title}
                >Estos son nuestros cursos, elegí el que más te guste!</P>
              <P bg=""wd="600px"fSize="1.3rem"fWeight="bold"
                textSh="#333"color="#fff"className={s.text}>
                En todos nuestros cursos o seminarios presenciales te 
                prestamos las herramientas y el delantal que necesitas para realizar tus trabajos!
              {"\n"}Y las tortas o trabajos que hagas te los llevas a tu casa!
              </P>
              </Div>
              </Div>
            </Div>

          </Div>

          <FilterCourses courses={courses}allCourses={allCourses}
            setCourses={setCourses}handlerFilterValue={handlerFilterValue}
            categoryFilter={categoryFilter}typeFilter={typeFilter}/>
          <CourseListCards path={path} handlerEditCourse={handlerEditCourse} 
            courses={courses}allCourses={allCourses}/>
        </Div>
    )
}