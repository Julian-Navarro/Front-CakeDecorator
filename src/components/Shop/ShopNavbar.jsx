import { Div, Input, Button, Img, Span } from "../../utils/StyledComponents/StyledComponents";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { HamburgerIcon, CloseIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react"

export function ShopNavbar ({ isOpen, setIsOpen, handlerSearchProducts }) {
    const navigate = useNavigate()
    const [input, setInput] = useState("")
    function handlerSearchProductsNavbar (e) {
        if(input.trim() !== "") {
            handlerSearchProducts(input.trim())
            setInput("")
        } else {
            alert("Debes indicar el nombre de un producto")
            setInput("")
        }
    }

    useEffect(()=>{
    },[input])
    return (
        <Div blur="blur(5px)"wd="100%"hg="3rem"bg="rgba(168, 255, 243, 0.438)" pos="relative"posTop="0px"jfCont="space-between"
        >
            <Div ml="10px"bg="transparent">
                 {/* <IconButton
                    borderRadius="6px"
		        	icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
		        	onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true)}
                    w="50px"
                    h="34px"
		            /> */}
                <Input bg="rgba(255, 255, 255, 0.8)" value={input}onChange={(e)=>setInput(e.target.value)}/>
                <Button hg="34px" onClick={(e)=>handlerSearchProductsNavbar(e)}>Buscar</Button>
            </Div>
            <Div wd="12rem"pos="relative"bg="orange">Icono Mundo dulce</Div>
            <Div wd="2.6rem"hg="2.6rem"onClick={()=>navigate("/shop/cart")}blur="blur(5px)"bg="orange"br="50%"mr="10px">
                <Img wd="36px" hg="36px"bg="red" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" />
            </Div>
        </Div>
    )
}