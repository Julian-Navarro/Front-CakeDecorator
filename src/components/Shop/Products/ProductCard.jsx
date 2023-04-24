import React, { useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import s from "../../../utils/example.module.css"

export default function ProductCard ({ handlerSetCart,handlerSetEditFlag, handleRemoveItemCart, handlerEditProduct, path, brand, product, name,categories, description, id, img, price, stock}) {
    // console.log("CATEGORIES: ", categories);
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

    // return (
    //     <div hg="18rem"wd="15rem">
    //     <div _hovHg="17.5rem"_hovImgHg="11rem"_hovUlDis="flex"_hovBShUl="0 30px .8rem .1rem rgba(0, 0 , 0, 0.3)"bg="aliceblue"mt="1rem" mr="1rem"flexDir="column"hg="15rem"wd="14rem" jfCont="space-between"_hovBSh="0 0 .8rem .1rem rgba(0, 0 , 0, 0.3)">
    //         <Img br="7px" wd="100%" hg="13rem"src={img} alt="img not found" />

    //         <div mb="5px"ml="1rem"mt=".3rem"hg="1.8rem" wd="100%"jfCont="flex-start"alItems="flex-end">
    //             <P fSize="1rem"pd="0"fWeight="500"hg="10px" color="gray">Precio: ${price}</P>
    //         </div>
            
            
    //         <Ul br="0px 0px 8px 8px"pos="relative"zInd="1"display="none"flexDir="column" wd="100%" hg="100%"pd="0"bg="aliceblue"alItems="flex-start"jfCont="space-between"mt="6px">
                
    //             <div jfCont="space-around"wd="100%"hg="100%">

    //                 <div hg="100%"wd="70%"mt="5px"mb="5px">
    //                     <Li pd="0"mt="5px"flWr="wrap"fSize=".8rem"hg="100%"ml="5px"mr="5px"txtDec="underline">{name}</Li>
    //                 </div>
    //                 <div hg="1rem"mr="5px">
    //                     <P fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="10px" >Stock: {stock}u</P>
    //                 </div>
    //             </div>
    //             <div wd="100%"hg="100%"flexDir="column">
    //                     { categories.length > 0 
    //                     ? <Ul boxSh="none !important"alSelf="center"fSize=".7rem"wd="100%"hg="100%"pd="0"fWeight="bold"flWr="wrap" >
    //                         <Li fSize=".7rem"fWeight="bold">Categoría/s: </Li> 
    //                         { categories.map((cat, i)=> <Li pd="2px"fSize=".7rem">{cat} { categories.length !== 1 ? i === categories.length - 1 ? null : "," : null}</Li>) } 
    //                       </Ul>
    //                      : null }
    //             {brand?<Li mb="5px"fSize=".7rem"wd="100%"pd="0"fWeight="bold"hg="100%">Marca: {brand}</Li>:null}
    //             </div>

                {path !== "adm"
                ? <div >
                    <div >
                        <button onClick={subtractOne}>-</button>
                        <input value={amountToAdd} onChange={(e)=>handlerSetAmountToAdd(e)}/>
                        <button onClick={addOne}>+</button>
                    </div>
                    <button onClick={(e)=>handlerBtnAdd(e)}>Agregar</button>
                  </div>
                : <div>
                    <button onClick={(e)=>{handlerEditProduct(e, product)}}>Editar</button>
                    <button onClick={()=>{handlerDeleteProduct(id)}}>Eliminar</button>
                  </div> }
    //         </Ul>
    //     </div>
    //     </div>
    // )
    //path, brand, product, name,categories, description, id, img, price, stock
        return (
        <div className={s.container}>
            <div className={s.card}>
                <img src={img} alt="" />
                <div className={s.body}>
                    <h1>{name}</h1>
                    <div className={s.divCategories}>Categorias: {categories.map((cat, i)=> <li pd="2px"fSize=".7rem">{cat} { categories.length !== 1 ? i === categories.length - 1 ? null : "," : null}</li>)}</div>
                    <p>Stock: {stock}</p>
                    {brand?<p>Marca: {brand}</p>:null}
                    {/* <p>{description}</p> */}
                {path !== "adm"
                ? <div className={s.divBtnsContainer}>
                    <div className={s.divBtns}>
                        <button onClick={subtractOne}>-</button>
                        <input className={s.input} value={amountToAdd} onChange={(e)=>handlerSetAmountToAdd(e)}/>
                        <button onClick={addOne}>+</button>
                    </div>
                    <button onClick={(e)=>handlerBtnAdd(e)}>Agregar</button>
                  </div>
                : <div className={s.divBtnsContainer}>
                    <button onClick={(e)=>{handlerEditProduct(e, product)}}>Editar</button>
                    <button onClick={()=>{handlerDeleteProduct(id)}}>Eliminar</button>
                  </div> }
                </div>
            </div>
            <div className={s.divBottom}>
                <li>${price}</li>
                <button className={s.btn}>Ver detalles</button>
            </div>
        </div>
    )
}