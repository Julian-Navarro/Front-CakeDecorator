import React, { useEffect, useState } from "react";
import { HOST } from "../../../../utils";
import axios from "axios";
import { Button, Div, H1, Input } from "../../../../utils/StyledComponents/StyledComponents";

export default function CreateCategoriesAndBrands () {
    const [categories, setCategories] = useState([]);
    const [flag, setFlag] = useState(false);
    let [input, setInput] = useState({
        category: "",
        brand: ""
    });

    async function getCategories(){
        const categoriesDB = await axios.get(`${HOST}/categories`)
        setCategories(categoriesDB.data)
    } 

    async function handlerDeleteCategory(e) {
        console.log("e.target.value: ", e.target.value);
       await axios.delete(`${HOST}/categories?id=${e.target.value}`)
       setFlag(!flag)
       alert(`Eliminaste la categoría ${e.target.name}`)
    }

    function handlerSetInputCategory(e){
        setInput({
            ...input,
            category: e.target.value
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
    }

useEffect(()=>{
    getCategories()
},[flag])
useEffect(()=>{
    console.log("RENDERING CATEGORIES");
},[categories, input])
    return (
        <Div bg="orangered" flexDir="column">
            <H1>Crea o elimina categorias y marcas de Productos</H1>
            <Div>
                <Input type="text" hg="2rem"fSize="1.8rem"value={input.category}onChange={(e)=>handlerSetInputCategory(e)}/>
                <Button onClick={()=>{handleCreateCategory()}}>Crear categoria</Button>
            </Div>
            <Div bg="transparent"flWr="wrap">
            {
                categories.length > 0 
                ? categories.map((cat) => 
                <Div bg="orange" wd="200px"pd="0"key={cat.id}>
                    <H1 bg="green" fSize="1.2rem"hg="1rem"wd="70%">{cat.category}</H1>
                    <Button bg="gray"wd="20%"hg="1.8rem" pd="10px 10px 10px 10px" _hovBg="orangered"value={cat.id} name={cat.category}onClick={(e)=>handlerDeleteCategory(e)}>X</Button>
                </Div>)
                : null
                }
            </Div>


            <br /><br /><br />




            <Div>
                <Input type="text" hg="2rem"fSize="1.8rem"value={input.brand}onChange={(e)=>""}/>
                <Button onClick={()=>{handleCreateCategory()}}>Crear Marca</Button>
            </Div>


            <Div bg="transparent"flWr="wrap">
            {/* {
                categories.length > 0 
                ? categories.map((cat) => 
                <Div bg="orange" wd="200px"pd="0"key={cat.id}>
                    <H1 bg="green" fSize="1.2rem"hg="1rem"wd="70%">{cat.category}</H1>
                    <Button bg="gray"wd="20%"hg="1.8rem" pd="10px 10px 10px 10px" _hovBg="orangered"value={cat.id} name={cat.category}onClick={(e)=>handlerDeleteCategory(e)}>X</Button>
                </Div>)
                : null
                } */}
            </Div>

        </Div>
    )
}