// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { HOST } from "../../../../utils";
// import ProductCards from "../../../Shop/Products/ProductCards";
// import FormProductPostAndEdit from "./FormPostAndEditProducts";
// import { Div, Button, P, Input } from "../../../../utils/StyledComponents/StyledComponents";
// import { MdOutlineClose } from "react-icons/md"
// import { HiOutlineFolderAdd } from "react-icons/hi"
// import { IoMdRefresh } from "react-icons/io"
// import { RxMagnifyingGlass } from "react-icons/rx"

// export default function ProductsAdm ({ path }) {
//     const [createProductFlag, setCreateProductFlag] = useState(false);
//     const [editFlag, setEditFlag] = useState(false)
//     const [productToEdit, setProductToEdit] = useState(false)
//     const [componentProductListFlag, setComponentProductListFlag] = useState(false)
//     const [allProducts, setAllProducts] = useState(false);
//     const [products, setProducts] = useState([])
//     const [input, setInput] = useState("");
//     function handlerSetComponentProductListFlag () {
//         if(componentProductListFlag) {
//             setComponentProductListFlag(false)
//         } else {
//             setComponentProductListFlag(true)
//         }
//     }    
//     function handlerSetCreateProductFlag(e) {
//         e.preventDefault();
//         if(createProductFlag) {
//             setCreateProductFlag(false)
//         } else {
//             setCreateProductFlag(true)
//             setProductToEdit(false)
//         }
//     }
//      function handlerEditProduct(e, product) {
//         e.preventDefault();
//         handlerSetEditFlag()
//         if(product !== undefined) {
//             setProductToEdit({...product})
//             setCreateProductFlag(false)
//             // window.scroll(0, 100)
//         } else {
//             setProductToEdit(false)
//             setCreateProductFlag(false)            
//         }
//     }
//     function handlerSetEditFlag() {
//         if(editFlag) {
//             setEditFlag(false)
//         } else {
//             setEditFlag(true)
//         }
//     }   
//     async function getAllProducts(){
//         const productsDB = await axios.get(`${HOST}/products`)
//         setAllProducts(productsDB.data)
//         setProducts(productsDB.data)    
//     }
//     function handlerSetInput(e){
//         e.preventDefault();
//         setInput(e.target.value);
//     }
//     function handlerSearchProducts(e){
//         e.preventDefault();
//         setProducts(allProducts.filter((pr)=>pr.name.toLowerCase().includes(input.toLowerCase())))
//     }
//     function enter(e) {
//         if(e.keyCode===13)handlerSearchProducts(e)
//     }
// useEffect(()=>{
//     // console.log("RENDERING: PRODUCT ADM: ");
//     getAllProducts()
//     // console.log("ALL PRODUCTS: ", allProducts);
// },[productToEdit, editFlag, componentProductListFlag])
// useEffect(()=>{},[allProducts, products])
//     return (
//         <Div flexDir="column"pd="5px">
//           <Div bg="#dc4a61"mb="1rem"br=".5rem"hg="10rem"flexDir="column"
//                boxSh="2px 2px .4rem .1rem rgb(0,0,0,0.35), inset 0 0 2.5rem .4rem #cc4357">
//             <Div ml=".5rem"mb=".5rem"flexDir="row"jfCont="flex-start">

//               {
//                 path==="adm" 
//                 ? <Button pd="0"wd="2.5rem" hg="2.5rem" br="3rem"ml=".5rem"bg="#333"
//                     boxSh="1px 1px .2rem .05rem rgb(0,0,0,0.35)"
//                     onClick={(e)=>{handlerSetCreateProductFlag(e)}}>
//                     <HiOutlineFolderAdd fontSize={"1.8rem"}/>
//                   </Button>
//               : null
//               }
//               <Button onClick={()=>setProducts(allProducts)}pd="0"wd="2.5rem" hg="2.5rem" br="3rem"ml=".5rem"bg="#333"
//                 boxSh="1px 1px .2rem .05rem rgb(0,0,0,0.35)">
//                 <IoMdRefresh fontSize={"1.8rem"}/>
//               </Button>
//             </Div>
//               <Div ml=".5rem" jfCont="flex-start">
//                 <Input onChange={(e)=>handlerSetInput(e)}type="text" br="2rem"txAlign="left"pd="0 .4rem 0 .4rem"
//                     mr=".5rem"onKeyUp={(e)=>enter(e)}
//                     hg="2rem"wd="14rem"fontSize="1.1rem"boxSh="0 0 .2rem .1rem rgb(0,0,0,0.35)"/>
//                 <Button onClick={(e)=>handlerSearchProducts(e)}pd="0"wd="2.2rem" hg="2.2rem"br="2rem"bg="#333"
//                     boxSh="1px 1px .2rem .05rem rgb(0,0,0,0.35)"
//                     >
//                     <RxMagnifyingGlass fontSize={"1.8rem"}/>
//                 </Button>
//               </Div>
//           </Div>




//           <Div bg="rgb(0,0,0,0.35)"br=".2rem .2rem 0 0"blur="blur(3px)"trans=".2s"pd="10px"pos="sticky"posTop="0px"alSelf="flex-end"zInd="2"
//             wd={productToEdit || createProductFlag ?"100%":"0px"}hg={productToEdit || createProductFlag ?"100vh":"1rem"}
//             >

//             <Div overflow="hidden"pos="relative"posLeft={productToEdit || createProductFlag ?"0%":"20rem"}>
//             <Div flexDir="column"pos="relative"pd="10px"posLeft={productToEdit || createProductFlag ?"0%":"150%"}trans="1.2s">
//             {
//                 productToEdit !== false
//                 ? <FormProductPostAndEdit 
//                 handlerSetComponentProductListFlag={handlerSetComponentProductListFlag} 
//                 update={true} 
//                 setProductToEdit={setProductToEdit} 
//                 setCreateProductFlag={setCreateProductFlag}
//                 product={productToEdit}/>
//                 : null
//             }
//             {
//                 createProductFlag === true
//                 ? <FormProductPostAndEdit 
//                 handlerSetComponentProductListFlag={handlerSetComponentProductListFlag}
//                 setProductToEdit={setProductToEdit} 
//                 setCreateProductFlag={setCreateProductFlag} />
//                 : null
//             }
//             </Div>
//           </Div>
//           </Div>
//           <ProductCards
//             products={products}
//             path="adm" 
//             handlerEditProduct={handlerEditProduct}
//             handlerSetEditFlag={handlerSetEditFlag}
//             handlerSetComponentProductListFlag={handlerSetComponentProductListFlag}/>
            
//         </Div>

//     )
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { useNavigate } from "react-router-dom"
import Shop from "../../../Shop/Shop"
import s from "./ProductsAdm.module.css"
export default function ProductsAdm({ path, breakPoint }) {
    const navigate = useNavigate()
    return (
        <div>
            <button className={s.btnCreate}
                onClick={()=>{navigate('/createProduct')}}
            >
                Crear un Producto
            </button>
            <Shop breakPoint={breakPoint}/>
        </div>
    )
}