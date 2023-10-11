import React, { useEffect, useState } from "react";
import { HOST } from "../../../../utils";
import axios from "axios";
import s from "./EditCategoriesAndBrands.module.css"

export default function CreateCategoriesAndBrands () {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] =useState([])
    const [flag, setFlag] = useState(false);
    const [input, setInput] = useState({
        category: "",
        brand: ""
    });

    async function getCategories(){
        const categoriesDB = await axios.get(`${HOST}/categories`)
        setCategories(categoriesDB.data)
    } 
    async function getBrands(){
        const brandsDB = await axios.get(`${HOST}/brands`)
        setBrands(brandsDB.data)
    }

    async function handlerDeleteCategory(e) {
        console.log("e.target.value: ", e.target.value);
       await axios.delete(`${HOST}/categories?id=${e.target.value}`)
       setFlag(!flag)
       alert(`Eliminaste la categoría ${e.target.name}`)
    }
    async function handlerDeleteBrand(e) {
        await axios.delete(`${HOST}/brands?id=${e.target.value}`)
        setFlag(!flag)
        alert(`Eliminaste la marca ${e.target.name}`)
    };
    function handlerSetInput(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }) 
    }

    async function handleCreateCategory() {
        await axios.post(`${HOST}/categories`, {category: input.category})
        alert(`Creaste la categoría ${input.category}`)
        setInput({
            ...input,
            category: ""
        });
        setFlag(!flag);
    };
    async function handleCreateBrand() {
    await axios.post(`${HOST}/brands`, { name: input.brand })
    alert(`Creaste la marca ${input.brand}`)
    setInput({
        ...input,
        brand: ""
    });
    setFlag(!flag);
}

useEffect(()=>{
    getCategories()
    getBrands()
},[flag])
useEffect(()=>{
    console.log(brands, categories)
},[categories, input])
    return (
        <div className={s.container}>
            <div>

            <p>Crea o elimina categorias de productos</p>
            <div className={s.divCategories}>
                <input type="text"name="category"value={input.category}onChange={(e)=>handlerSetInput(e)}/>
                <button onClick={()=>{handleCreateCategory()}}>Crear categoria</button>
            </div>
            <div >
            </div>
            {
                categories.length > 0 
                ? categories.map((cat) => 
                <div key={cat.id}>
                    <p>{cat.category}</p>
                    <button value={cat.id} name={cat.category}onClick={(e)=>handlerDeleteCategory(e)}>X</button>
                </div>)
                : <p >No hay categorias creadas</p>
                }
            </div>


<br /><br /><br /><br /><br />


            <p >Crea o elimina marcas de productos</p>
            <div>
                <input type="text"name="brand"
                    value={input.brand}
                    onChange={(e)=>handlerSetInput(e)}/>
                <button onClick={()=>{handleCreateBrand()}}>
                    Crear Marca
                </button>
            </div>


            <div>
                {
                
                brands.length > 0 
                ? brands.map((br) => 
                <div key={br.id}>
                    <p>{br.brand}</p>
                    <button value={br.id} name={br.brand}onClick={(e)=>handlerDeleteBrand(e)}>X</button>
                </div>)
                : <p>No hay marcas creadas</p>
                }
            </div>

        </div>
    )
}