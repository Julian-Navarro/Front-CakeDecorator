import React, { useEffect, useState } from "react";
import { HOST } from "../../../../utils";
import axios from "axios";
import { Button, Div, H1, Input } from "../../../../utils/StyledComponents/StyledComponents";

export default function CreateCategories () {
    const [categories, setCategories] = useState([]);
    const [flag, setFlag] = useState(false);
    let [input, setInput] = useState("");

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

    function handlerSetInput(e){
        setInput(e.target.value) 
    }

    async function handleCreateCategory() {
        await axios.post(`${HOST}/categories`, {category: input})
        alert(`Creaste la categoría ${input}`)
        setInput("");
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
            <H1>Crea o elimina categorias de Productos</H1>
            <Div>
                <Input type="text" value={input}onChange={(e)=>handlerSetInput(e)}/>
                <Button onClick={()=>{handleCreateCategory()}}>Crear una nueva categoria</Button>
            </Div>
            <Div bg="transparent"flWr="wrap">
            {
                categories.length > 0 
                ? categories.map((cat) => 
                <Div bg="orange" wd="300px"pd="0">
                    <H1 bg="green" wd="70%">{cat.category}</H1>
                    <Button bg="gray"wd="20%" pd="10px 10px 10px 10px" value={cat.id} name={cat.category}onClick={(e)=>handlerDeleteCategory(e)}>X</Button>
                </Div>)
                : null
                }
            </Div>
        </Div>
    )
}