import React, { useState } from "react";
import { Div, P, Button, H1, Img, Input } from "../../../utils/StyledComponents/StyledComponents";

export default function ProductCard ({ handlerSetCart, handleRemoveItemCart, handlerEditProduct, path, product, name,category, description, id, img, price, stock}) {
const [amountToAdd, setAmountToAdd] = useState(1);
function handlerSetAmountToAdd (e) {
    e.preventDefault()
    if((/^\d+$/).test(e.target.value)) {
        console.log("TRUE")
        setAmountToAdd(e.target.value)
    }
}
function addOne(){
    setAmountToAdd(`${Number(amountToAdd)+1}`)
}
function subtractOne(){
    if(amountToAdd != 1) {
        setAmountToAdd(`${Number(amountToAdd)-1}`)
    }
}
function handlerBtnAdd(e){
    if(amountToAdd >= 1) {
        handlerSetCart(e, {...product, amountToAdd: Number(amountToAdd), img: product.img[0]})
        setAmountToAdd(1);  
    }
}

    return (
        <Div wd="14rem" hg="18rem"flexDir="column"bd="black" mt="1rem" mr="1rem" jfCont="space-between" >
            <Div hg="1rem" bg="green"wd="100%">
                <P bg="red"fSize=".7rem"hg="10px">Producto: {name}</P>
            </Div>

            <Img br=".5rem" wd="100%" hg="10rem"src={img} alt="img not found" />

            <Div hg="1rem" bg="green">
                <P bg="red"fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Precio: {price}</P>
            </Div>
            <Div hg="1rem" bg="green">
                <P bg="red"fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Category: {category}</P>
            </Div>
            <Div hg="1rem" bg="green">
                <P bg="red"fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Stock: {stock}</P>
            </Div>
            {path === "adm"? <button onClick={(e)=>{handlerEditProduct(e, product)}}>Editar</button> :null}
            {path !== "adm"
            ? <Div wd="100%" bg='red'jfCont="space-around">
                <Div pd="0"jfCont="center">
                    <Button fWeight="700"fSize="24px" hg="28px"wd="30px"br="0" onClick={subtractOne}>-</Button>
                    <Input wd="40px"hg="14px" br="0" type="text" value={amountToAdd} onChange={(e)=>handlerSetAmountToAdd(e)}/>
                    <Button fWeight="700"fSize="24px" hg="28px"wd="30px"br="0" onClick={addOne}>+</Button>
                </Div>
                <Button wd="120px"hg="26px" onClick={(e)=>handlerBtnAdd(e)}>Agregar</Button>
              </Div>
            : null}
        </Div>
    )
}