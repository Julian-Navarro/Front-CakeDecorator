import React, { useEffect, useState } from "react";

export default function FormCoursePostAndEdit({ update, course, handlerEditCourse}) {
    const [input, setInput] = useState({
        category: "",
        description: "",
        title: "",
        price: "",
        img: "",
        type: "",
        videos: [],
    });
    
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
        if(e.target.value === "true") {
            console.log("EDIT: ", e.target.value);
        } else {
            console.log("POST: ", e.target.value);
        }
    }
    useEffect(()=>{
        if(update === true) {
            handlerSetInputUpdate()
        }
    },[course])

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
            <div>
              <label htmlFor="">Precio: </label>
              <input name="price" onChange={(e)=>{handlerSetInput(e)}} type="number" value={input.price}/>
            </div>
            <div>
              <label htmlFor="">Img: </label>
              <input name="img" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.img}/>
            </div>
            <div>
              <label htmlFor="">Videos: </label>
              <input name="videos" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.videos}/>
            </div>
            <div>
              <select name="category" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.category}>
                <option value="default">Selecciona Categoría</option>
                <option value="Seminario">Seminario</option>
                <option value="Curso">Curso</option>
              </select>
            </div>
            <div>
              <select name="type" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.type}>
                <option value="default">Selecciona Tipo de Dictacion</option>
                <option value="Presencial">Presencial</option>
                <option value="Online">Online</option>
                <option value="Hibrido">Hibrido</option>
              </select>
            </div>
            <div>
              <h1>HOLA PUSH</h1>
              <label htmlFor="">Descripción: </label>
              <input name="description" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.description}/>
            </div>
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