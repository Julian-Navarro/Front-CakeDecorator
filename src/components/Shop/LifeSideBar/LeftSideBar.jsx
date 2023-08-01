import { HOST } from "../../../utils"
import { Div, P, Ul, Button } from "../../../utils/StyledComponents/StyledComponents"
import { useState } from "react"
import { useEffect } from "react";
import { HiMenu } from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md"
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import axios from "axios";
import s from "./LeftSideBar.module.css"


export default function LeftSideBar({ handlerSetFilters, isOpen ,setIsOpen, filters }) {
    let navigate = useNavigate()
    let [productsCategories, setProductsCategories] = useState([]);
    let [brands, setBrands] = useState([]);
    let [showCategoriesFlag, setShowCategoriesFlag] = useState(false);
    let [showBrandsFlag, setShowBrandsFlag] = useState(false);
    const red = "#dc4a61"

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
        <Div 
            wd={isOpen?"14rem":"3.2rem"}
            hg="100vh" bg="transparent"overflow="hidden"
            pos="absolute"posTop="0rem"flexDir="column" br="0 0.5rem 0 0"pd="0rem 0rem 0rem 0rem"
            boxSh=".1rem .1rem .4rem .2rem #252525"
            jfCont="flex-start"
            >
          <div 
          className={s.divGradient}
          bg="red" flexDir="column"wd="100%"hg="100%"jfCont="flex-start">
            <Div flexDir="column"mt="1rem">
                <Button 
                    onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true)}
                    wd="2.5rem"
                    hg="2.4rem"
                    br="100%"
                    cursor={"pointer"}
                    alSelf={"flex-start"}
                    ml={".3rem"}
                    // className={s.icons}  
                    mb={".3rem"}
                    fSize={"1.6rem"}
                    bg={"#252525"}
                    _hovBg="#dc4a61"
                    boxSh="2px 2px .2rem .05rem #333"
                    >
                    {isOpen ? <ArrowLeftIcon color="#eeee"/> : <HiMenu color="#eeee"/>}  
                </Button>  
                <Button 
                    onClick={()=>navigate("/shop/cart")}
                    wd="2.5rem"
                    hg="2.4rem"
                    fSize={"1.6rem"}
                    br="100%"
                    cursor={"pointer"}
                    alSelf={"flex-start"}
                    ml={".3rem"}
                    mb={".3rem"}
                    bg={"#252525"}
                    boxSh="2px 2px .2rem .05rem #333"
                    _hovBg="#dc4a61"
                    > 
                      <MdShoppingCart color="#eeee"/>
                </Button>               
            </Div>
            <Div flexDir="column"wd="100%"pos="relative"posLeft={isOpen?"0":"-8rem"}>
            {
                productsCategories.length
                ? 
                <Div flexDir="column"wd="100%">
                      <Div wd="95%"jfCont="space-between"_hovBg={"rgba(0, 0, 0, 0.05)"}cursor="pointer"_hovColIm="#dc4a61"onClick={()=>setShowCategoriesFlag(!showCategoriesFlag)}>
                        <P color={"#252525"}fWeight="bold"wd="80%"jfCont="flex-start"_hovCol="#dc4a61">
                          Categorias
                        </P> 
                        {showCategoriesFlag
                        ? <ArrowLeftIcon fontWeight={"bold"}fontSize={"1rem"}color="#252525"marginRight=".15rem"/>
                        : <ArrowRightIcon fontWeight={"bold"}fontSize={"1rem"}color="#252525"marginRight=".15rem"/>}
                      </Div>
                   { 
                   showCategoriesFlag 
                   ? <Div flexDir="column"alItems="flex-start"ml="20px"wd="80%">
                      <Button _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"pd="0 0 0 .3rem"mt="3px"onClick={(e)=>handlerSetFilters(e)}value="all"
                        name="categories" bg="transparent"bd="transparent"fSize="18px"fWeight="bold"
                        color={filters.categories.includes("all")?red:"#252525"}
                        _hovCol={filters.categories.includes("all")?red:"#252525"}
                        // txtSh={filters.categories.includes("all")?"#252525":"#252525"}
                        jfCont="flex-start"
                        >Todas</Button>

                      {
                      productsCategories.map((cat) => 
                      <Button pd="0 0 0 .3rem"mt="3px"bg="transparent"name="categories"value={cat.category}mr="10px"
                        color={filters.categories.includes(cat.category)?red:"#252525"}
                        _hovCol={filters.categories.includes(cat.category)?red:"#252525"}
                        // txtSh={filters.categories.includes(cat.category)?lightblue:"lightgray"}
                        _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"jfCont="flex-start"fSize="18px"fWeight="bold"letterSp=".1rem"
                        key={cat.id}
                        onClick={(e)=>handlerSetFilters(e)}>
                          {cat.category}
                        </Button>)
                      }
                    </Div>
                    : null    
                }
                  </Div>
                  : null
                }
            {
                brands.length
                ? <Div flexDir="column"wd="100%">
                    <Div wd="95%"jfCont="space-between"_hovBg={"rgba(0, 0, 0, 0.05)"}cursor="pointer"onClick={()=>setShowBrandsFlag(!showBrandsFlag)}>
                      <P color="#252525" wd="80%"jfCont="flex-start"fWeight="bold"_hovCol="#dc4a61">Marcas</P> 
                      <P color="#252525" fSize="16px">
                        {showBrandsFlag
                        ?<ArrowLeftIcon fontWeight={"bold"}fontSize={"1rem"}/>
                        :<ArrowRightIcon fontWeight={"bold"}fontSize={"1rem"}/>}
                      </P>
                    </Div>
                   { 
                   showBrandsFlag 
                   ? <Div flexDir="column"alItems="flex-start"ml="0px"wd="80%">
                      <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}name="brands"value="all"mr="10px"
                        color={filters.brands.includes("all")?red:"#252525"}
                        _hovCol={filters.brands.includes("all")?red:"#252525"}
                        // txtSh={filters.brands.includes("all")?"greenyellow":"lightgray"}
                        _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"jfCont="flex-start"fSize="1rem"fWeight="bold"letterSp=".1rem"
                      >Todas</Button>

                      {
                      brands.map((br) => 
                      <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}name="brands"value={br.brand}mr="10px"
                        color={filters.brands.includes(br.brand)?red:"#252525"}
                        _hovCol={filters.brands.includes(br.brand)?red:"#252525"}
                        // txtSh={filters.brands.includes(br.brand)?"greenyellow":"lightgray"}
                        _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"jfCont="flex-start"key={br.id}
                        fSize="1rem"fWeight="bold"letterSp=".1rem"
                        >{br.brand}</Button>)
                      }
                      <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}value={""}name="brands"
                        color={filters.brands.includes("")?red:"#252525"}
                        _hovCol={filters.brands.includes("")?red:"#252525"}
                        // txtSh={filters.brands.includes("")?"greenyellow":"lightgray"}
                        _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"jfCont="flex-start"
                        fSize="1rem"fWeight="bold"letterSp=".1rem"
                      >Sin marca</Button>

                    </Div>
                    : null    
                }
                  </Div>
                  : null
                }
                <Div wd="100%">
                <Ul color={"#252525"}fWeight="bold"jfCont="space-between"wd="97%"fSize="22px"
                _hovBg="rgba(0, 0, 0, 0.05)"hg="100%"_hovCol="#dc4a61"
                >
                    Condiciones de compra
                </Ul>
            </Div>
            
            </Div>
            </div>
        </Div>
    )
}