import { useState } from "react"
import { Div, P, Ul, Li } from "../../../utils/StyledComponents/StyledComponents"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react"
import { useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../utils"
export default function LeftSideBar({ handlerSetProducts, isOpen }) {
    // const [isOpen, setIsOpen] = useState(false);
    let [productsCategories, setProductsCategories] = useState([]);
    let [showCategoriesFlag, setShowCategoriesFlag] = useState(false);
    let [showBrandsFlag, setShowBrandsFlag] = useState(false);

    async function getCategories(){
        const productsCategoriesDB = await axios.get(`${HOST}/categories`)
        setProductsCategories(productsCategoriesDB.data)
    } 
    
    useEffect(()=>{
        getCategories()
        console.log("showCategoriesFlag: ",showCategoriesFlag);
    },[showCategoriesFlag])
    return (
        <Div wd={isOpen?"170px":"0px"} bg="#262626"flexDir="column"pos="sticky" posTop="60px" posLeft="0">
            <Div flexDir="column">
            {
                productsCategories.length && isOpen
                ? <Div flexDir="column">
                    <Ul jfCont="flex-start"wd="100%"fSize="17px"_hovCol="#fff"txtSh="#fff"color="lightgray"ml="20px"hg="2rem"onClick={()=>setShowCategoriesFlag(!showCategoriesFlag)}> <P color="lightgray" >Categorias</P> <P color="lightgray" fSize="16px">{showCategoriesFlag?"◄":"►"}</P> </Ul>
                    {
                    showCategoriesFlag ?
                    <Div flexDir="column"alItems="flex-start"ml="70px"wd="100%">
                      <Li onClick={()=>handlerSetProducts("default")} bg="transparent"bd="transparent"fSize="16px"color="lightgray"_hovCol="#fff"txtSh="#fff">Todas</Li>
                      {productsCategories.map((cat) => 
                      <Li onClick={()=>handlerSetProducts(cat.category)} color="lightgray"_hovCol="#fff"txtSh="#fff"key={cat.id} bg="transparent"bd="transparent"fSize="14px">{cat.category}</Li>)}
                    </Div>
                    : null    
                    }
                    <Ul fSize="17px"_hovCol="#fff"txtSh="#fff"color="lightgray"ml="20px"hg="2rem"jfCont="flex-start"wd="100%"> <P color="lightgray">Marcas</P> <P color="lightgray" fSize="16px">{showBrandsFlag?"◄":"►"}</P></Ul>
                </Div>
                : null
            }
            </Div>
        </Div>
    )
}