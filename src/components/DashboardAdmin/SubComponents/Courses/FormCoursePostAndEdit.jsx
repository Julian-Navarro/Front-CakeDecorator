import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, Form, Input, P, Select, Option, Button, H1, TextArea } from "../../../../utils/StyledComponents/StyledComponents";
import s from "./FormCoursePostAndEdit.module.css"
import CloudinaryUploadVideo from "../../../../utils/Cloudinary/UploadVideos";
import CloudinaryUploader from "../../../../utils/Cloudinary/UploadImage"

export default function FormCoursePostAndEdit({ handlerSetComponentCourseListFlag, update, course, handlerEditCourse}) {
  const [formPage, setFormPage] = useState(1)
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
  });
  const [formFlag, setFormFlag] = useState(false);
  function handlerSubtractFormPage (e) {
    e.preventDefault();
    setFormPage(formPage-1)
  };
  function handlerSetFormFlag () {
    setFormFlag(!formFlag)      
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
      // validate()
      validateThird()
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
        handlerSetComponentCourseListFlag()
      }
      useEffect(()=>{
        if(update === true) {
          handlerSetInputUpdate()
        }
      },[course])
      //! ↓↓↓↓↓↓↓↓  *******VALIDACION DE ERRORES******* ↓↓↓↓↓↓↓↓
      
      
      function validateFirst() {
        if (input.title === "") {
          errors.title = "Debes indicar un título"
        } else {
      errors.title = ""
    }
    if(input.category === "") {
      errors.category = "Debes indicar una categoría"
    } else {
      errors.category = ""
    }
    if (input.type === "") {
      errors.type = "Debes elegir un tipo de dictación"
    } else {
      errors.type = ""
    }
  }
  function handlerFirstStep(e) {
    e.preventDefault();
    validateFirst()
    if(!errors.title && !errors.type && !errors.category) {
      setFormPage(formPage+1)
    } else {
      alert("Falta rellenara algún campo")
    }
  };
  function validateSecond() {
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
  }
  function handlerSecondStep(e) {
    e.preventDefault()
    validateSecond();
    if(!errors.price && !errors.img) {
      setFormPage(formPage+1)
    } else {
      alert("Falta llenar algún campo")
    }
  }
  function validateThird() {
    if(input.description === "") {
      errors.description = "Debes escribir una descripción"
    } else {
      errors.description = ""
    }
    // if(input.videos.length === 0) {
    //   errors.videos = "Debes cargar uno o mas videos"
    // } else { 
    //   errors.videos = ""
    // }      
  }
  function handlerThirdStep(e) {
    e.preventDefault()
    if(!errors.videos) {
      setFormPage(formPage+1);
    }
  }
  function handlerBackStep(e) {
    e.preventDefault();
    setFormPage(formPage-1)
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
  }, [formFlag, formPage])

  //! ********************** COLORES PARA CSS  **********************
  return (
  <Div flexDir="column"jfCont="space-evenly" bg="gray"wd="30rem" hg="34rem" mt="1rem" mb="2rem"overflow="hidden">
    {
    update 
    ? <P fSize="2rem" bg="none">Editando {`${course.title}`}</P>
    : <P fSize="2rem" bg="none">Crea un nuevo curso</P> 
    }
    <Div
      bg={"lightgray"}wd="80%"hg=".6rem"jfCont="space-between"mt=".5rem"zInd="0"
      boxSh="0 0 .1rem .025rem #333, inset 0 0 .2rem .012rem gray"
    >
      <Div
        bg={formPage>1?"green":"lightgray"}
        boxSh={`1px 1px .2rem .05rem #333, inset 0 0 .7rem .0125rem #333`}
        pos="relative"posLeft="-.2rem"zInd="2"wd="2rem"hg="2rem"br="1rem"
      ></Div>
      <Div
        bg={formPage>2?"green":"lightgray"}boxSh={`1px 1px .2rem .05rem #333, inset 0 0 .7rem .0125rem #333`}
        zInd="2"wd="2rem"hg="2rem"br="1rem"
      ></Div>
      <Div
        boxSh={`1px 1px .2rem .05rem #333, inset 0 0 .7rem .0125rem #333`}pos="relative"
        posLeft=".2rem"zInd="2"wd="2rem"hg="2rem"br="1rem"bg="lightgray"
      ></Div>
      <Div
        bg="#5fe244"hg=".6rem"boxSh={`1px 1px .2rem .05rem #333, inset 0 0 .7rem .0125rem #333`}
        wd={formPage === 1 ? "0%" : formPage === 2 ? "12rem" : "23rem"}
        jfCont="space-between"pos="absolute"trans="1s"zInd="1"
      ></Div>
    </Div>
    <Form wd="80%"bg="violet"hg="22rem"pd="0">
      <Div hg="20rem"wd="130rem"pos="relative">
      <Div hg="20rem"wd="130rem"jfCont="space-between"pos="relative"posLeft={formPage===1?"53rem":formPage===2?"17.7rem":formPage===3?"-17.65rem":"-53rem"}>
        <Div flexDir="column" bg="purple"wd="24rem"hg="100%"jfCont="space-evenly"alItems="flex-start">
          <Div flexDir="column"alItems="flex-start">
            <P color={colorTitle}>Título </P>
            <input className={errors.title?s.formInputDanger:s.formInput}name="title" bd={colorTitle} 
              onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.title}/>
          </Div>
          { errors.title !== ""
          ? <P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorTitle} color={colorTitle}>{errors.title}</P>
          : <P></P> }
          <Select name="category" bd={colorCategory} br="none" onChange={(e)=>{handlerSetInput(e)}}
            type="text" value={input.category}>
            <Option value="default">Selecciona Categoría</Option>
            <Option value="Seminario">Seminario</Option>
            <Option value="Curso">Curso</Option>
          </Select>
          { errors.category !== ""
          ? <P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorCategory} color={colorCategory}>{errors.category}</P>
          : <P></P> }
          <Select name="type"  bd={colorType} br="none" onChange={(e)=>{handlerSetInput(e)}} type="text" value={input.type} >
            <Option value="default">Selecciona Tipo de Dictación</Option>
            <Option value="Presencial">Presencial</Option>
            <Option value="Online">Online</Option>
            <Option value="Hibrido">Híbrido</Option>
          </Select>
          { errors.type !== ""
          ? <P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorType} color={colorType}>{errors.type}</P>
          : <P></P> }
            <Button alSelf="center"bg="orange"onClick={(e)=>handlerFirstStep(e)}>Siguiente</Button>
      </Div>
      <Div bg="green"wd="24rem"hg="100%"flexDir="column">
        <Div bg="red"hg="100%"flexDir="column"jfCont="space-evenly">
          <Div flexDir="column"alItems="flex-start">
            <P color={colorPrice}>Precio </P>
            <input className={errors.price?s.formInputDanger:s.formInput} name="price" bd={colorPrice} onChange={(e)=>{handlerSetInput(e)}}   type="number" value={input.price}/>
          </Div> 
          {errors.price !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorPrice} color={colorPrice}>{errors.price}</P>:<p></p>} 
          <Div flexDir="column"alItems="flex-start">
            <P color={colorImg}>Imagen </P>
            <CloudinaryUploader name="img" folder={"imagenes_de_cursos"} inputCourse={input} setInputCourse={setInput}/>
          </Div>
          {errors.img !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorImg} color={colorImg}>{errors.img}</P>:<p></p>}
          <Div bg="purple"jfCont="space-evenly">
            <Button onClick={(e)=>{handlerBackStep(e)}}>Atrás</Button>
            <Button onClick={(e)=>handlerSecondStep(e)}>Siguiente</Button>
          </Div>
        </Div>
      </Div>
      <Div bg="blue"wd="24rem"pd="3px"hg="100%">
        <Div jfCont="space-between"bg="coral"flexDir="column"hg="100%">
          <Div flexDir="column"alItems="flex-start">
            <Div bg="violet">
              <CloudinaryUploadVideo input={input}name="videos" setInput={setInput}/>
            </Div>
          </Div>
          {errors.videos !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorVideos} color={colorVideos}>{errors.videos}</P>:<p></p>}
          <Div bg="red"jfCont="space-evenly">
            <Button onClick={(e)=>{handlerBackStep(e)}}>Atrás</Button>
            <Button onClick={(e)=>{handlerThirdStep(e)}}>Siguiente</Button>
          </Div>
        </Div>
      </Div>
      <Div bg="purple" wd="24rem"hg="100%"flexDir="column">
        <Div flexDir="column"bg="orange"hg="17rem"jfCont="flex-start"alItems="flex-start">
          <P color={colorDescription}>Descripción </P>
          <TextArea wd="100%"name="description" bd={colorDescription} 
            onChange={(e)=>{handlerSetInput(e)}} type="text" txAlign="left"
            pd=".15rem"hg="12rem"boxSh="inset 0 0 6rem 1rem lightgray"
            value={input.description}
          />
          {errors.description !== ""
          ? <P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorDescription} color={colorDescription}alSelf="center"mt=".3rem">{errors.description}</P>
          :<P></P>}
          </Div>
        <Div bg="red"jfCont="space-evenly">
          <Button onClick={(e)=>handlerBackStep(e)}>Atrás</Button>
          {
            update 
            ?
            <Button value={true} onClick={(e)=>{handlerPostOrEdit(e)}}
              bgColor="#0172AF"
            >Guardar</Button>
            : <Button value={false} onClick={(e)=>{handlerPostOrEdit(e)}}
              olor="#161616" bg="#9AEFFF" pd="6px 4rem 6px 4rem"_hovBg="lightblue"
            >Crear</Button> 
          }
          {/* <Button onClick={(e)=>{handlerEditCourse(e)}} bgColor="#0172AF"
          >Cerrar edición</Button> */}
        </Div>
      </Div>

      {/* <Div>
            {formPage>1?<Button onClick={(e)=>handlerSubtractFormPage(e)}>Atrás</Button>:null }
            <Button onClick={(e)=>handlerAddFormPage(e)}>Siguiente</Button>
          </Div> */}



           
            {/* {
              update 
              ? <Div>
              <Button value={true} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} bgColor="#0172AF">Guardar</Button>
              <Button onClick={(e)=>{handlerEditCourse(e)}} bgColor="#0172AF">Cerrar edición</Button>
              </Div>
              : <Button value={false} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} color="#161616" bg="#9AEFFF" pd="6px 4rem 6px 4rem" _hovBg="lightblue">Crear</Button> 
            } */}
      </Div>
      </Div>
    </Form>
  </Div>
  )
}