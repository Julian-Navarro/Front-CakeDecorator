import React, { useEffect, useState } from "react";
import CourseList from "../../../CourseList/CourseList";
import FormCoursePostAndEdit from "./FormCoursePostAndEdit";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromDB } from '../../../../redux/actions'
export default function CoursesAdm ({ path }) {
    const [createCourseFlag, setCreateCourseFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false);
    const [courseToEdit, setCourseToEdit] = useState(false);
    const [componentCourseListFlag, setComponentCourseListFlag] = useState(false);


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




    function handlerSetComponentCourseListFlag () {
        setComponentCourseListFlag(!componentCourseListFlag)
    };
    function handlerSetCreateCourseFlag(e) {
        e.preventDefault();
        if(createCourseFlag) {
            setCreateCourseFlag(false)
        } else {
            setCreateCourseFlag(true)
            setCourseToEdit(false)
        }
    };
     function handlerEditCourse(e, course) {
        e.preventDefault();
        handlerSetEditFlag()
        if(course !== undefined) {
            setCourseToEdit({...course})
            setCreateCourseFlag(false)
            window.scroll(0, 400)
        } else {
            setCourseToEdit(false)
            setCreateCourseFlag(false)            
        }
    };
    function handlerSetEditFlag() {
        if(editFlag) {
            setEditFlag(false)
        } else {
            setEditFlag(true)
        }
    };   

useEffect(()=>{
    console.log("RENDERING: COURSE STATE: ", courseToEdit);
},[courseToEdit, editFlag, componentCourseListFlag])
    return (
        <div>
          <h1>COURSES PADRE</h1>
            {
            path==="adm" 
            ? <button onClick={(e)=>{handlerSetCreateCourseFlag(e)}}>{createCourseFlag? "Cerrar Formulario":"Crear Nuevo Curso"}</button>
            :null
            }
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
          <CourseList 
            componentCourseListFlag={componentCourseListFlag}
            courses={courses}
            path="adm" 
            handlerEditCourse={handlerEditCourse}/>
        </div>

    )
}