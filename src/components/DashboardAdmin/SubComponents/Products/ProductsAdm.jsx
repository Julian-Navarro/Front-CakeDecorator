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
        <div>
          <h1>PRODUCT PADRE</h1>
            {
            path==="adm" 
            ? <button onClick={(e)=>{handlerSetCreateProductFlag(e)}}>{createProductFlag? "Cerrar Formulario":"Crear Nuevo Producto"}</button>
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
            <div>
                <input type="text" onChange={(e)=>handlerSetInput(e)}/>
                <button onClick={(e)=>handlerSearchProducts(e)}>Buscar</button>
            </div>
                <button onClick={()=>setProducts(allProducts)}>Todos los productos</button>
          <ProductCards
            products={products}
            path="adm" 
            handlerEditProduct={handlerEditProduct}
            handlerSetEditFlag={handlerSetEditFlag}/>
            
        </div>

    )
}