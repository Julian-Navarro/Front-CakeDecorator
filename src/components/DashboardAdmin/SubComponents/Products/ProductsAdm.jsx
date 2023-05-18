import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../../../utils";
import ProductCards from "../../../Shop/Products/ProductCards";
import FormProductPostAndEdit from "./FormPostAndEditProducts";
import { Div, Button, P, Input } from "../../../../utils/StyledComponents/StyledComponents";
export default function ProductsAdm ({ path }) {
    const [createProductFlag, setCreateProductFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false)
    const [productToEdit, setProductToEdit] = useState(false)
    const [componentProductListFlag, setComponentProductListFlag] = useState(false)
    const [allProducts, setAllProducts] = useState(false);
    const [products, setProducts] = useState([])
    const [input, setInput] = useState("");
    function handlerSetComponentProductListFlag () {
        if(componentProductListFlag) {
            setComponentProductListFlag(false)
        } else {
            setComponentProductListFlag(true)
        }
    }    
    function handlerSetCreateProductFlag(e) {
        e.preventDefault();
        if(createProductFlag) {
            setCreateProductFlag(false)
        } else {
            setCreateProductFlag(true)
            setProductToEdit(false)
        }
    }
     function handlerEditProduct(e, product) {
        e.preventDefault();
        handlerSetEditFlag()
        if(product !== undefined) {
            setProductToEdit({...product})
            setCreateProductFlag(false)
            // window.scroll(0, 100)
        } else {
            setProductToEdit(false)
            setCreateProductFlag(false)            
        }
    }
    function handlerSetEditFlag() {
        if(editFlag) {
            setEditFlag(false)
        } else {
            setEditFlag(true)
        }
    }   
    async function getAllProducts(){
        const productsDB = await axios.get(`${HOST}/products`)
        setAllProducts(productsDB.data)
        setProducts(productsDB.data)    
    }
    function handlerSetInput(e){
        e.preventDefault();
        setInput(e.target.value);
    }
    function handlerSearchProducts(e){
        e.preventDefault();
        setProducts(allProducts.filter((pr)=>pr.name.toLowerCase().includes(input.toLowerCase())))
    }
useEffect(()=>{
    // console.log("RENDERING: PRODUCT ADM: ");
    getAllProducts()
    // console.log("ALL PRODUCTS: ", allProducts);
},[productToEdit, editFlag, componentProductListFlag])
useEffect(()=>{},[allProducts, products])
    return (
        <Div flexDir="column"bg="gray"pd="5px">
          <Div bg="#dc4a61"mb="1rem"br=".5rem"hg="10rem"boxSh="2px 2px .4rem .1rem rgb(0,0,0,0.35), inset 0 0 2.5rem .4rem #cc4357">
            {
            path==="adm" 
            ? <Button onClick={(e)=>{handlerSetCreateProductFlag(e)}}>
                {createProductFlag 
                ? "Cerrar Formulario" 
                :"Crear Nuevo Producto"}
              </Button>
            : null
            }
            <Div>
                <Input type="text" onChange={(e)=>handlerSetInput(e)}/>
                <Button onClick={(e)=>handlerSearchProducts(e)}>Buscar</Button>
            </Div>
            <Button onClick={()=>setProducts(allProducts)}>Todos los productos</Button>
          </Div>
          <Div bg="rgb(0,0,0,0.35)"blur="blur(3px)"pd="10px"pos="sticky"posTop="0px"alSelf="flex-end"zInd="2"
            wd={productToEdit || createProductFlag ?"100%":"10%"}hg={productToEdit || createProductFlag ?"100vh":"1rem"}>
            <Div bg="red"hg="1rem"wd="100%">
            {
                productToEdit !== false
                ? <FormProductPostAndEdit 
                handlerSetComponentProductListFlag={handlerSetComponentProductListFlag} 
                update={true} 
                product={productToEdit} 
                handlerEditProduct={handlerEditProduct}/>
                : null
            }
            {
            createProductFlag === true
            ? <FormProductPostAndEdit 
            handlerSetComponentProductListFlag={handlerSetComponentProductListFlag} />
            : null
            }
            </Div>
          </Div>
          <ProductCards
            products={products}
            path="adm" 
            handlerEditProduct={handlerEditProduct}
            handlerSetEditFlag={handlerSetEditFlag}
            handlerSetComponentProductListFlag={handlerSetComponentProductListFlag}/>
            
        </Div>

    )
}