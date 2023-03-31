import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CourseLists from "../../../CourseList/CourseList";
import FormCoursePostAndEdit from "./FormCoursePostAndEdit";


export default function CoursesAdm ({ path }) {
    const [createCourseFlag, setCreateCourseFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false)
    const [courseToEdit, setCourseToEdit] = useState(false)
    const [componentCourseListFlag, setComponentCourseListFlag] = useState(false)
    function handlerSetComponentCourseListFlag () {
        if(componentCourseListFlag) {
            setComponentCourseListFlag(false)
        } else {
            setComponentCourseListFlag(true)
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
    }
    function handlerSetEditFlag() {
        if(editFlag) {
            setEditFlag(false)
        } else {
            setEditFlag(true)
        }
    }   

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
          <CourseLists 
            componentCourseListFlag={componentCourseListFlag}
            path="adm" 
            handlerEditCourse={handlerEditCourse}/>
        </div>

    )
}