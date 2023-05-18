import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, Form, Input, Label, Select, Option, P, Button, H1 } from "../../../../utils/StyledComponents/StyledComponents";
import CloudinaryUploadVideo from "../../../../utils/Cloudinary/UploadVideoCloud";

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
    console.log(input)
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
        // console.log("INPUT: ", input);
    }
   
    function handlerPostOrEdit(e) {
        e.preventDefault();
        validate()
        if(e.target.value === "true") {
            // console.log("EDIT: ", e.target.value);
            if(errors.category === "" && 
               errors.description === "" && 
               errors.img === "" && 
               errors.price === "" && 
               errors.title === "" && 
               errors.videos === "" &&
               errors.type === "") {
                handlerSetFormFlag()
              //  console.log("CASO NO HAY ERRORES");
               axios.put(`${HOST}/courses?id=${course.id}`, input)
               handlerSetComponentCourseListFlag()
               alert("Curso editado con éxito")
              } else {
               handlerSetFormFlag()
               alert("Falta llenar algun campo")
            }
        } else {
            // console.log("POST: ", e.target.value);
            if(errors.category === "" && 
               errors.description === "" && 
               errors.img === "" && 
               errors.price === "" && 
               errors.title === "" && 
               errors.videos === "" &&
               errors.type === "") {
                handlerSetFormFlag()
              //  console.log("CASO NO HAY ERRORES");
               axios.post(`${HOST}/courses`, input)
               handlerSetComponentCourseListFlag()
               alert("Curso creado con éxito")
              } else {
                handlerSetFormFlag()
                alert("Falta llenar algun campo")
            }
        }
        console.log("SARASA");
        handlerSetComponentCourseListFlag()
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
      // console.log("ERRORS: ", errors);
    }
    const colorTitle = errors.title !== "" ? "#FF8282" : "black";
    const colorCategory = errors.category !== "" ? "#FF8282" : "black";
    const colorType = errors.type !== "" ? "#FF8282" : "black";
    const colorVideos = errors.videos !== "" ? "#FF8282" : "black";
    const colorDescription = errors.description !== "" ? "#FF8282" : "black";
    const colorPrice = errors.price !== "" ? "#FF8282" : "black";
    const colorImg = errors.img !== "" ? "#FF8282" : "black";


    useEffect(()=>{
      console.log("RENDERING FORM COURSES");
    }, [formFlag])

    //! ********************** COLORES PARA CSS  **********************
    return (
        <Div flexDir="column" wd="100%" hg="34rem" mt="1rem" mb="2rem">
        {
        update 
          ? <H1 fSize="2rem" bg="none">Editando {`${course.title}`}</H1>
          : <H1 fSize="2rem" bg="none">Crea un nuevo curso</H1> 
        }
          <Form flexDir="row" bd="#9AEFFF" wd="80%" hg="100%" pd="0rem 0rem 1rem 0rem">
            <Div flexDir="column" hg="100%" wd="100%" >
              <Div hg="100%" wd="100%">
                <Div flexDir="column" hg="100%" wd="50%">
                  <Div flexDir="column">
                    <Label color={colorTitle}>Título </Label>
                    <Input name="title" bd={colorTitle} onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.title}/>
                  </Div>
                  {errors.title !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorTitle} color={colorTitle}>{errors.title}</P>:<p></p>}
                  <Div flexDir="column">
                    <Label color={colorPrice}>Precio </Label>
                    <Input name="price" bd={colorPrice} onChange={(e)=>{handlerSetInput(e)}} type="number" value={input.price}/>
                  </Div>
                  {errors.price !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorPrice} color={colorPrice}>{errors.price}</P>:<p></p>}
                  <Div flexDir="column">
                    <Label color={colorImg}>Imagen </Label>
                    <Input name="img" bd={colorImg} onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.img}/>
                  </Div>
                  {errors.img !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorImg} color={colorImg}>{errors.img}</P>:<p></p>}
                  <Div flexDir="column">
                    <Label>Videos </Label> Proximamente
                    <CloudinaryUploadVideo input={input} setInput={setInput}/>
                    {/* <input name="videos" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.videos}/> */}
                    {/* //! ↑↑↑↑↑↑↑↑↑↑↑↑   ****ACA ARRIBA ESTA EL INPUT DE LOS VIDEOS****   ↑↑↑↑↑↑↑↑↑↑↑↑ */}
                  </Div>
                  {errors.videos !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorVideos} color={colorVideos}>{errors.videos}</P>:<p></p>}
                </Div>
                <Div flexDir="column" hg="100%" wd="50%">
                  <Div>
                    <Select name="category" bd={colorCategory} br="none" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.category}>
                      <Option value="default">Selecciona Categoría</Option>
                      <Option value="Seminario">Seminario</Option>
                      <Option value="Curso">Curso</Option>
                    </Select>
                  </Div>
                  {errors.category !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorCategory} color={colorCategory}>{errors.category}</P>:<p></p>}
                  <Div>
                    <Select name="type"  bd={colorType} br="none" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.type} >
                      <Option value="default">Selecciona Tipo de Dictación</Option>
                      <Option value="Presencial">Presencial</Option>
                      <Option value="Online">Online</Option>
                      <Option value="Hibrido">Híbrido</Option>
                    </Select>
                  </Div>
                  {errors.type !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorType} color={colorType}>{errors.type}</P>:<p></p>}
                  <Div flexDir="column">
                    <Label color={colorDescription}>Descripción </Label>
                    <Input name="description" bd={colorDescription} onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.description}/>
                  </Div>
                    {errors.description !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorDescription} color={colorDescription}>{errors.description}</P>:<p></p>}
                </Div>
              </Div>
                  {
                  update 
                  ? <Div>
                      <Button value={true} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} bgColor="#0172AF">Guardar</Button>
                      <Button onClick={(e)=>{handlerEditCourse(e)}} bgColor="#0172AF">Cerrar edición</Button>
                    </Div>
                  : <Button value={false} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} color="#161616" bg="#9AEFFF" pd="6px 4rem 6px 4rem" _hovBg="lightblue">Crear</Button> 
                }
            </Div>
          </Form>
        </Div>
    )
}