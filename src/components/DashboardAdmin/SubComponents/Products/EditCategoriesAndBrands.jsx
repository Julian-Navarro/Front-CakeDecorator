import React, { useEffect, useState } from "react";
import { HOST } from "../../../../utils";
import axios from "axios";
import { Button, Div, H1, Input, P } from "../../../../utils/StyledComponents/StyledComponents";

export default function CreateCategoriesAndBrands () {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] =useState([])
    const [flag, setFlag] = useState(false);
    let [input, setInput] = useState({
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
    console.log("RENDERING CATEGORIES");
    console.log(brands)
},[categories, input])
    return (
        <Div bg="orangered" flexDir="column"wd="100%">
            <P fSize="1.8rem">Crea o elimina categorias de productos</P>
            <Div>
                <Input type="text" hg="2rem"fSize="1.8rem"name="category"value={input.category}onChange={(e)=>handlerSetInput(e)}/>
                <Button onClick={()=>{handleCreateCategory()}}>Crear categoria</Button>
            </Div>
            <Div bg="transparent"flWr="wrap">
            {
                categories.length > 0 
                ? categories.map((cat) => 
                <Div bg="orange" wd="200px"pd="0"key={cat.id}>
                    <P bg="green" fSize="1rem"hg="1rem"wd="70%">{cat.category}</P>
                    <Button bg="gray"wd="20%"hg="1.8rem" pd="10px 10px 10px 10px" _hovBg="orangered"value={cat.id} name={cat.category}onClick={(e)=>handlerDeleteCategory(e)}>X</Button>
                </Div>)
                : <P fSize="1.4rem">No hay categorias creadas</P>
                }
            </Div>


            <br /><br /><br />




            <P fSize="1.8rem">Crea o elimina marcas de productos</P>
            <Div>
                <Input type="text" hg="2rem"fSize="1.8rem"name="brand"value={input.brand}onChange={(e)=>handlerSetInput(e)}/>
                <Button onClick={()=>{handleCreateBrand()}}>Crear Marca</Button>
            </Div>


            <Div bg="transparent"flWr="wrap">
                {
                
                brands.length > 0 
                ? brands.map((br) => 
                <Div bg="orange" wd="200px"pd="0"key={br.id}>
                    <P bg="green" fSize="1rem"hg="1rem"wd="70%">{br.brand}</P>
                    <Button bg="gray"wd="20%"hg="1.8rem" pd="10px 10px 10px 10px" _hovBg="orangered"value={br.id} name={br.brand}onClick={(e)=>handlerDeleteBrand(e)}>X</Button>
                </Div>)
                : <P fSize="1.4rem">No hay marcas creadas</P>
                }
            </Div>

        </Div>
    )
}