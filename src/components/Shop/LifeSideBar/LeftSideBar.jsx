import { useState } from "react"
import { Div, P, Ul, Li, Button } from "../../../utils/StyledComponents/StyledComponents"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react"
import { useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../utils"
export default function LeftSideBar({ handlerSetFilters, handlerSetProductsCategory, handlerSetProductsBrands, isOpen }) {
    let [productsCategories, setProductsCategories] = useState([]);
    let [brands, setBrands] = useState([]);
    let [showCategoriesFlag, setShowCategoriesFlag] = useState(false);
    let [showBrandsFlag, setShowBrandsFlag] = useState(false);
    async function getBrands() {
        const brandsDB = await axios.get(`${HOST}/brands`)
        setBrands(brandsDB.data)
    }
    async function getCategories(){
        const productsCategoriesDB = await axios.get(`${HOST}/categories`)
        setProductsCategories(productsCategoriesDB.data)
    } 
    
    useEffect(()=>{
        getCategories()
        getBrands()
        console.log("showCategoriesFlag: ",showCategoriesFlag);
    },[showCategoriesFlag])
    return (
        <Div wd={isOpen?"170px":"0px"} bg="#262626"flexDir="column"pos="sticky" posTop="60px" posLeft="0">
            <Div flexDir="column"wd="100%">
            {
                productsCategories.length && isOpen
                ? <Div flexDir="column"bg="aliceblue"wd="100%">
                    <Ul jfCont="space-between"wd="95%"bg="yellow"fSize="17px"_hovCol="#fff"txtSh="#fff"color="lightgray"ml="0px"hg="2rem"onClick={()=>setShowCategoriesFlag(!showCategoriesFlag)}> 
                      <P color="lightgray">Categorias</P> 
                      <P color="lightgray" fSize="16px">{showCategoriesFlag?"◄":"►"}</P>
                    </Ul>

                   { 
                   showCategoriesFlag 
                  ? <Div bg="green"flexDir="column"alItems="flex-start"ml="20px"wd="80%">
                      <Button onClick={(e)=>handlerSetFilters(e)}value="all"name="categories" bg="transparent"bd="transparent"fSize="16px"color="lightgray"_hovCol="#fff"txtSh="#fff">Todas</Button>
                      {productsCategories.map((cat) => 
                      <Button value={cat.category} name="categories"color="lightgray"_hovCol="#fff"txtSh="#fff"key={cat.id} bg="transparent"bd="transparent"fSize="14px"onClick={(e)=>handlerSetFilters(e)}>{cat.category}</Button>)}
                    </Div>
                    : null    
                      }
                  </Div>
                  : null
            }
            {
                brands.length && isOpen
                ? <Div flexDir="column"bg="aliceblue"wd="100%">
                    <Ul jfCont="space-between"bg="red"wd="95%"fSize="17px"_hovCol="#fff"txtSh="#fff"color="lightgray"hg="2rem"onClick={()=>setShowBrandsFlag(!showBrandsFlag)}> 
                      <P color="lightgray" >Marcas</P> 
                      <P color="lightgray" fSize="16px">{showBrandsFlag?"◄":"►"}</P>
                    </Ul>
                   { 
                   showBrandsFlag 
                  ? <Div flexDir="column"alItems="flex-start"ml="20px"bg="green"wd="80%">
                      <Li onClick={()=>handlerSetProductsBrands("default")} bg="transparent"bd="transparent"fSize="16px"color="lightgray"_hovCol="#fff"txtSh="#fff">Todas</Li>
                      {brands.map((br) => 
                      <Li onClick={()=>handlerSetProductsBrands(br.brand)} mr="10px"color="lightgray"_hovCol="#fff"txtSh="#fff"key={br.id} bg="transparent"bd="transparent"fSize="14px">{br.brand}</Li>)}
                    </Div>
                    : null    
                    }
                  </Div>
                  : null
            }
            {
            isOpen
            ?<Div wd="100%">
                <Ul color={isOpen?"lightgray":"transparent"}jfCont="space-between"bg="red"wd="95%"fSize="20px"_hovCol="#fff"txtSh="#fff"hg="100%">Condiciones de compra</Ul>
            </Div>
            : null
            }
            </Div>
        </Div>
    )
}