import React, { useState } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import s from "./ProductCard.module.css"
import { IconButton } from "@chakra-ui/react"
import { MdAddToPhotos, MdDelete } from "react-icons/md"
import { AiFillSetting } from "react-icons/ai"
import { IoMdAddCircleOutline } from "react-icons/io"
import { GrSubtractCircle } from "react-icons/gr"
import { FaCartArrowDown } from "react-icons/fa"
import IconAdd from "../../../utils/IMAGES/icons8_buy.png"


import { Button, Div, Input, P } from "../../../utils/StyledComponents/StyledComponents";
export default function ProductCard ({ 
    handlerSetCart,
    handlerSetComponentProductListFlag, 
    handlerEditProduct, 
    path, 
    brand, 
    product, 
    name,
    categories, 
    description, 
    id, 
    img, 
    price, 
    stock
}) {

const newName = name.length > 72 ? name.slice(0, 72) + "..." : name
const [amountToAdd, setAmountToAdd] = useState(1);
function handlerSetAmountToAdd (e) {
    e.preventDefault()
    if((/^\d+$/).test(e.target.value)) { //? Si es un numero positivo
        if(Number(e.target.value) < 1000 && Number(e.target.value) !== 0) {
            setAmountToAdd(Number(e.target.value))
        } else {
            if(Number(e.target.value) === 0) {
                setAmountToAdd(1)
            } else {
                setAmountToAdd(999)
            }
        }
    } else {
        setAmountToAdd(1)
    }
}
function addOne() {
    if(amountToAdd<999) {
        setAmountToAdd(`${Number(amountToAdd)+1}`)
    }
}
function subtractOne() {
    if(amountToAdd != 1) {
        setAmountToAdd(`${Number(amountToAdd)-1}`)
    }
}
function handlerBtnAdd(e) {
    if(amountToAdd >= 1) {
        if(amountToAdd <= stock) {
            handlerSetCart(e, {...product, amountToAdd: Number(amountToAdd), img: product.img[0]})
            setAmountToAdd(1);  
        } else {
            handlerSetCart(e, {...product, amountToAdd: stock, img: product.img[0]})
        }
    }
}
function handlerDeleteProduct (id) {
    axios.delete(`${HOST}/products/${id}`)
    handlerSetComponentProductListFlag()
    alert(`Eliminaste el producto "${name}" de tu tienda`)
}
        return (
        // <div className={s.container}>
        //     <div className={s.card}>
        //         <img src={img} alt="" />
        //         <div className={s.body}>
        //             <h1>{newName}</h1>

        //             <p className={s.p}>Stock: {stock}</p>
        //             {brand?<p className={s.p}>Marca: {brand}</p>:null}
        //         {path !== "adm"
        //         ? <div className={s.divBtnsContainer}>
        //             <div className={s.divBtns}>
        //                 <IconButton
        //                 onClick={subtractOne}
        //                 className={s.icons}
        //                 icon={<MdDelete/>}/>
        //                 <Input 
        //                 wd="2.2em"hg="1.7em"fnFamily="Open Sans"
        //                 value={amountToAdd} 
        //                 onChange={(e)=>handlerSetAmountToAdd(e)}/>
        //                 <IconButton
        //                 onClick={addOne}
        //                 className={s.icons}
        //                 icon={<MdAddToPhotos/>}/>
                        
        //             </div>
        //             <IconButton 
        //             icon={<MdOutlineAddShoppingCart/>}
        //             w="3.4rem"
        //             h="2.2rem"
        //             fontSize="1.6rem"
        //             cursor={"pointer"}
        //             alignSelf={"flex-start"}
        //             marginLeft={".3rem"}
        //             marginBottom={".3rem"}
        //             bg="#252525"
        //             color={"rgb(149, 255, 62)"}
        //             onClick={(e)=>handlerBtnAdd(e)}
        //             className={s.icon}
        //             borderRadius={".6rem"}
        //             /> 
        //           </div>
        //         : <div className={s.divBtnsContainer}>
        //             <div 
        //             onClick={(e)=>{handlerEditProduct(e, product)}}>
        //                 <Button
        //                     bg="#252525"
        //                     _hovBg="#fff"
        //                     bd="#252525"
        //                     _hovCol="#252525"
        //                     wd="2.6rem"
        //                     hg="2.6rem"
        //                     br="2rem"
        //                     pd="0 5px 0 5px"
        //                     fSize="1.1em">
        //                     <AiFillSetting fontSize="1.8rem"/>
        //                 </Button>
        //             </div>

        //             <div 
        //             onClick={()=>{handlerDeleteProduct(id)}}>
        //                 <Button 
        //                     bg="#252525"
        //                     _hovBg="#fff"
        //                     bd="#252525"
        //                     _hovCol="#252525"
        //                     wd="2.6rem"
        //                     hg="2.6rem"
        //                     br="2rem"
        //                     pd="0 5px 0 5px"
        //                     fSize="1.1em"
        //                 >
        //                     <MdDelete fontSize="1.8rem"/>
        //                 </Button>
        //             </div>
        //           </div> }
        //         </div>
        //     </div>
        //     <div className={s.divBottom}>
        //         <li>${price}</li>
        //         <button className={s.btn}>Ver detalles</button>
        //     </div>
        // </div>
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        <Div bg="#fff"hg="10rem"ml=".5rem"mr=".5rem"
            boxSh=".1rem .1rem .3rem .1rem rgb(0,0,0,0.35)"
            mb="1rem"jfCont="space-between">
            <Div wd="10rem"hg="10rem"br=".4rem 0 0 .4rem">
              <img src={img} alt=""className={s.img}/>
            </Div>
            <Div wd="40%"hg="10rem"
                alItems="flex-start"jfCont="space-between"flexDir="column"
                >
              <P color="#252525"fWeight="bold"fSize="1rem"
                pd="4px"txAlign="left">
                {name}
              </P>
              
              <P color={stock===0?"#F38080":"#4FCF54"}
                fWeight="bold"fSize="1rem">
                Stock: {stock===0?"No disponible":"Disponible"}
              </P>
              <Div jfCont="space-between"mb=".3rem">
                <Div flexDir="column"wd="12rem"alItems="flex-start">
                  <P fWeight="bold"fSize="1rem"color="#525252">Marca: {brand}</P>
                  <P fWeight="bold"fSize="1rem"color="#525252">Precio: ${price}</P>
                </Div>
                <Div className={s.divBtnsContainer}pd="0">
                  <Div bg="#edf2f7"wd="8rem"br="2rem"jfCont="space-between"className={s.divBtns}>
                    <IconButton
                    onClick={subtractOne}
                    className={s.iconLeft}
                    icon={<GrSubtractCircle/>}/>
                    <Input wd="2rem"hg="2rem"bg="#edf2f7"fnFamily="Open Sans"
                    value={amountToAdd} fWeight="bold"
                    onChange={(e)=>handlerSetAmountToAdd(e)}/>
                    <IconButton
                    onClick={addOne}
                    className={s.iconRight}
                    icon={<IoMdAddCircleOutline/>}/>
                  </Div> 

                  <IconButton 
                     icon={<FaCartArrowDown/>}
                     w="2.7rem"
                     h="2.7rem"
                     fontSize="1.6rem"
                     cursor={"pointer"}
                     alignSelf={"flex-start"}
                     marginLeft={".3rem"}
                     marginBottom={".3rem"}
                     bg="orange"
                     color={"#333"}
                     onClick={(e)=>handlerBtnAdd(e)}
                     borderRadius={"2rem"}
                     transition={".4s"}
                     border={"2px solid #fff"}
                     _hover={{background: "#4FCF54"}}
                     className={s.iconBuy}
                     />                   
                </Div>
              </Div>
            </Div>

            <Div hg="9.6rem"br="0"wd="40%"bdL="2px solid #525252">
                <P color="#525252"hg="10rem"wd="100%"pd="6px 6px 6px 12px"
                  fWeight="bold"fSize=".9rem"letterSp="1px"                 txAlign="left"jfCont="flex-start"alItems="flex-start"
                  >
                  {description}
                </P>
            </Div>
        </Div>
    )
}