import React, { useState } from "react";
import { Div, P, Button, H1, Img, Input } from "../../../utils/StyledComponents/StyledComponents";

export default function ProductCard ({ handlerSetCart, handleRemoveItemCart, handlerEditProduct, path, product, name,category, description, id, img, price, stock}) {
console.log("PATH", path);
const [amountToAdd, setAmountToAdd] = useState(0);
function handlerSetAmountToAdd (e) {
    e.preventDefault()
console.log("AAAAAAAAAAAAAAAAAA", e.target.value);
setAmountToAdd(e.target.value)
}
function handler (){
    console.log("amountToAdd: ", amountToAdd);
}
    return (
        <Div wd="18rem" flexDir="column"bd="black" mt="1rem" mr="1rem" >
            <P bg="red">Producto: {name}</P>
            <Img br=".5rem"wd="100%"src={img} alt="img not found" />
            <P bg="red">Precio: {price}</P>
            <P bg="red">Category: {category}</P>
            <P bg="red">Stock: {stock}</P>
            {path === "adm"? <button onClick={(e)=>{handlerEditProduct(e, product)}}>Editar</button> :null}
            {path !== "adm"
            ? <Div wd="100%" bg='red'jfCont="center">
                <Input wd="40px" type="number" onChange={(e)=>handlerSetAmountToAdd(e)}></Input>
                <Button onClick={(e)=>{handler(e)}}>Agregar</Button>
              </Div>
            : null}
        </Div>
    )
}