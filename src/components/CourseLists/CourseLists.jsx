import React, { useEffect, useState } from "react";
import CourseListCards from "./CourseListCards";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromDB } from "../../redux/actions";
import FormCoursePostAndEdit from "../DashboardAdmin/SubComponents/Courses/FormCoursePostAndEdit";

export default function CourseLists ({ path }) {
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.courses)
    const [createCourseFlag, setCreateCourseFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false)
    const [courseToEdit, setCourseToEdit] = useState(false)
    const [componentFlag, setComponentFlag] = useState(false)
    function handlerSetComponentFlag () {
        if(componentFlag) {
            setComponentFlag(false)
        } else {
            setComponentFlag(true)
        }
    }

    function handlerSetEditFlag() {
        if(editFlag) {
            setEditFlag(false)
        } else {
            setEditFlag(true)
        }
    }

    function handlerEditCourse(e, course) {
        e.preventDefault();
        handlerSetEditFlag()
        console.log(editFlag);
        if(course !== undefined) {
            setCourseToEdit({...course})
            setCreateCourseFlag(false)
        } else {
            setCourseToEdit(false)
            setCreateCourseFlag(false)            
        }
    }

    function handlerSetCreateCourseFlag(e) {
        e.preventDefault();
        if(createCourseFlag) {
            setCreateCourseFlag(false)
        } else {
            setCreateCourseFlag(true)
            setCourseToEdit(false)
        }
    }
    useEffect(()=>{
        console.log("RENDERING: COURSE STATE: ", courseToEdit);
    },[courseToEdit, editFlag])


    useEffect(()=>{
      dispatch(getCoursesFromDB())  
    }, [componentFlag])
    
    return (
        <div>
            <h2>COURSE LIST</h2>
            {path==="adm" ? <button onClick={(e)=>{handlerSetCreateCourseFlag(e)}}>{createCourseFlag? "Cerrar Formulario":"Crear Nuevo Curso"}</button>:null}
            {
                courseToEdit !== false
                ? <FormCoursePostAndEdit handlerSetComponentFlag={handlerSetComponentFlag} update={true} course={courseToEdit} handlerEditCourse={handlerEditCourse}/>
                : null
            }
            {
                //! CASO HAY QUE CREAR UN CURSO Y NO EDITARLO
                createCourseFlag === true
                ? <FormCoursePostAndEdit handlerSetComponentFlag={handlerSetComponentFlag} />
                : null
            }

            <CourseListCards path={path} handlerEditCourse={handlerEditCourse} courses={courses}/>
        </div>
    )
}