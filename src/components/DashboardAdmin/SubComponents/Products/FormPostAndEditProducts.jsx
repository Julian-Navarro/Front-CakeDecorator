import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, Form, Input, Label, Select, Option, P, Button, H1 } from "../../../../utils/StyledComponents/StyledComponents";

export default function FormProductPostAndEdit({ handlerSetComponentProductListFlag, update, product, handlerEditProduct }) {
  //! ↓↓↓↓↓↓↓↓↓↓↓  *HANDLERS QUE ABREN LOS FORMS Y SETEAN EL CURSO EN CASO DE EDICIÓN* ↓↓↓↓↓↓↓↓↓↓↓
  // const [categories, setCategories] = useState([]);                  //! UNIR CREANDO RUTA EN BACK
  // async function getCategories() {                                   //! UNIR CREANDO RUTA EN BACK
  //     let newCategories = await axios.get(`${HOST}/categories`)      //! UNIR CREANDO RUTA EN BACK
  //     setCategories(newCategories)                                   //! UNIR CREANDO RUTA EN BACK
  //   } //! DESCOMENTAR TMB EN EL USE EFFECT LA EJECUCION DE LA FN GET-CATEGORIES
  const categories = ["Picos", "Cortantes", "Mangas"] //! HARDCODEO HASTA QUE ESTÉ LA RUTA DE ARRIBA

    const [input, setInput] = useState({
      category: "",
      description: "",
      name: "",
      price: "",
      img: [""],
      stock: ""
    });
    const [errors, setErrors] = useState({
      category: "",
      description: "",
      name: "",
      price: "",
      img: "",
      stock: ""
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
        setInput({...product})
    };
    function handlerSetInput(e){
      e.preventDefault();
      
      if(e.target.name === "img") {
        setInput({
          ...input,
          img: [e.target.value]
        })
      } else {
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
      }
      // console.log("INPUT: ", input);
    }
   
    async function handlerPostOrEdit(e) {
        e.preventDefault();
        validate()
        if(e.target.value === "true") {
            console.log("EDIT: ", e.target.value);
            if(errors.category === "" 
                && errors.description === "" 
                && errors.img === "" 
                && errors.price === "" 
                && errors.stock === ""
                && errors.name === "") {
                handlerSetFormFlag()
                console.log("CASO NO HAY ERRORES");
                console.log("HACER EL PUT");
                await axios.put(`${HOST}/products/${product.id}`, input)
                handlerSetComponentProductListFlag()
                console.log("INPUT: ", input);
                alert("Producto editado con éxito")
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
               errors.name === "" && 
               errors.stock === "") {
               handlerSetFormFlag()
               console.log("CASO NO HAY ERRORES");
               console.log("HACER EL POST");
               console.log("INPUT: ", input);
               await axios.post(`${HOST}/products`, input)
               handlerSetComponentProductListFlag()
               alert("Producto creado con éxito")
              } else {
                handlerSetFormFlag()
                alert("Falta llenar algun campo")
            }
        }
    }

    useEffect(()=>{
        console.log("UPDATE VALUE: ",update);
        if(update) {
            handlerSetInputUpdate()
        }
    },[product])

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
      if (input.name === "") {
        errors.name = "Debes indicar nombre del producto"
      } else {
        errors.name = ""
      }
      if (input.price === "") {
        errors.price = "Debes indicar un precio"
      } else {
        errors.price = ""
      }
      if (input.img.length === 0) {
        errors.img = "Debes cargar una imagen"
      } else {
        errors.img = ""
      }
      if (input.stock === "") {
        errors.stock = "Debes indicar el stock disponible"
      } else {
        errors.stock = ""
      }
      console.log("ERRORS: ", errors);
    }
    useEffect(()=>{
      console.log("RENDER FORM - INPUT", input);
      // getCategories()
    }, [formFlag, categories])
    //! ********************** COLORES PARA CSS  **********************
    const colorName = errors.name !== "" ? "#FF8282" : "black";
    const colorCategory = errors.category !== "" ? "#FF8282" : "black";
    const colorStock = errors.stock !== "" ? "#FF8282" : "black";
    const colorDescription = errors.description !== "" ? "#FF8282" : "black";
    const colorPrice = errors.price !== "" ? "#FF8282" : "black";
    const colorImg = errors.img !== "" ? "#FF8282" : "black";

    return (
        <Div flexDir="column" wd="100%" hg="34rem" mt="1rem" mb="2rem">
        {
        update 
          ? <H1 fSize="2rem" bg="none">Editando {`${product.name}`}</H1>
          : <H1 fSize="2rem" bg="none">Crea un nuevo producto</H1> 
        }
          <Form flexDir="row" bd="#9AEFFF" wd="80%" hg="100%" pd="0rem 0rem 1rem 0rem">
            <Div flexDir="column" hg="100%" wd="100%" >
              <Div hg="100%" wd="100%">
                <Div flexDir="column" hg="100%" wd="50%">
                  <Div flexDir="column">
                    <Label color={colorName}>Nombre </Label>
                    <Input name="name" bd={colorName} onChange={(e)=>{handlerSetInput(e)}} type="text" defaultValue={input.name}/>
                  </Div>
                  {errors.name !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorName} color={colorName}>{errors.name}</P>:<p></p>}
                  <Div flexDir="column">
                    <Label color={colorPrice}>Precio </Label>
                    <Input name="price" bd={colorPrice} onChange={(e)=>{handlerSetInput(e)}} type="number" defaultValue={input.price}/>
                  </Div>
                  {errors.price !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorPrice} color={colorPrice}>{errors.price}</P>:<p></p>}
                  <Div flexDir="column">
                    <Label color={colorImg}>Imagen </Label>
                    <Input name="img" bd={colorImg} onChange={(e)=>{handlerSetInput(e)}} type="text" defaultValue={input.img}/> //! img es un array
                  </Div>
                  {errors.img !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorImg} color={colorImg}>{errors.img}</P>:<p></p>}
                  <Div flexDir="column">
                    <Label>Stock </Label>
                    <Input name="stock" onChange={(e)=>{handlerSetInput(e)}} type="number" defaultValue={input.stock}/>
                  </Div>
                  {errors.stock !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorStock} color={colorStock}>{errors.stock}</P>:<p></p>}
                </Div>
                <Div flexDir="column" hg="100%" wd="50%">
                  <Div>
                    <Select name="category" bd={colorCategory} br="none" onChange={(e)=>{handlerSetInput(e)}} type="text" defaultValue={input.category}>
                      <Option value="default">Selecciona Categoría</Option>
                  //! ACA IRIAN LAS CATEGORIAS EXISTENTES
                      {
                        categories.length === 0
                        ? null
                        : categories.map((cat)=> <Option key={cat} >{cat}</Option> )
                      }

                    </Select>
                  </Div>
                  {errors.category !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorCategory} color={colorCategory}>{errors.category}</P>:<p></p>}
                  <Div flexDir="column">
                    <Label color={colorDescription}>Descripción </Label>
                    <Input name="description" bd={colorDescription} onChange={(e)=>{handlerSetInput(e)}} type="text" defaultValue={input.description}/>
                  </Div>
                    {errors.description !== ""?<P pd="2px 14px 2px 14px" bg="#FFDCDC" bd={colorDescription} color={colorDescription}>{errors.description}</P>:<p></p>}
                </Div>
              </Div>
                  {
                  update 
                  ? <Div>
                      <Button value={true} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} bgColor="#0172AF">Guardar</Button>
                      <Button onClick={(e)=>{handlerEditProduct(e)}} bgColor="#0172AF">Cerrar edición</Button>
                    </Div>
                  : <Button value={false} type="submit" onClick={(e)=>{handlerPostOrEdit(e)}} color="#161616" bg="#9AEFFF" pd="6px 4rem 6px 4rem" _hovBg="lightblue">Crear</Button> 
                }
            </Div>
          </Form>
        </Div>
    )
}