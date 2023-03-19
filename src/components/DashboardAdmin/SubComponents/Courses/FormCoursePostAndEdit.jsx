import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../../utils";
export default function FormCoursePostAndEdit({ handlerSetComponentFlag, update, course, handlerEditCourse}) {
  //! ↓↓↓↓↓↓↓↓↓↓↓  *HANDLERS QUE ABREN LOS FORMS Y SETEAN EL CURSO EN CASO DE EDICIÓN* ↓↓↓↓↓↓↓↓↓↓↓
    const [input, setInput] = useState({
      category: "",
      description: "",
      title: "",
      price: "",
      img: "",
      type: "",
      videos: [],
    });
    const [errors, setErrors] = useState({
      category: "",
      description: "",
      title: "",
      price: "",
      img: "",
      type: "",
      videos: "",
    })
    const [formFlag, setFormFlag] = useState(false);
    function handlerSetFormFlag () {
      if(formFlag) {
        setFormFlag(false)
        console.log("SETEANDO FLAG");
      } else {
        setFormFlag(true)
        console.log("SETEANDO FLAG");
      }
    }
    function handlerSetInputUpdate() {
        setInput({...course})
    };
    function handlerSetInput(e){
        e.preventDefault();
        if(e.target.value !== "default") {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        } else {
            setInput({
                ...input,
                [e.target.name]: ""
            }) 
        }
        console.log("INPUT: ", input);
    }
   
    function handlerPostOrEdit(e) {
        e.preventDefault();
        validate()
        if(e.target.value === "true") {
            console.log("EDIT: ", e.target.value);
            if(errors.category === "" && 
               errors.description === "" && 
               errors.img === "" && 
               errors.price === "" && 
               errors.title === "" && 
               errors.videos === "" &&
               errors.type === "") {
                handlerSetFormFlag()
               console.log("CASO NO HAY ERRORES");
               axios.put(`${HOST}/courses?id=${course.id}`, input)
               handlerSetComponentFlag()
               alert("Curso editado con éxito")
              } else {
                handlerSetFormFlag()
                alert("Falta llenar algun campo")
            }
        } else {
            console.log("POST: ", e.target.value);
            if(errors.category === "" && 
               errors.category === "" && 
               errors.category === "" && 
               errors.category === "" && 
               errors.category === "" && 
               errors.category === "") {
                handlerSetFormFlag()
               console.log("CASO NO HAY ERRORES");
               axios.post(`${HOST}/courses`, input)
               handlerSetComponentFlag()
               alert("Curso creado con éxito")
              } else {
                handlerSetFormFlag()
                alert("Falta llenar algun campo")
            }
        }
    }

    useEffect(()=>{
        if(update === true) {
            handlerSetInputUpdate()
        }
    },[course])

//! ↓↓↓↓↓↓↓↓  *******VALIDACION DE ERRORES******* ↓↓↓↓↓↓↓↓


    function validate() {
      if(input.category === "") {
        errors.category = "Debes indicar una categoría"
      } else {
        errors.category = ""
      }
      if(input.description === "") {
        errors.description = "Debes escribir una descripción"
      } else {
        errors.description = ""
      }
      if (input.title === "") {
        errors.title = "Debes indicar un título"
      } else {
        errors.title = ""
      }
      if (input.price === "") {
        errors.price = "Debes indicar un precio"
      } else {
        errors.price = ""
      }
      if (input.img === "") {
        errors.img = "Debes cargar una imagen"
      } else {
        errors.img = ""
      }
      if (input.type === "") {
        errors.type = "Debes elegir un tipo de dictación"
      } else {
        errors.type = ""
      }
      if(input.videos.length === 0) {
        errors.videos = "Debes cargar uno o mas videos"
      } else {
        errors.videos = ""
      }
      console.log("ERRORS: ", errors);
    }

    useEffect(()=>{
      console.log("RENDERING");
    }, [formFlag])
    return (
        <div>
          {
          update 
            ? <h1>Edita el curso</h1> 
            : <h1>Crea un nuevo curso</h1> 
          }

          <form>
            <div>
              <label htmlFor="">Titulo: </label>
              <input name="title" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.title}/>
            </div>
            <p>{errors.title}</p>
            <div>
              <label htmlFor="">Precio: </label>
              <input name="price" onChange={(e)=>{handlerSetInput(e)}} type="number" value={input.price}/>
            </div>
            <p>{errors.price}</p>
            <div>
              <label htmlFor="">Img: </label>
              <input name="img" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.img}/>
            </div>
            <p>{errors.img}</p>
            <div>
              <label htmlFor="">Videos: </label> Proximamente(?
              {/* <input name="videos" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.videos}/> */}
              {/* //! ↑↑↑↑↑↑↑↑↑↑↑↑   ****ACA ARRIBA ESTA EL INPUT DE LOS VIDEOS****   ↑↑↑↑↑↑↑↑↑↑↑↑ */}
            </div>
            <p>{errors.videos}</p>
            <div>
              <select name="category" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.category}>
                <option value="default">Selecciona Categoría</option>
                <option value="Seminario">Seminario</option>
                <option value="Curso">Curso</option>
              </select>
            </div>
            <p>{errors.category}</p>
            <div>
              <select name="type" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.type}>
                <option value="default">Selecciona Tipo de Dictacion</option>
                <option value="Presencial">Presencial</option>
                <option value="Online">Online</option>
                <option value="Hibrido">Hibrido</option>
              </select>
            </div>
            <p>{errors.type}</p>
            <div>
              <label htmlFor="">Descripción: </label>
              <input name="description" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.description}/>
            </div>
            <p>{errors.description}</p>
            {
            update 
            ? <div>
                <button value={true} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} >Guardar</button>
                <button onClick={(e)=>{handlerEditCourse(e)}}>Cerrar edición</button>
              </div>
            : <button value={false} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} >Crear</button> 
            }
          </form>
        </div>
    )
}