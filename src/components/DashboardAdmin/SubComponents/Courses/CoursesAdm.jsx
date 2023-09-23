import React, { useEffect, useState } from "react";
import CourseList from "../../../CourseList/CourseList";
import FormCoursePostAndEdit from "./FormCoursePostAndEdit";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromDB } from '../../../../redux/actions'
import { Div, P, Button } from "../../../../utils/StyledComponents/StyledComponents";
import s from "./CoursesAdm.module.css"
import { useNavigate } from "react-router-dom";
export default function CoursesAdm ({ path }) {
    // const [createCourseFlag, setCreateCourseFlag] = useState(false);
    // const [editFlag, setEditFlag] = useState(false);
    // const [courseToEdit, setCourseToEdit] = useState(false);
    const [componentCourseListFlag, setComponentCourseListFlag] = useState(false);
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const allCourses = useSelector((state)=>state.courses)
    const [courses, setCourses] = useState([])

    function cb(){
        setCourses(allCourses)
    }
    function handlerSetComponentCourseListFlag () {
        setComponentCourseListFlag(!componentCourseListFlag)
    };
    // function handlerSetCreateCourseFlag(e) {
    //     e.preventDefault();
    //     if(createCourseFlag) {
    //         setCreateCourseFlag(false)
    //     } else {
    //         setCreateCourseFlag(true)
    //         setCourseToEdit(false)
    //     }
    // };
    //  function handlerEditCourse(e, course) {
    //     e.preventDefault();
    //     handlerSetEditFlag()
    //     if(course !== undefined) {
    //         setCourseToEdit({...course})
    //         setCreateCourseFlag(false)
    //         window.scroll(0, 400)
    //     } else {
    //         setCourseToEdit(false)
    //         setCreateCourseFlag(false)            
    //     }
    // };
    // function handlerSetEditFlag() {
    //     setEditFlag(!editFlag)
    // };   

    useEffect(()=>{
        dispatch(getCoursesFromDB())
        cb();
        // console.log("COURSES: courses: ", courses);
    }, [componentCourseListFlag])
    useEffect(()=>{
        cb();
        // console.log("2 - US EFF, courses: ", courses);
    }, [courses, allCourses]) 

    useEffect(()=>{
        // console.log("RENDERING: COURSE STATE: ", courseToEdit);
    }, [
        // courseToEdit, editFlag, 
        componentCourseListFlag])
    return (
        <div>
          {/* <button onClick={(e)=>{handlerSetCreateCourseFlag(e)}}>
              { createCourseFlag
              ? "Cerrar Formulario"
              : "Crear Nuevo Curso" }
          </button> */}
          <button className={s.btnCreate}onClick={()=>navigate("/createCourse")}>Crear Curso o Seminario</button>
          {/* <Div>

            {
                courseToEdit !== false
                ? <FormCoursePostAndEdit
                    handlerSetComponentCourseListFlag={handlerSetComponentCourseListFlag}
                    update={true}
                    course={courseToEdit}
                    handlerEditCourse={handlerEditCourse}/>
                : null
            }
            {
                //! CASO HAY QUE CREAR UN CURSO Y NO EDITARLO
                createCourseFlag === true
                ? <FormCoursePostAndEdit 
                    handlerSetComponentCourseListFlag={handlerSetComponentCourseListFlag} />
                : null
            }
          </Div> */}
          <CourseList 
            componentCourseListFlag={componentCourseListFlag}
            courses={courses}
            path="adm" 
            // handlerEditCourse={handlerEditCourse}
            />
        </div>

    )
}