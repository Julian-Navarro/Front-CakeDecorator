import React, { useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import s from "../../../utils/example.module.css"
import { IconButton } from "@chakra-ui/react"
import { MdOutlineAddShoppingCart, MdAddToPhotos, MdDelete } from "react-icons/md"

export default function ProductCard ({ handlerSetCart,handlerSetEditFlag, handleRemoveItemCart, handlerEditProduct, path, brand, product, name,categories, description, id, img, price, stock}) {
const [amountToAdd, setAmountToAdd] = useState(1);
function handlerSetAmountToAdd (e) {
    e.preventDefault()
    if((/^\d+$/).test(e.target.value)) {
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
        if(amountToAdd <= stock) {
            console.log("CASO AMOUNT MENOR O IGUAL AL STOCK");
            handlerSetCart(e, {...product, amountToAdd: Number(amountToAdd), img: product.img[0]})
            setAmountToAdd(1);  
        } else {
            setAmountToAdd(stock);   
        }
    }
}
function handlerDeleteProduct (id) {
    axios.delete(`${HOST}/products/${id}`)
    handlerSetEditFlag() //! El nombre de esta FN no coincide, re-renderiza los componentes padres luego de eliminar un producto
    alert(`Eliminaste el producto "${name}" de tu tienda`)
}
        return (
        <div className={s.container}>
            <div className={s.card}>
                <img src={img} alt="" />
                <div className={s.body}>
                    <h1>{name}</h1>

                    <p className={s.p}>Stock: {stock}</p>
                    {brand?<p className={s.p}>Marca: {brand}</p>:null}
                {path !== "adm"
                ? <div className={s.divBtnsContainer}>
                    <div className={s.divBtns}>
                        <IconButton
                        onClick={subtractOne}
                        className={s.icons}
                        icon={<MdDelete/>}/>
                        <input className={s.input} value={amountToAdd} onChange={(e)=>handlerSetAmountToAdd(e)}/>
                        <IconButton
                        onClick={addOne}
                        className={s.icons}
                        icon={<MdAddToPhotos/>}/>
                        
                    </div>
                    <IconButton 
                    icon={<MdOutlineAddShoppingCart/>}
                    w="3.4rem"
                    h="2.2rem"
                    fontSize="1.4rem"
                    cursor={"pointer"}
                    alignSelf={"flex-start"}
                    marginLeft={".3rem"}
                    marginBottom={".3rem"}
                    bg="lightgray"
                    onClick={(e)=>handlerBtnAdd(e)}
                    className={s.icons}
                    borderRadius={".6rem"}
                    /> 
                  </div>
                : <div className={s.divBtnsContainer}>
                    <div className={s.btnsAdm}>
                        <button onClick={(e)=>{handlerEditProduct(e, product)}}>Editar
                        <IconButton 
                        icon={<MdDelete/>}
                        w="3.4rem"
                        h="2.2rem"
                        fontSize="1.4rem"
                        cursor={"pointer"}
                        alignSelf={"flex-start"}
                        marginLeft={".3rem"}
                        marginBottom={".3rem"}
                        bg="lightgray"
                        borderRadius={".6rem"}
                        />
                        </button>
                    </div>

                    <div className={s.btnsAdm}>
                        <button onClick={()=>{handlerDeleteProduct(id)}}className={s.btnsAdm}>Eliminar
                        <IconButton 
                        icon={<MdDelete/>}
                        w="3.4rem"
                        h="2.2rem"
                        fontSize="1.4rem"
                        cursor={"pointer"}
                        alignSelf={"flex-start"}
                        marginLeft={".3rem"}
                        marginBottom={".3rem"}
                        bg="lightgray"
                        borderRadius={".6rem"}
                        />
                        </button>
                    </div>
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