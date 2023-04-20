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
        <Div mt="1rem" mr="1rem" flexDir="column"hg="16rem">
            <Div wd="14rem" hg="11.5rem"flexDir="column"bd="black" jfCont="space-between" >
                <Div hg="1rem" wd="100%">
                    <P bg="transparent"fSize="1rem"hg="10px">{name}</P>
                </Div>
                <Img br=".3rem" wd="100%" hg="10rem"src={img} alt="img not found" />
            
            </Div>

            <Div flexDir="column"  wd="100%" hg="100%"alItems="flex-start"jfCont="space-between">

                <Div hg="1rem" >
                    <P fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Category: {category}</P>
                </Div>
                <Div jfCont="space-around"wd="100%">
                    <Div hg="1rem" >
                        <P fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Precio: {price}</P>
                    </Div>
                    <Div hg="1rem" >
                        <P fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Stock: {stock}</P>
                    </Div>
                </Div>

                {path === "adm"? <button onClick={(e)=>{handlerEditProduct(e, product)}}>Editar</button> :null}
                {path !== "adm"
                ? <Div wd="100%"jfCont="space-around">
                    <Div pd="0"jfCont="center">
                        <Button fWeight="700"fSize="24px" hg="28px"wd="30px"br="0" onClick={subtractOne}>-</Button>
                        <Input wd="40px"hg="14px" br="0" type="text" value={amountToAdd} onChange={(e)=>handlerSetAmountToAdd(e)}/>
                        <Button fWeight="700"fSize="24px" hg="28px"wd="30px"br="0" onClick={addOne}>+</Button>
                    </Div>
                    <Button wd="120px"hg="26px" onClick={(e)=>handlerBtnAdd(e)}>Agregar</Button>
                  </Div>
                : null}

            </Div>
        </Div>
    )
}