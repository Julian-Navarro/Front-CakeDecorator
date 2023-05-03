import { useState } from "react"
import { Div, P, Ul, Li, Button, Img } from "../../../utils/StyledComponents/StyledComponents"
import { HamburgerIcon, CloseIcon, ArrowRightIcon, ArrowLeftIcon, DragHandleIcon } from "@chakra-ui/icons";
import { IconButton, filter } from "@chakra-ui/react"
import { useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../utils"
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md"
import s from "../../../utils/example.module.css"

export default function LeftSideBar({ handlerSetFilters, isOpen ,setIsOpen, filters }) {
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
    const pink = "#ddc6da"
    const violet = "#dddbe8"
    const lighblue = "#84b6f4"
    useEffect(()=>{
        getCategories()
        getBrands()
        console.log("showCategoriesFlag: ",showCategoriesFlag);
    },[showCategoriesFlag])
    return (
        <Div wd={isOpen?"14rem":"3rem"} bg={violet}flexDir="column" br="0"pd="1.2rem 0 1.2rem 0"boxSh="0 .2rem .8rem .15rem black">
            <IconButton 
              icon={isOpen ? <ArrowLeftIcon/> : <DragHandleIcon/>}
              onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true)}
              w="2.4rem"
              h="2.4rem"
              borderRadius="100%"
              cursor={"pointer"}
              alignSelf={"flex-start"}
              marginLeft={".3rem"}
              className={s.icons}  
              marginBottom={".3rem"}
              fontSize={"1.5rem"}
              bg={lighblue}
            />  
            <IconButton 
            icon={<MdShoppingCart/>}
            onClick={()=>navigate("/shop/cart")}
            w="2.4rem"
            h="2.4rem"
            fontSize={"1.6rem"}
            color="#252525"
            borderRadius="100%"
            cursor={"pointer"}
            alignSelf={"flex-start"}
            marginLeft={".3rem"}
            marginBottom={".3rem"}
            bg="lightgray"
            className={s.icons}/>                
            <Div flexDir="column"wd="100%">
            {
                productsCategories.length && isOpen
                ? <Div flexDir="column"wd="100%">
                    <Ul jfCont="space-between"wd="95%"fSize="17px"_hovCol="#fff"txtSh="#fff"color="lightgray"ml="0px"hg="2rem"onClick={()=>setShowCategoriesFlag(!showCategoriesFlag)}> 
                      <P color="lightgray">Categorias</P> 
                      <P color="lightgray" fSize="16px">{showCategoriesFlag?<ArrowLeftIcon/>:<ArrowRightIcon/>}</P>
                    </Ul>
                   { 
                   showCategoriesFlag 
                  ? <Div flexDir="column"alItems="flex-start"ml="20px"wd="80%">
                      <Button pd="0"mt="3px"onClick={(e)=>handlerSetFilters(e)}value="all"name="categories" bg="transparent"bd="transparent"fSize="14px"color={filters.categories.includes("all")?"greenyellow":"lightgray"}_hovCol={filters.categories.includes("all")?"greenyellow":"lightgray"}txtSh={filters.categories.includes("all")?"greenyellow":"lightgray"}>Todas</Button>
                      {productsCategories.map((cat) => 
                      <Button pd="0"mt="3px"value={cat.category} name="categories"color={filters.categories.includes(cat.category)?"greenyellow":"lightgray"}_hovCol={filters.categories.includes(cat.category)?"greenyellow":"lightgray"}txtSh={filters.categories.includes(cat.category)?"greenyellow":"lightgray"}key={cat.id} wd="100%"jfCont="flex-start"bd="transparent"bg="transparent"fSize="14px"onClick={(e)=>handlerSetFilters(e)}>{cat.category}</Button>)}
                    </Div>
                    : null    
                      }
                  </Div>
                  : null
            }
            {
                brands.length && isOpen
                ? <Div flexDir="column"wd="100%">
                    <Ul jfCont="space-between"wd="95%"fSize="17px"_hovCol="#fff"txtSh="#fff"color="lightgray"hg="2rem"onClick={()=>setShowBrandsFlag(!showBrandsFlag)}> 
                      <P color="lightgray" >Marcas</P> 
                      <P color="lightgray" fSize="16px">{showBrandsFlag?<ArrowLeftIcon/>:<ArrowRightIcon/>}</P>
                    </Ul>
                   { 
                   showBrandsFlag 
                  ? <Div flexDir="column"alItems="flex-start"ml="20px"wd="80%">
                      <Button pd="0"mt="3px"onClick={(e)=>handlerSetFilters(e)} name="brands"value="all"bg="transparent"bd="transparent"fSize="14px"color={filters.brands.includes("all")?"greenyellow":"lightgray"}_hovCol={filters.brands.includes("all")?"greenyellow":"lightgray"}txtSh={filters.brands.includes("all")?"greenyellow":"lightgray"}>Todas</Button>
                      {brands.map((br) => 
                      <Button pd="0"mt="3px"bg="transparent"onClick={(e)=>handlerSetFilters(e)}name="brands"value={br.brand}mr="10px"
                      color={filters.brands.includes(br.brand)?"greenyellow":"lightgray"}
                      _hovCol={filters.brands.includes(br.brand)?"greenyellow":"lightgray"}
                      txtSh={filters.brands.includes(br.brand)?"greenyellow":"lightgray"}
                      key={br.id} wd="100%"jfCont="flex-start"bd="transparent"fSize="14px">{br.brand}</Button>)}
                      <Button pd="0"mt="3px"onClick={(e)=>handlerSetFilters(e)}value={""}name="brands" bg="transparent"bd="transparent"fSize="14px"color={filters.brands.includes("")?"greenyellow":"lightgray"}_hovCol={filters.brands.includes("")?"greenyellow":"lightgray"}txtSh={filters.brands.includes("")?"greenyellow":"lightgray"}>Sin marca</Button>
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