// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { HOST } from "../../../../utils";
// import {
//   Div,
//   Form,
//   Input,
//   Select,
//   Option,
//   P,
//   Button,
//   TextArea,
// } from "../../../../utils/StyledComponents/StyledComponents";
// import s from "./FormPostAndEditProduct.module.css";
// import { MdOutlineClose } from "react-icons/md";
// import CloudinaryUploader from "../../../../utils/Cloudinary/UploadImage";

// export default function FormProductPostAndEdit({
//   handlerSetComponentProductListFlag,
//   update,
//   product,
//   setProductToEdit,
//   setCreateProductFlag,
// }) {
//   //! ↓↓↓↓↓↓↓↓↓↓↓  *HANDLERS QUE ABREN LOS FORMS Y SETEAN EL CURSO EN CASO DE EDICIÓN* ↓↓↓↓↓↓↓↓↓↓↓
//   const [categories, setCategories] = useState([]);
//   async function getCategories() {
//     let categoriesDB = await axios.get(`${HOST}/categories`);
//     setCategories(categoriesDB.data);
//   }
//   const [brands, setBrands] = useState([]);
//   async function getBrands() {
//     let brandsDB = await axios.get(`${HOST}/brands`);
//     setBrands(brandsDB.data);
//   }

//   const [input, setInput] = useState({
//     categories: [],
//     description: "",
//     name: "",
//     price: "",
//     img: [""],
//     stock: "",
//     brand: "",
//   });
//   console.log("IN ", input)
//   const [errors, setErrors] = useState({
//     categories: "",
//     description: "",
//     name: "",
//     price: "",
//     img: "",
//     stock: "",
//   });
//   const [formFlag, setFormFlag] = useState(false);
//   function handlerSetFormFlag() {
//     if (formFlag) {
//       setFormFlag(false);
//       // console.log("SETEANDO FLAG");
//     } else {
//       setFormFlag(true);
//       // console.log("SETEANDO FLAG");
//     }
//   }
//   function handlerSetInputUpdate() {
//     setInput({ ...product });
//   }

//   function handlerSetInput(e) {
//     if (e.target.value !== "default") {
//       if (e.target.name === "categories") {
//         if (!input[e.target.name].includes(e.target.value)) {
//           setInput({
//             ...input,
//             [e.target.name]: [...input[e.target.name], e.target.value],
//           });
//         }
//       }
//       if (e.target.name === "img") {
//         setInput({
//           ...input,
//           [e.target.name]: [e.target.value],
//         });
//       }
//       if (e.target.name !== "img" && e.target.name !== "categories") {
//         setInput({
//           ...input,
//           [e.target.name]: e.target.value,
//         });
//       }
//     }
//   }

//   async function handlerPostOrEdit(e) {
//     e.preventDefault();
//     validateThird();
//     if (e.target.value === "true") {
//       console.log("EDIT: ", e.target.value);
//       if (
//         errors.categories === "" &&
//         errors.description === "" &&
//         errors.img === "" &&
//         errors.price === "" &&
//         errors.stock === "" &&
//         errors.name === ""
//       ) {
//         handlerSetFormFlag();
//         await axios.put(`${HOST}/products/${product.id}`, input);
//         setProductToEdit(false);
//         setCreateProductFlag(false);
//         handlerSetComponentProductListFlag();
//         alert("Producto editado con éxito");
//       } else {
//         handlerSetFormFlag();
//         alert("Falta llenar algun campo");
//       }
//     } else {
//       if (
//         errors.categories === "" &&
//         errors.description === "" &&
//         errors.img === "" &&
//         errors.price === "" &&
//         errors.name === "" &&
//         errors.stock === ""
//       ) {
//         handlerSetFormFlag();
//         await axios.post(`${HOST}/products`, input);
//         setProductToEdit(false);
//         setCreateProductFlag(false);
//         handlerSetComponentProductListFlag();
//         alert("Producto creado con éxito");
//       } else {
//         handlerSetFormFlag();
//         alert("Falta llenar algun campo");
//       }
//     }
//   }

//   useEffect(() => {
//     if (update) {
//       handlerSetInputUpdate();
//     }
//   }, [product]);

//   //! ↓↓↓↓↓↓↓↓  *******VALIDACION DE ERRORES******* ↓↓↓↓↓↓↓↓

//   function validateFirst() {
//     if (input.name === "") {
//       errors.name = "Debes indicar nombre del producto";
//     } else {
//       errors.name = "";
//     }
//     if (input.price === "") {
//       errors.price = "Debes indicar un precio";
//     } else {
//       errors.price = "";
//     }
//     if (input.img.length === 0) {
//       errors.img = "Debes cargar una imagen";
//     } else {
//       errors.img = "";
//     }
//   }
//   function validateSecond() {
//     if (input.categories.length === 0) {
//       errors.categories = "Debes indicar al menos una categoría";
//     } else {
//       errors.categories = "";
//     }
//     if (input.stock === "") {
//       errors.stock = "Debes indicar el stock disponible";
//     } else {
//       errors.stock = "";
//     }
//   }
//   function validateThird() {
//     if (input.description === "") {
//       errors.description = "Debes escribir una descripción";
//     } else {
//       errors.description = "";
//     }
//   }
//   useEffect(() => {
//     console.log("RENDER FORM - INPUT", input);
//     console.log("CATEGORIES ERROR: ", errors);
//     getCategories();
//     getBrands();
//   }, [input]);

//   //! ********************** COLORES PARA CSS  **********************
//   const colorName = errors.name !== "" ? "#FF8282" : "#08ad5b";
//   const colorCategory = errors.categories !== "" ? "#FF8282" : "#08ad5b";
//   const colorStock = errors.stock !== "" ? "#FF8282" : "#08ad5b";
//   const colorDescription = errors.description !== "" ? "#FF8282" : "#08ad5b";
//   const colorPrice = errors.price !== "" ? "#FF8282" : "#08ad5b";
//   const colorImg = errors.img !== "" ? "#FF8282" : "#08ad5b";
//   const [formPage, setFormPage] = useState(1);
//   function handlerSetFormPage(e) {
//     e.preventDefault();
//     if (e.target.value === "back") {
//       setFormPage(formPage - 1);
//     }
//     if (e.target.value === "first") {
//       validateFirst();
//       if (!errors.name && !errors.price && !errors.img) {
//         setFormPage(formPage + 1);
//       } else {
//         setFormFlag(!formFlag);
//         alert("Debes completar los campos!");
//       }
//     }
//     if (e.target.value === "second") {
//       validateSecond();
//       if (!errors.stock && !errors.categories) {
//         setFormPage(formPage + 1);
//       } else {
//         setFormFlag(!formFlag);
//         alert("Debes completar los campos!");
//       }
//     }
//   }
//   useEffect(() => {
//     console.log("USEEFFECT FORMFLAG");
//   }, [formPage, formFlag]);
//   return (
//     <Div flexDir="column" wd="100%" hg="30rem" mt="1rem" mb="2rem">
//       <Form
//         flexDir="column"
//         br=".4rem"
//         bg="#fff"
//         wd="30rem"
//         hg="100%"
//         boxSh="2px 2px .4rem .2rem rgb(0,0,0,0.4), inset 0 0 7rem .1rem gray"
//       >
//         <Button
//           alSelf="flex-end"
//           wd="2.2rem"
//           hg="2.2rem"
//           br="1.5rem"
//           pd="0"
//           bg="#DC4A61"
//           boxSh="1px 1px .2rem .1rem #333, inset 0 0 .5rem .2rem #a02c3e"
//           mt=".5rem"
//           mr=".5rem"
//           onClick={() => {
//             setCreateProductFlag(false);
//             setProductToEdit(false);
//           }}
//         >
//           <MdOutlineClose fontSize={"1.6rem"} />
//         </Button>
//         <Div flexDir="column" hg="30%" br=".2rem">
//           {update ? (
//             <P fSize="1.3rem" fWeight="bold" color="#333">
//               Editando {`${product.name}`}
//             </P>
//           ) : (
//             <P fSize="1.3rem" fWeight="bold">
//               Crea un nuevo producto
//             </P>
//           )}
//           <Div flexDir="column">
//             {/* <P>Barra de progreso del formulario</P> */}
//             <Div
//               bg="lightgray"
//               wd="80%"
//               hg=".6rem"
//               jfCont="space-between"
//               mt=".5rem"
//               zInd="0"
//               boxSh="0 0 .1rem .025rem #333, inset 0 0 .2rem .012rem gray"
//             >
//               <Div
//                 className={
//                   formPage > 1 ? s.divGradientEsfera : s.divGradientEsferaNull
//                 }
//                 boxSh={`1px 1px .2rem .05rem #333, inset 0 0 .7rem .0125rem ${
//                   formPage > 1 ? "#009e4f" : "gray"
//                 }`}
//                 pos="relative"
//                 posLeft="-.2rem"
//                 zInd="2"
//                 // bg={formPage>1?"#00cc66":"lightgray"}
//                 wd="2rem"
//                 hg="2rem"
//                 br="1rem"
//               ></Div>
//               <Div
//                 className={
//                   formPage > 2 ? s.divGradientEsfera : s.divGradientEsferaNull
//                 }
//                 boxSh={`1px 1px .2rem .05rem #333, inset 0 0 .7rem .0125rem ${
//                   formPage > 2 ? "#009e4f" : "gray"
//                 }`}
//                 zInd="2"
//                 wd="2rem"
//                 hg="2rem"
//                 br="1rem"
//               ></Div>
//               <Div
//                 className={s.divGradientEsferaNull}
//                 boxSh={`1px 1px .2rem .05rem #333, inset 0 0 .7rem .0125rem gray`}
//                 pos="relative"
//                 posLeft=".2rem"
//                 zInd="2"
//                 wd="2rem"
//                 hg="2rem"
//                 br="1rem"
//                 bg="lightgray"
//               ></Div>
//               <Div
//                 bg="#5fe244"
//                 hg=".6rem"
//                 wd={formPage === 1 ? "0%" : formPage === 2 ? "12rem" : "23rem"}
//                 jfCont="space-between"
//                 pos="absolute"
//                 trans="1s"
//                 zInd="1"
//               ></Div>
//             </Div>
//             <div className={s.divGradient}>
//               <P fWeight="bold">Paso {formPage}/3</P>
//             </div>
//           </Div>
//         </Div>
//         <Div pd="3px" flexDir="column" overflow="hidden" hg="60%" wd="100%">
//           <Div
//             flexDir="row"
//             wd="100rem"
//             hg="16rem"
//             pos="relative"
//             posLeft={
//               formPage === 1 ? "36rem" : formPage === 2 ? "0rem" : "-36rem"
//             }
//           >
//             <Div flexDir="column" wd="30rem" hg="100%">
//               <Div flexDir="column" alItems="flex-start">
//                 <P color={colorName} fSize="1.2rem" fWeight="bold">
//                   Nombre{" "}
//                 </P>
//                 <input
//                   className={!errors.name ? s.formInput : s.formInputDanger}
//                   name="name"
//                   pd="0 0 0 .3em"
//                   txAlign="left"
//                   wd="95%"
//                   br="0"
//                   outline="none"
//                   bdB={`3px solid ${colorName}`}
//                   onChange={(e) => {
//                     handlerSetInput(e);
//                   }}
//                   type="text"
//                   defaultValue={input.name}
//                 />
//               </Div>
//               {errors.name !== "" ? (
//                 <P
//                   wd="100%"
//                   mt=".3rem"
//                   jfCont="flex-start"
//                   pd="2px 14px 2px 14px"
//                   bg="#FFDCDC"
//                   bd={colorName}
//                   color={colorName}
//                 >
//                   {errors.name}
//                 </P>
//               ) : (
//                 <p></p>
//               )}
//               <Div flexDir="column" alItems="flex-start">
//                 <P color={colorPrice} fSize="1.2rem" fWeight="bold">
//                   Precio{" "}
//                 </P>
//                 <input
//                   className={s.formInput}
//                   name="price"
//                   pd="0 0 0 .3em"
//                   txAlign="left"
//                   wd="6rem"
//                   br="0"
//                   outline="none"
//                   bdB={`3px solid ${colorPrice}`}
//                   onChange={(e) => {
//                     handlerSetInput(e);
//                   }}
//                   type="number"
//                   defaultValue={input.price}
//                 />
//               </Div>
//               {errors.price !== "" ? (
//                 <P
//                   wd="100%"
//                   mt=".3rem"
//                   jfCont="flex-start"
//                   pd="2px 14px 2px 14px"
//                   bg="#FFDCDC"
//                   bd={colorPrice}
//                   color={colorPrice}
//                 >
//                   {errors.price}
//                 </P>
//               ) : (
//                 <p></p>
//               )}
//               <Div flexDir="column" alItems="flex-start">
//                 <P color={colorImg} fSize="1.2rem" fWeight="bold">
//                   Imagen{" "}
//                 </P>
//                 {/* <input className={s.formInput} name="img"br="0" pd="0 0 0 .3em"outline="none"bdB={`3px solid ${colorImg}`} 
//                     onChange={(e)=>{handlerSetInput(e)}} type="text" defaultValue={input.img}/> */}
//                 <CloudinaryUploader className={s.formInput}folder={"productos"} inputProduct={input} setInputProduct={setInput}/>
//               </Div>
//               {errors.img !== "" ? (
//                 <P
//                   wd="100%"
//                   mt=".3rem"
//                   jfCont="flex-start"
//                   pd="2px 14px 2px 14px"
//                   bg="#FFDCDC"
//                   bd={colorImg}
//                   color={colorImg}
//                 >
//                   {errors.img}
//                 </P>
//               ) : (
//                 <p></p>
//               )}
//               <Button
//                 value="first"
//                 onClick={(e) => handlerSetFormPage(e)}
//                 mt="1rem"
//                 wd="8rem"
//                 bg="#DC4A61"
//               >
//                 Siguiente
//               </Button>
//             </Div>

//             <Div flexDir="column" ml="10rem" mr="10rem" wd="30rem" hg="100%">
//               <Div flexDir="column" alItems="flex-start" hg="12rem">
//                 {errors.stock !== "" ? (
//                   <P
//                     pd="2px 14px 2px 14px"
//                     bg="#FFDCDC"
//                     bd={colorStock}
//                     color={colorStock}
//                   >
//                     {errors.stock}
//                   </P>
//                 ) : (
//                   <p></p>
//                 )}
//                 <Div jfCont="space-between">
//                   <Div flexDir="column" hg="100%" alItems="flex-start">
//                     <Select
//                       name="categories"
//                       bd={colorCategory}
//                       wd="12.5rem"
//                       br="none"
//                       onChange={(e) => {
//                         handlerSetInput(e);
//                       }}
//                       type="text"
//                     >
//                       <Option name="default" value="default">
//                         Selecciona Categoría
//                       </Option>

//                       {categories.length === 0
//                         ? null
//                         : categories.map((cat) => (
//                             <Option
//                               value={cat.category}
//                               name={cat.category}
//                               key={cat.id}
//                             >
//                               {cat.category}
//                             </Option>
//                           ))}
//                       {errors.categories !== "" ? (
//                         <P
//                           pd="2px 14px 2px 14px"
//                           bg="#FFDCDC"
//                           bd={colorCategory}
//                           color={colorCategory}
//                         >
//                           {errors.categories}
//                         </P>
//                       ) : (
//                         <P>ASD</P>
//                       )}
//                     </Select>
//                   </Div>

//                   <Div flexDir="column" alItems="flex-start">
//                     <Select
//                       name="brand"
//                       br="none"
//                       bd="#00cc66"
//                       wd="12.5rem"
//                       onChange={(e) => {
//                         handlerSetInput(e);
//                       }}
//                       type="text"
//                       value={input.category}
//                     >
//                       <Option value="default">Selecciona Marca</Option>
//                       {brands.length === 0
//                         ? null
//                         : brands.map((br) => (
//                             <Option value={br.brand} key={br.id}>
//                               {br.brand}
//                             </Option>
//                           ))}
//                     </Select>
//                   </Div>
//                 </Div>
//                 <Div flexDir="column" alItems="flex-start">
//                   <P color={colorStock} fSize="1.2rem" fWeight="bold">
//                     Stock{" "}
//                   </P>
//                   <input
//                     className={!errors.name ? s.formInput : s.formInputDanger}
//                     name="stock"
//                     onChange={(e) => {
//                       handlerSetInput(e);
//                     }}
//                     type="number"
//                     defaultValue={input.stock}
//                   />
//                 </Div>
//               </Div>

//               <Div mt="1rem">
//                 <Button
//                   value="back"
//                   onClick={(e) => handlerSetFormPage(e)}
//                   mr="1rem"
//                   wd="8rem"
//                   bg="#DC4A61"
//                 >
//                   Atras
//                 </Button>
//                 <Button
//                   value="second"
//                   onClick={(e) => handlerSetFormPage(e)}
//                   wd="8rem"
//                   bg="#DC4A61"
//                 >
//                   Siguiente
//                 </Button>
//               </Div>
//             </Div>

//             <Div flexDir="column" wd="30rem" hg="100%" alItems="flex-start">
//               <P color={colorDescription} fSize="1.2rem" fWeight="bold">
//                 Descripción{" "}
//               </P>
//               <TextArea
//                 name="description"
//                 wd="24rem"
//                 hg="10rem"
//                 bd={colorDescription}
//                 pd=".3rem"
//                 txAlign="left"
//                 onChange={(e) => {
//                   handlerSetInput(e);
//                 }}
//                 defaultValue={input.description}
//               />
//               {errors.description !== "" ? (
//                 <P
//                   pd="2px 14px 2px 14px"
//                   bg="#FFDCDC"
//                   bd={colorDescription}
//                   color={colorDescription}
//                 >
//                   {errors.description}
//                 </P>
//               ) : (
//                 <p></p>
//               )}
//               <Div mt="1rem">
//                 <Button
//                   value="back"
//                   onClick={(e) => {
//                     handlerSetFormPage(e);
//                   }}
//                   mr="1rem"
//                   bg="#DC4A61"
//                 >
//                   Atrás
//                 </Button>
//                 {update ? (
//                   <Button
//                     value={true}
//                     onClick={(e) => {
//                       handlerPostOrEdit(e);
//                     }}
//                     bg="#DC4A61"
//                   >
//                     Finalizar edición
//                   </Button>
//                 ) : (
//                   <Button
//                     value={false}
//                     onClick={(e) => {
//                       handlerPostOrEdit(e);
//                     }}
//                     bg="#DC4A61"
//                   >
//                     Crear
//                   </Button>
//                 )}
//               </Div>
//             </Div>
//           </Div>
//         </Div>
//       </Form>
//     </Div>
//   );
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


import { useNavigate } from "react-router-dom";
import s from "./FormPostAndEditProduct.module.css"
import { useState, useEffect } from "react";
import { getBrands, getCategories } from "../../../../utils";
import CloudinaryUploader from "../../../../utils/Cloudinary/UploadImage";
import { postProduct, editProduct } from "../../../../utils";
import { RiErrorWarningFill } from "react-icons/ri"
export default function FormProductPostAndEdit ({ isPost }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    categories: [],
    description: "",
    name: "",
    price: "",
    img: [],
    stock: "",
    brand: "",
  });
  const errors = {
    categories: "",
    description: "",
    name: "",
    price: "",
    img: "",
    stock: "",
  };
  function handlerSetInput(e){
    e.preventDefault();
    console.log("E VALUE: ",e.target.value);
    console.log("E NAME: ",e.target.name);
    if(e.target.value !== "default") {
      if(e.target.name === "categories") {
        if(input.categories.includes(e.target.value)) {
          setInput({
            ...input,
            categories: input.categories.filter((el)=>el!==e.target.value)})
        } else {
          setInput({
            ...input,
            categories: [...input.categories, e.target.value]})
        }
        e.target.value = "default"
      } else {
      setInput({ 
        ...input,
        [e.target.name]: e.target.value
      })        
      }
    }
  }
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([]);
  function handlerDeleteImg(value){
    setInput({
      ...input,
      img: input.img.filter((img) => img !== value)
    })
  }
  function validate () {
    if(input.name.trim() === "") {
      errors.name = "Debes indicar el nombre del producto"
    } else {
      errors.name = ""
    }
    if(input.categories.length === 0) {
      errors.categories = "Debes indicar al menos una categoría"
    } else {
      errors.categories = ""
    }
    if(input.description.trim() === "") {
      errors.description = "Debes escribir una descripción"
    } else if (input.description.length > 260) {
      errors.description = "La descripción debe tener como máximo 260 caracteres"
    } else {
      errors.description = ""
    }
    if(input.img.length === 0) {
      errors.img = "Debes cargar al menos una imagen"
    } else {
      errors.img = ""
    }
    if(input.price.toString() === "") {
      errors.price = "Debes indicar el precio"
    } else {
      errors.price = ""
    }
    if(input.stock === "") {
      errors.stock = "Debes ingresar el stock"
    } else {
      errors.stock = ""
    }
  }
  async function handlePostOrEdit(isPost) {
    validate();
    for(let prop in errors) {
      if(errors[prop]) {
        return alert(errors[prop])
      }
    }
    try {
      if(isPost) {
        await postProduct(input)
        alert(`Se creó el producto con éxito`)
      } else {
        await editProduct(input)
        alert(`Se editó el producto con éxito`)
      }
      navigate("/dashboardAdmin?render=products")
    } catch (error) {
      console.log(error);
      alert(`No se pudo realizar ${isPost?"el posteo":"la edición"}`)
    }
  };

  async function handlerReadDb() {
    setBrands(await getBrands())
    setCategories(await getCategories())
  }
  useEffect(() => {
    handlerReadDb()
  }, [])
  useEffect(()=>{
    console.log("INPUT: ", input);
  },[input, brands, categories])
  return (
  <div className={s.container}>

    <button className={s.btnBack}
     onClick={() => navigate("/dashboardAdmin?render=products")} 
    >
      Volver
    </button>

    <div className={s.formContainer}>

      <div className={s.div}> {/* title */}
          <p>Nombre</p>
          <input onChange={(e)=>handlerSetInput(e)}
            type="text"
            name="name"
            value={input.name}
          />
      </div>

      <div className={s.div}> {/* price */}
          <p>Precio</p>
          <input onChange={(e)=>handlerSetInput(e)}
            type="number"
            name="price"
            value={input.price}
          />
      </div> 

      <div className={s.div}> {/* stock */}
          <p>Stock</p>
          <input onChange={(e)=>handlerSetInput(e)}
            type="number"
            name="stock"
            value={input.stock}
          />
      </div>

      <div className={s.div}> {/* brand */}
          <p>Marca</p>
          <select onChange={(e)=>handlerSetInput(e)}
            type="text"
            name="brands"
          >
            <option value="default"key="default1777">Selecciona Marca</option>
            {
              brands.length !== 0
              ? brands.map((br) => (
                <option value={br.brand}key={br.id}>{br.brand}</option>
              ))
              : null
            }
          </select>
      </div>
      <div className={s.div}> {/* categories */}
          <p>Categorías</p>
          <select onChange={(e)=>handlerSetInput(e)}
            type="text"
            name="categories"
          >
            <option value="default"key="default1777">Selecciona Categorías</option>
            {
              categories.length !== 0
              ? categories.map((cat) => (
                <option value={cat.category}key={cat.id}>{cat.category}</option>
              ))
              : null
            }
          </select>
          <div className={s.divSelectedCategories}>
            {
              input.categories.map((el)=> <p>{el}</p> )
            }
          </div>
      </div>

      <div className={s.divDescription}> {/* description */}
          <p>Descripción</p>
          <textarea onChange={(e)=>handlerSetInput(e)}
            type="text"
            name="description"
            value={input.description}
          />
          <div className={s.divDescriptionLength}>
            {
              input.description.length > 260
              ? <RiErrorWarningFill 
                  color='#e64a4a'
                  fontSize='1.1rem'
                  />
              : null
            }
            <p className={
                input.description.length > 260
                ? s.descriptionLengthDanger
                : null
              }
            >
                {`${input.description.length}/260`}
            </p>
          </div>
      </div>

      <div className={s.div}> {/* img */}
          <p>Imagen</p>
          <CloudinaryUploader className={s.formInput}folder={"productos"} inputProduct={input} setInputProduct={setInput}/>
          <div className={s.divImgsProducts}>
            {
              input.img[0] == ""
              ? null
              : input.img.map((el) => 
                <div className={s.divImgProduct}>
                  <button className={s.btnDeleteImg}onClick={(e)=>handlerDeleteImg(el)}>X</button>
                  <img src={el}className={s.imgProduct}/>
                </div>)
            }
          </div>
        <div className={s.divBtns}>

        <button onClick={()=>{handlePostOrEdit(isPost)}}className={s.btnSubmit}>
          {isPost?`Postear Producto`:`Editar Producto`}  
        </button>
      </div>
      </div>

    </div>
  </div>
  )
}