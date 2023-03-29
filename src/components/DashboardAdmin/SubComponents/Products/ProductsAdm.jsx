import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../../../utils";
import ProductCards from "../../../Shop/Products/ProductCards";
import FormProductPostAndEdit from "./FormPostAndEditProducts";

export default function ProductsAdm ({ path }) {
    const [createProductFlag, setCreateProductFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false)
    const [productToEdit, setProductToEdit] = useState(false)
    const [componentProductListFlag, setComponentProductListFlag] = useState(false)
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
            window.scroll(0, 400)
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
    const [products, setProducts] = useState(false);
    async function getProducts(){
        const productsDB = await axios.get(`${HOST}/products`)
        setProducts([...productsDB.data])
    }
    
useEffect(()=>{
    console.log("RENDERING: PRODUCT ADM: ");
    getProducts()
},[productToEdit, editFlag, componentProductListFlag])
useEffect(()=>{},[products])
    return (
        <div>
          <h1>PRODUCT PADRE</h1>
            {
            path==="adm" 
            ? <button onClick={(e)=>{handlerSetCreateProductFlag(e)}}>{createProductFlag? "Cerrar Formulario":"Crear Nuevo Curso"}</button>
            :null
            }
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
                //! CASO HAY QUE CREAR UN CURSO Y NO EDITARLO
                createProductFlag === true
                ? <FormProductPostAndEdit 
                    handlerSetComponentProductListFlag={handlerSetComponentProductListFlag} />
                : null
            }
          <ProductCards
            products={products}
            path="adm" 
            handlerEditProduct={handlerEditProduct}/>
        </div>

    )
}