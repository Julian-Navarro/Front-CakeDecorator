import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, Form, DivContainer, FormInput, Label, Select, Option, PDanger, Button, DivButtons, H1 } from "../../../../utils/StyledComponents/StyledForm";

export default function FormCoursePostAndEdit({ handlerSetComponentCourseListFlag, update, course, handlerEditCourse}) {
  //! ↓↓↓↓↓↓↓↓↓↓↓  *HANDLERS QUE ABREN LOS FORMS Y SETEAN EL CURSO EN CASO DE EDICIÓN* ↓↓↓↓↓↓↓↓↓↓↓
    const [input, setInput] = useState({
      category: "",
      description: "",
      title: "",
      price: "",
      img: "",
      type: "",
      videos: [1],//! El 1 es para que tenga algo y la validacion del formulario no se queje
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
               handlerSetComponentCourseListFlag()
               alert("Curso editado con éxito")
              } else {
               handlerSetFormFlag()
               alert("Falta llenar algun campo")
            }
        } else {
            console.log("POST: ", e.target.value);
            if(errors.category === "" && 
               errors.description === "" && 
               errors.img === "" && 
               errors.price === "" && 
               errors.title === "" && 
               errors.videos === "" &&
               errors.type === "") {
                handlerSetFormFlag()
               console.log("CASO NO HAY ERRORES");
               axios.post(`${HOST}/courses`, input)
               handlerSetComponentCourseListFlag()
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
      // if(input.videos.length === 0) {                  //! ACÁ LA VALIDACION PARA LOS VIDEOS                              
      //   errors.videos = "Debes cargar uno o mas videos"
      // } else {                                         //! ACÁ LA VALIDACION PARA LOS VIDEOS      
      //   errors.videos = ""                             //! ACÁ LA VALIDACION PARA LOS VIDEOS                  
      // }                                                //! ACÁ LA VALIDACION PARA LOS VIDEOS
      console.log("ERRORS: ", errors);
    }
    const colorSelect = input.category === "" ? "blue" : "#161616";
    const colorBorderInputTitle = errors.title !== "" ? "red" : "black";
    const colorBorderInputCategory = errors.category !== "" ? "red" : "black";
    const colorBorderInputType = errors.type !== "" ? "red" : "black";
    const colorBorderInputVideos = errors.videos !== "" ? "red" : "black";
    const colorBorderInputDescription = errors.description !== "" ? "red" : "black";
    const colorBorderInputPrice = errors.price !== "" ? "red" : "black";
    const colorBorderInputImg = errors.img !== "" ? "red" : "black";


    useEffect(()=>{
      console.log("RENDERING");
      console.log("COLOR TITLE BORDER: ", colorBorderInputTitle);
    }, [formFlag])

    //! ********************** COLORES PARA CSS  **********************
    return (
      <div>
        <DivContainer>
        {
        update 
          ? 
          <div>
            <H1 fSize="40px">Editando</H1>
            <H1>{`${course.title}`}</H1>
          </div> 
          : <H1 fSize="40px">Crea un nuevo curso</H1> 
        }
          <Form>
            <Div>
              <Label>Título </Label>
              <FormInput name="title" color={colorBorderInputTitle} onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.title}/>
            </Div>
            {errors.title !== ""?<PDanger>{errors.title}</PDanger>:<p></p>}
            <Div>
              <Label>Precio </Label>
              <FormInput name="price" color={colorBorderInputPrice} onChange={(e)=>{handlerSetInput(e)}} type="number" value={input.price}/>
            </Div>
            {errors.price !== ""?<PDanger>{errors.price}</PDanger>:<p></p>}
            <Div>
              <Label>Imagen </Label>
              <FormInput name="img" color={colorBorderInputImg} onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.img}/>
            </Div>
            {errors.img !== ""?<PDanger>{errors.img}</PDanger>:<p></p>}
            <Div>
              <Label>Videos </Label> Proximamente
              {/* <input name="videos" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.videos}/> */}
              {/* //! ↑↑↑↑↑↑↑↑↑↑↑↑   ****ACA ARRIBA ESTA EL INPUT DE LOS VIDEOS****   ↑↑↑↑↑↑↑↑↑↑↑↑ */}
            </Div>
            {errors.videos !== ""?<PDanger>{errors.videos}</PDanger>:<p></p>}
            <Div>
              <Select name="category" color={colorBorderInputCategory} onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.category}>
                <Option value="default">Selecciona Categoría</Option>
                <Option value="Seminario">Seminario</Option>
                <Option value="Curso">Curso</Option>
              </Select>
            </Div>
            {errors.category !== ""?<PDanger>{errors.category}</PDanger>:<p></p>}
            <Div>
              <Select name="type" color={colorBorderInputType} onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.type} >
                <Option value="default">Selecciona Tipo de Dictación</Option>
                <Option value="Presencial">Presencial</Option>
                <Option value="Online">Online</Option>
                <Option value="Hibrido">Híbrido</Option>
              </Select>
            </Div>
            {errors.type !== ""?<PDanger>{errors.type}</PDanger>:<p></p>}
          <Div>
            <Label>Descripción </Label>
            <FormInput name="description" color={colorBorderInputDescription} onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.description}/>
          </Div>
            {errors.description !== ""?<PDanger>{errors.description}</PDanger>:<p></p>}
            {
            update 
            ? <DivButtons>
                <Button value={true} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} bgColor="#0172AF">Guardar</Button>
                <Button onClick={(e)=>{handlerEditCourse(e)}} bgColor="#0172AF">Cerrar edición</Button>
              </DivButtons>
            : <Button value={false} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} bgColor="#0172AF" >Crear</Button> 
            }

          </Form>
        </DivContainer>
      </div>
    )
}