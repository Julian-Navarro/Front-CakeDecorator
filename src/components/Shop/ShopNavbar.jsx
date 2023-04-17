import { Div, Input, Button, Img } from "../../utils/StyledComponents/StyledComponents";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react"

export function ShopNavbar ({ isOpen, setIsOpen, handlerSearchProducts }) {
    const navigate = useNavigate()
    const [input, setInput] = useState()
    return (
        <Div blur="blur(5px)"wd="100%"bg="rgba(168, 255, 243, 0.438)" pos="sticky"jfCont="space-between">
            <Div ml="10px"bg="transparent">
                 <IconButton
                    borderRadius="6px"
		        	icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
		        	onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true)}
                    w="50px"
                    h="34px"
		            />
                <Input bg="rgba(255, 255, 255, 0.8)" onChange={(e)=>setInput(e.target.value)}/>
                <Button hg="34px" onClick={()=>handlerSearchProducts(input)}>Buscar</Button>
            </Div>
            <Div wd="12rem"pos="relative"bg="orange">Icono Mundo dulce</Div>
            <Div wd="2.6rem"hg="2.6rem"onClick={()=>navigate("/shop/cart")}blur="blur(5px)"bg="orange"br="50%"mr="10px">
                <Img wd="36px" hg="36px"bg="red" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" />
            </Div>
            
        </Div>
    )
}