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
    const lightblue = "#7bb4fa"
    const orange="rgb(255, 190, 70)"
    useEffect(()=>{
        getCategories()
        getBrands()
        console.log("showCategoriesFlag: ",showCategoriesFlag);
    },[showCategoriesFlag])
    return (
        <Div 
            wd={isOpen?"14rem":"3.2rem"}
            hg="100vh" bg="transparent"overflow="hidden"
            pos="absolute"posTop="0rem"flexDir="column" br="0"pd="0rem 0rem 0rem 0rem"
            boxSh=".1rem .1rem .4rem .2rem #333"
            jfCont="flex-start"
            >
          <div 
          className={s.divGradient}
          bg="red" flexDir="column"wd="100%"hg="100%"jfCont="flex-start">
            <Div flexDir="column"mt="1rem">
                <IconButton 
                    icon={isOpen ? <ArrowLeftIcon color="#333"/> : <DragHandleIcon color="#333"/>}
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
                    bg={"lightgray"}
                    />  
                <IconButton 
                    icon={<MdShoppingCart color="#333"/>}
                    onClick={()=>navigate("/shop/cart")}
                    w="2.4rem"
                    h="2.4rem"
                    fontSize={"1.6rem"}
                    borderRadius="100%"
                    cursor={"pointer"}
                    alignSelf={"flex-start"}
                    marginLeft={".3rem"}
                    marginBottom={".3rem"}
                    bg={"lightgray"}
                    className={s.icons}
                    />                
            </Div>
            <Div flexDir="column"wd="100%"pos="relative"posLeft={isOpen?"0":"-8rem"}>
            {
                productsCategories.length
                ? <Div flexDir="column"wd="100%">
                    <Ul jfCont="space-between"wd="100%"fSize="17px"
                        color="#fff"ml="0px"hg="2rem"onClick={()=>setShowCategoriesFlag(!showCategoriesFlag)}> 
                      <Div _hovBg={"rgba(0, 0, 0, 0.25)"}cursor="pointer">
                        <P color={"#333"}fWeight="bold"wd="80%"jfCont="flex-start">Categorias</P> 
                        <P color="lightgray"fSize="16px"wd="20%">{showCategoriesFlag?<ArrowLeftIcon fontWeight={"bold"}fontSize={"1rem"}color="#333"/>:<ArrowRightIcon fontWeight={"bold"}fontSize={"1rem"}color="#333"/>}</P>
                      </Div>
                    </Ul>
                   { 
                   showCategoriesFlag 
                   ? <Div flexDir="column"alItems="flex-start"ml="20px"wd="80%">
                      <Button _hovBg={"rgba(0, 0, 0, 0.25)"}wd="100%"pd="0 0 0 .3rem"mt="3px"onClick={(e)=>handlerSetFilters(e)}value="all"
                        name="categories" bg="transparent"bd="transparent"fSize="18px"fWeight="bold"
                        color={filters.categories.includes("all")?orange:"#333"}
                        _hovCol={filters.categories.includes("all")?orange:"#252525"}
                        // txtSh={filters.categories.includes("all")?"greenyellow":"lightgray"}
                        jfCont="flex-start"
                        >Todas</Button>

                      {
                      productsCategories.map((cat) => 
                      <Button pd="0 0 0 .3rem"mt="3px"bg="transparent"name="categories"value={cat.category}mr="10px"
                      color={filters.categories.includes(cat.category)?orange:"#333"}
                      _hovCol={filters.categories.includes(cat.category)?orange:"#252525"}
                      // txtSh={filters.categories.includes(cat.category)?lightblue:"lightgray"}
                      _hovBg={"rgba(0, 0, 0, 0.25)"}wd="100%"jfCont="flex-start"fSize="18px"fWeight="bold"letterSp=".1rem"
                      key={cat.id}
                      onClick={(e)=>handlerSetFilters(e)}
                      >{cat.category}</Button>)
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
                    <Ul jfCont="space-between"wd="100%"fSize="17px"_hovCol="#fff"color="lightgray"hg="2rem"onClick={()=>setShowBrandsFlag(!showBrandsFlag)}> 
                    <Div _hovBg={"rgba(0 ,0 ,0 , 0.25)"}cursor="pointer">
                      <P color="#252525" wd="80%"jfCont="flex-start"fWeight="bold">Marcas</P> 
                      <P color="#252525" wd="20%"fSize="16px">{showBrandsFlag?<ArrowLeftIcon fontWeight={"bold"}fontSize={"1rem"}/>:<ArrowRightIcon fontWeight={"bold"}fontSize={"1rem"}/>}</P>
                    </Div>
                    </Ul>
                   { 
                   showBrandsFlag 
                   ? <Div flexDir="column"alItems="flex-start"ml="20px"wd="80%">

                      <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}name="brands"value="all"mr="10px"
                        color={filters.brands.includes("all")?orange:"#252525"}
                        _hovCol={filters.brands.includes("all")?orange:"#252525"}
                        // txtSh={filters.brands.includes("all")?"greenyellow":"lightgray"}
                        _hovBg={"rgba(0 ,0 ,0 , 0.25)"}wd="100%"jfCont="flex-start"fSize="1rem"fWeight="bold"letterSp=".1rem"
                      >Todas</Button>

                      {
                      brands.map((br) => 
                      <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}name="brands"value={br.brand}mr="10px"
                        color={filters.brands.includes(br.brand)?orange:"#252525"}
                        _hovCol={filters.brands.includes(br.brand)?orange:"#252525"}
                        // txtSh={filters.brands.includes(br.brand)?"greenyellow":"lightgray"}
                        _hovBg={"rgba(0 ,0 ,0 , 0.25)"}wd="100%"jfCont="flex-start"key={br.id}
                        fSize="1rem"fWeight="bold"letterSp=".1rem"
                        >{br.brand}</Button>)
                      }
                      <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}value={""}name="brands"
                        color={filters.brands.includes("")?orange:"#252525"}
                        _hovCol={filters.brands.includes("")?orange:"#252525"}
                        // txtSh={filters.brands.includes("")?"greenyellow":"lightgray"}
                        _hovBg={"rgba(0 ,0 ,0 , 0.25)"}wd="100%"jfCont="flex-start"
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
                _hovBg="rgba(0, 0, 0, 0.25)"hg="100%"
                >
                    Condiciones de compra
                </Ul>
            </Div>
            
            </Div>
            </div>
        </Div>
    )
}