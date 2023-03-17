import React, { useEffect, useState } from "react";
import CourseListCards from "./CourseListCards";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromDB } from "../../redux/actions";
import FormCoursePostAndEdit from "../DashboardAdmin/SubComponents/Courses/FormCoursePostAndEdit";

export default function CourseLists ({ path }) {
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.courses)
    //! *****************************************
    const [createCourseFlag, setCreateCourseFlag] = useState(false);

    const [editFlag, setEditFlag] = useState(false)
    const [courseToEdit, setCourseToEdit] = useState(false)
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
        setCourseToEdit({...course})
        setCreateCourseFlag(false)
        console.log("COURSE TO EDIT: ", courseToEdit);
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
    }, [dispatch])
    
    return (
        <div>
            <h2>COURSE LIST</h2>
            {path==="adm" ? <button onClick={(e)=>{handlerSetCreateCourseFlag(e)}}>{createCourseFlag? "Cerrar Formulario":"Crear Nuevo Curso"}</button>:null}
            {
                courseToEdit !== false
                ? <FormCoursePostAndEdit update={true} course={courseToEdit}/>
                : null
            }
            {
                //! CASO HAY QUE CREAR UN CURSO Y NO EDITARLO
                createCourseFlag === true
                ? <FormCoursePostAndEdit/>
                : null
            }

            <CourseListCards path={path} handlerEditCourse={handlerEditCourse} courses={courses}/>
        </div>
    )
}