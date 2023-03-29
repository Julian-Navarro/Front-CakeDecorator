import React, { useEffect, useState } from "react";
import FormPostAndEditProducts from "./FormPostAndEditProducts"
import ProductCards from "../../../Shop/Products/ProductCards";
export default function ProductsAdm({ path }) {
    const [crtProdFlag, setCrtProdFlag] = useState(false); //? createProductFlag
    const [editFlag, setEditFlag] = useState(false);
    const [productToEdit, setProductToEdit] = useState(false);

    function handlerSetCreateProductFlag() {
    if(crtProdFlag) {
        setCrtProdFlag(false)
    } else {
        setCrtProdFlag(true)
        setProductToEdit(false)
    }
}
     function handlerEditProduct(e, product) {
        e.preventDefault();
        handlerSetCreateProductFlag()
        if(product !== undefined) {
            setEditFlag(true)
            setProductToEdit({...product})
            setCrtProdFlag(false)
            window.scroll(0, 400)
            console.log(product, editFlag, crtProdFlag);
        } else {
            setProductToEdit(false)
            setCrtProdFlag(false)            
        }
    }
    function handlerSetCreateProductFlag() {
        setCrtProdFlag(!crtProdFlag)
        setProductToEdit(false)
    }
useEffect(()=>{
    console.log("RENDERING PRODUCTS ADM");
},[editFlag, productToEdit])
    return (
        <div>
            <h1>Products</h1>
            <button onClick={()=> handlerSetCreateProductFlag()}>{
                crtProdFlag
                ? "Cerrar Formulario"
                : "Crear Nuevo Producto" }
            </button>
            { crtProdFlag 
            ? <FormPostAndEditProducts/> 
            : null }



            { productToEdit
            ? <FormPostAndEditProducts 
              setProductToEdit={setProductToEdit}
              course={productToEdit}/>
            : null
            }
            <ProductCards 
                handlerEditProduct={handlerEditProduct}
                path="adm"/>
        </div>
    )
}