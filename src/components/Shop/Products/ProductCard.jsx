import React, { useState } from "react";
import { Div, P, Button, H1, Img, Input } from "../../../utils/StyledComponents/StyledComponents";
import axios from "axios";
import { HOST } from "../../../utils";

export default function ProductCard ({ handlerSetCart,handlerSetEditFlag, handleRemoveItemCart, handlerEditProduct, path, brand, product, name,categories, description, id, img, price, stock}) {
    console.log("CATEGORIES: ", categories);
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
function handlerDeleteProduct (id) {
    axios.delete(`${HOST}/products/${id}`)
    handlerSetEditFlag() //! El nombre de esta FN no coincide, re-renderiza los componentes padres luego de eliminar un producto
    alert(`Eliminaste el producto "${name}" de tu tienda`)
}

    return (
        <Div mt="1rem" mr="1rem" bg="aliceblue"flexDir="column"hg="17.5rem"wd="14rem"bd="black" jfCont="space-between"_hovBSh="0 0 .8rem .1rem rgba(0, 0 , 0, 0.3)">
                <Div hg="1rem" wd="100%"mt="5px"mb="5px">
                    <P fSize="1rem"hg="10px">{name}</P>
                </Div>
                <Img br="0" wd="100%" minHg="9rem"src={img} alt="img not found" />
            

            <Div flexDir="column" wd="100%" hg="100%"bg="lightblue"alItems="flex-start"jfCont="space-between"mb="6px"mt="6px">

                <Div bg="blue"hg="1.8rem"wd="100%">
                        { categories.length > 0 
                        ? <Div alSelf="center"fSize=".7rem"wd="100%"hg="100%"pd="0"fWeight="bold"flWr="wrap" >
                            <P bg="green"fSize=".5rem"fWeight="bold">Categoría/s: </P> 
                            { categories.map((cat, i)=> <P pd="2px"bg="pink"fSize=".5rem">{cat} { categories.length !== 1 ? i === categories.length - 1 ? null : "," : null}</P>) } 
                          </Div>
                         : null }
                </Div>
                <Div jfCont="space-around"wd="100%"bg="red">
                    <Div hg="1rem" bg="violet">
                        <P fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Precio: ${price}</P>
                    </Div>
                    <Div hg="1rem"bg="violet" >
                        <P fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Stock: {stock}u</P>
                    </Div>
                </Div>

                {brand?<P bg="greenyellow"fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="100%">Marca: {brand}</P>:null}

                {path !== "adm"
                ? <Div wd="100%"jfCont="space-around"bg="yellow">
                    <Div pd="0"jfCont="center"bg="orange">
                        <Button fWeight="700"fSize="24px" hg="28px"wd="30px"br="4px" onClick={subtractOne} _hovBSh="0 0 .5rem .02rem rgba(0, 0 , 0, 0.3)"_hovBg="greenyellow">-</Button>
                        <Input wd="40px"hg="14px" type="text" br="4px"value={amountToAdd} onChange={(e)=>handlerSetAmountToAdd(e)}/>
                        <Button fWeight="700"fSize="24px" hg="28px"wd="30px"br="4px" onClick={addOne} _hovBSh="0 0 .5rem .02rem rgba(0, 0 , 0, 0.3)"_hovBg="greenyellow">+</Button>
                    </Div>
                    <Button wd="120px"hg="30px" onClick={(e)=>handlerBtnAdd(e)} _hovBSh="0 0 .5rem .02rem rgba(0, 0 , 0, 0.3)"_hovBg="greenyellow">Agregar</Button>
                  </Div>
                : <Div wd="100%"jfCont="space-around" bg="black">
                    <Button hg="1.8rem"onClick={(e)=>{handlerEditProduct(e, product)}} _hovBSh="0 0 .5rem .02rem rgba(0, 0 , 0, 0.3)"_hovBg="greenyellow">Editar</Button>
                    <Button hg="1.8rem"_hovBSh="0 0 .5rem .02rem rgba(0, 0 , 0, 0.3)"_hovBg="greenyellow" onClick={()=>{handlerDeleteProduct(id)}}>Eliminar</Button>
                  </Div> }
            </Div>
        </Div>
    )
}