import { useState } from "react"
import { Div, P, Ul, Li, Button, Img } from "../../../utils/StyledComponents/StyledComponents"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react"
import { useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../utils"
import { useNavigate } from "react-router-dom";
export default function LeftSideBar({ handlerSetFilters, isOpen ,setIsOpen }) {
    let navigate = useNavigate()
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
        <Div wd={isOpen?"14rem":"3rem"} bg="#262626"flexDir="column"pos="sticky" posTop="60px" posLeft="0">
            <IconButton
              icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
              onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true)}
              w="2.4rem"
              h="2.4rem"
              borderRadius="100%"
            />  
            <Div flexDir="column"wd="100%">
            {
                productsCategories.length && isOpen
                ? <Div flexDir="column"wd="100%">
                    <Ul jfCont="space-between"wd="95%"fSize="17px"_hovCol="#fff"txtSh="#fff"color="lightgray"ml="0px"hg="2rem"onClick={()=>setShowCategoriesFlag(!showCategoriesFlag)}> 
                      <P color="lightgray">Categorias</P> 
                      <P color="lightgray" fSize="16px">{showCategoriesFlag?"◄":"►"}</P>
                    </Ul>

                   { 
                   showCategoriesFlag 
                  ? <Div flexDir="column"alItems="flex-start"ml="20px"wd="80%">
                      <Button pd="0"mt="3px"onClick={(e)=>handlerSetFilters(e)}value="all"name="categories" bg="transparent"bd="transparent"fSize="14px"color="lightgray"_hovCol="#fff"txtSh="#fff">Todas</Button>
                      {productsCategories.map((cat) => 
                      <Button pd="0"mt="3px"value={cat.category} name="categories"color="lightgray"_hovCol="#fff"txtSh="#fff"key={cat.id} wd="100%"jfCont="flex-start"bd="transparent"bg="transparent"fSize="14px"onClick={(e)=>handlerSetFilters(e)}>{cat.category}</Button>)}
                    </Div>
                    : null    
                      }
                  </Div>
                  : <Div bg="#252525"wd="100%">
                        <Div wd="2.6rem"hg="2.6rem"
                        onClick={()=>navigate("/shop/cart")}blur="blur(5px)"
                        bg="orange"br="50%"mr="10px">
                        <Img wd="40px" hg="40px"bg="red" 
                            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="not found" />
                        </Div>
                    </Div> 
            }
            {
                brands.length && isOpen
                ? <Div flexDir="column"wd="100%">
                    <Ul jfCont="space-between"wd="95%"fSize="17px"_hovCol="#fff"txtSh="#fff"color="lightgray"hg="2rem"onClick={()=>setShowBrandsFlag(!showBrandsFlag)}> 
                      <P color="lightgray" >Marcas</P> 
                      <P color="lightgray" fSize="16px">{showBrandsFlag?"◄":"►"}</P>
                    </Ul>
                   { 
                   showBrandsFlag 
                  ? <Div flexDir="column"alItems="flex-start"ml="20px"wd="80%">
                      <Button pd="0"mt="3px"onClick={(e)=>handlerSetFilters(e)} name="brands"value="all"bg="transparent"bd="transparent"fSize="14px"color="lightgray"_hovCol="#fff"txtSh="#fff">Todas</Button>
                      {brands.map((br) => 
                      <Button pd="0"mt="3px"bg="transparent"onClick={(e)=>handlerSetFilters(e)}name="brands"value={br.brand}mr="10px"color="lightgray"_hovCol="#fff"txtSh="#fff"key={br.id} wd="100%"jfCont="flex-start"bd="transparent"fSize="14px">{br.brand}</Button>)}
                    </Div>
                    : null    
                    }
                  </Div>
                  : null
            }
            {
            isOpen
            ?<Div wd="100%">
                <Ul color={isOpen?"lightgray":"transparent"}jfCont="space-between"wd="95%"fSize="20px"_hovCol="#fff"txtSh="#fff"hg="100%">Condiciones de compra</Ul>
            </Div>
            : null
            }
            </Div>
        </Div>
    )
}