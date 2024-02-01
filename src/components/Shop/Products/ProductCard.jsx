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
import iconAdd from "../../../utils/IMAGES/imgsCardProduct/icon-park-outline_buy.png"
import iconGlass from "../../../utils/IMAGES/fluent-emoji-high-contrast_magnifying-glass-tilted-right-white.png"

import { Button, Div, Input, P } from "../../../utils/StyledComponents/StyledComponents";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    stock,
    displayOption,
    breakPoint
}) {
const navigate = useNavigate()
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

useEffect(() => {
// console.log(breakPoint);
},[displayOption, breakPoint])
return (
    <div className={breakPoint!="1"?displayOption==="line"?s.containerAllLine:s.containerAllGrid:s.containerAllGrid}>
        <Div bg="#fff"hg="10rem"ml=".5rem"mr=".5rem" 
            boxSh=".1rem .1rem .3rem .1rem rgb(0,0,0,0.35)"
            mb="1rem"jfCont="space-between"className={s.cardContainer2}
            pos="relative"
            display={breakPoint!="1"?displayOption==="line"?"flex":"none":"none"}
        >
            <div className={s.divIconGlass2}>
                {/* <img src={iconGlass}
                    onClick={()=>navigate(`/products/${id}`)}
                /> */}
                {
                path==="adm"
                ? <button className={s.btnEdit}
                    onClick={()=>navigate(`/dashboardAdmin/editProduct/${id}`)}
                    >
                    <AiFillSetting fontSize={"2rem"}/>
                </button>
                : null
                }
            </div>      
            <Div wd="10rem"hg="10rem"br=".4rem 0 0 .4rem">
              <img src={img[0]}className={s.img2}/>
            </Div>

            <Div wd="43%"hg="10rem"className={s.divDetails}
                alItems="flex-start"jfCont="space-between"flexDir="column"
            >
                <P color="#252525"fWeight="bold"fSize="1rem"
                pd="4px"txAlign="left"letterSp="1px">
                    {name}
                </P>
           
                <Div jfCont="space-between"mb=".3rem"hg="8rem">
                    <Div flexDir="column"wd="12rem"alItems="flex-start">
                        <P color={stock===0?"#F38080":"#4FCF54"}
                            fWeight="bold"fSize="1rem"letterSp="1px"
                        >
                        Stock: {stock===0?"No disponible":"Disponible"}
                        </P>
                        { 
                        brand != false 
                        ? <P fWeight="bold"fSize="1rem"color="#525252"letterSp="1px">
                            Marca: {brand}
                          </P>
                        : null
                        }
                        <P fWeight="bold"fSize="1rem"color="#525252"letterSp="1px">
                            Precio: ${price}
                        </P>
                    </Div>
                    <Div flexDir="column"wd="auto">
                        <Div wd="12rem"pd="2px"hg="3rem"flWr="wrap"jfCont="space-around"mb=".3rem">
                            { categories && categories.length !== 0
                            ? categories.map((cat) => <P 
                                fSize=".8rem"fWeight="bold"br="2rem"letterSp="1px"
                                pd="0 10px 0 10px"bg="#F8F0F6"color="#848CD9"
                                boxSh="1px 1px .1rem .02rem rgb(0,0,0,0.35)">
                                    {cat}
                                </P>)
                            : null
                            }
                        </Div>
                        <Div className={s.divBtnsContainer}pd="0">
                            <Div bg="#edf2f7"wd="8rem"br="2rem"jfCont="space-between"className={s.divBtns}>
                                <IconButton
                                    onClick={subtractOne}
                                    className={s.iconLeft}
                                    icon={<GrSubtractCircle/>}
                                />
                                <Input wd="2rem"hg="2rem"bg="#edf2f7"fnFamily="Open Sans"
                                    value={amountToAdd} fWeight="bold"
                                    onChange={(e)=>handlerSetAmountToAdd(e)}
                                />
                                <IconButton
                                    onClick={addOne}
                                    className={s.iconRight}
                                    icon={<IoMdAddCircleOutline/>}
                                />
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
                                bg="#F1B444"
                                color={"#333"}
                                onClick={(e)=>handlerBtnAdd(e)}
                                borderRadius={"2rem"}
                                transition={".4s"}
                                border={"2px solid #fff"}
                                _hover={{background: "#F6C5F5"}}
                                className={s.iconBuy}
                            />             
                        </Div>
                    </Div>
                </Div>
            </Div>

            <Div hg="9.6rem"br="0"wd="40%"bdL="2px solid #525252"
                className={s.divDescription}jfCont="flex-start"
                >
                <P color="#525252"hg="10rem"wd="89%"pd="6px 6px 6px 12px"
                fWeight="bold"fSize=".9rem"letterSp="1px"
                txAlign="left"jfCont="flex-start"alItems="flex-start"
                >
                    {description}
                </P>
            </Div>

        </Div>


        <div className={ breakPoint!=="1"
            ? displayOption==="grid"
            ? s.cardContainer
            : s.carContainerDisabled
            : s.cardContainer }
        >
            <div className={s.container}>
                <div className={s.divPrice}>
                    <p className={s.price}>${price}</p>
                </div>
                <div className={s.containerIconAdd}>
                  <div className={s.divIconAdd}onClick={(e)=>handlerBtnAdd(e)}>
                    <img src={iconAdd} className={s.iconAdd}/>
                  </div>
                  <div className={s.divIconGlass}>
                    {/* <img src={iconGlass} onClick={()=>navigate(`/products/${id}`)}className={s.iconGlass}/> */}
                    { path === "adm"?

                        <button className={s.btnEdit2}
                        onClick={()=>{navigate(`/dashboardAdmin/editProduct/${id}`)}}
                        >
                        <AiFillSetting/>
                    </button>
                    : null
                    }
                  </div>
                </div>
                <img src={img[0]} alt=""className={s.img} />
            </div>
            <p className={s.name}>{name}</p>
        </div>
    </div>

    )
}