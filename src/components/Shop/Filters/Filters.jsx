import { HOST } from "../../../utils"
import { Img, Div, P, Ul, Button, Select, Option, Input } from "../../../utils/StyledComponents/StyledComponents"
import { useState } from "react"
import { useEffect } from "react";
import { HiMenu } from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md"
import { IconButton } from "@chakra-ui/react"
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import iconGlass from "../../../utils/IMAGES/fluent-emoji-high-contrast_magnifying-glass-tilted-right.png"
import xIcon from "../../../utils/IMAGES/octicon_x-12.png"
import filterIcon from "../../../utils/IMAGES/ri_filter-fill.png"
import axios from "axios";
import s from "./Filters.module.css"
import { BsCheckSquare } from "react-icons/bs"
import cartLogo from "../../../utils/IMAGES/bi_cart4.png"
export default function FilterBar({ handlerSetFilters, isOpen, setIsOpen, filters, handlerSearchProducts}) {
    let navigate = useNavigate()
    let [productsCategories, setProductsCategories] = useState([]);
    let [brands, setBrands] = useState([]);
    let [input, setInput] = useState("");
    const red = "#dc4a61"


    function enter(e) {
        if(e.keyCode===13)handlerSearchProducts(input)
    }
    async function getBrands() {
        const brandsDB = await axios.get(`${HOST}/brands`)
        setBrands(brandsDB.data)
    }
    async function getCategories(){
        const productsCategoriesDB = await axios.get(`${HOST}/categories`)
        setProductsCategories(productsCategoriesDB.data)
    } 
    useEffect(() => {
        getCategories()
        getBrands()
        console.log("FILTERS: ", filters);
    },[])
    useEffect(() => {
        console.log("productsCategories!!!: ", productsCategories);
    },[productsCategories])
    return (
        <Div br="0"
            wd="100%"
            jfCont="center"
            hg="0"
            zInd="3"
            pos="fixed"
            posTop="3.3rem"> 

          <Div posRight="0"zInd="6"className={s.btnBurguer}
            pos="absolute"
            posTop="0rem"wd="2.8rem" hg="2.8rem"br="50%"
            display="none"
            bg={isOpen?"#8B5C8A":"#B39BE5"}
            onClick={()=>setIsOpen(!isOpen)}mr="12px"mt=".5rem"
            >
              <img src={isOpen?xIcon:filterIcon} alt=""className={s.iconHome} />
          </Div>

          <Div bg="#fff"alItems="flex-start"jfCont="flex-start"
              hg="5rem"mt="2rem"br="0"zInd="2"wd="1240px"
              pd=".5rem .5rem 0 .5rem"flexDir="column"bdB="2px solid #92B3DA"
            //!   posTop={isOpen?"4rem":"-14rem"}
               posRight={isOpen?"0":"-100%"}
              className={s.container}>
                  
  
  
           <Div jfCont="space-between"className={s.selectsXcartIcon}>
  
            <Div wd="auto"jfCont="center"bg="#fff"br="2rem"bd="1px solid #333"
            >
            <Input br="2rem 0 0 2rem"wd="15rem"hg="2rem"placeholder="Buscar un producto.."
                value={input}onChange={(e)=>setInput(e.target.value)}txAlign="left"pd="25px"
                onKeyUp={(e)=>enter(e)}/>
            <IconButton 
                onClick={()=>handlerSearchProducts(input)}
                className={s.iconButton}
                w={"3.5rem"}
                borderRadius={"0 2rem 2rem 0"}
                >
              <img src={iconGlass} className={s.iconGlass}/>  
            </IconButton>
            </Div>
  
            <Select pd="2px 12px 2px 12px"br="0"cursor="pointer"bg="lightskyblue"
            boxSh="2px 2px .3rem .1rem rgb(0,0,0,0.35)"color="#fff"letterSp=".1rem"
            onChange={(e) => handlerSetFilters(e)}name="categories"fWeight="bold">


                <Option value="default"jfCont="space-between"
                    disabled={true}
                    bg="#E7E7E7"
                    fWeight="bold">
                    Categorias
                </Option>


                <Option value="all"jfCont="space-between"
                    color={filters.categories.includes("all")?"#4FCF54":"#333"}
                    bg="#cfcfcf"
                    fWeight="bold">
                    {filters.categories.includes("all")?"Todos":"Sin filtros"}
                </Option>
                {
                    productsCategories.length
                    ? productsCategories.map((cat, i) => (
                    <Option key={cat.id}value={cat.category}bg={i % 2 === 0 ? "#E7E7E7": "#cfcfcf"}
                        color={filters.categories.includes(cat.category)?"#4FCF54":"#333"}
                        fWeight="bold"
                        >
                        <P letterSp=".3rem">
                        {cat.category}
                        </P>
                    </Option>
                    ))
                    : null
                }

            </Select>
  
            <Select pd="2px 12px 2px 12px"br="0"cursor="pointer"bg="lightskyblue"
            boxSh="2px 2px .3rem .1rem rgb(0,0,0,0.35)"color="#fff"letterSp=".1rem"
            onChange={(e) => handlerSetFilters(e)}name="brands"fWeight="bold">

                <Option value="default"jfCont="space-between"
                    disabled={true}
                    bg="#E7E7E7"
                    fWeight="bold">
                    Marcas
                </Option>


                <Option value="all"bg="#cfcfcf"fWeight="bold"
                    color={filters.brands.includes("all")?"#4FCF54":"#333"}>
                    {filters.brands.includes("all")?"Todas":"Sin filtros"}
                </Option>
                {
                    brands.length 
                    ? brands.map((brands, i) => (
                    <Option key={brands.id}value={brands.brand}bg={i%2===0?"#E7E7E7":"#cfcfcf"}
                        fWeight="bold"color={filters.brands.includes(brands.brand)?"#4FCF54":"#333"}>
                        {brands.brand}
                    </Option>))
                    : null
                }
            </Select>
  
            <Button 
                onClick={()=>navigate("/shop/cart")}
                wd="2.7rem"
                hg="2.7rem"
                br="100%"
                cursor={"pointer"}
                ml={".3rem"}
                bg={"#F1B444"}
                boxSh="2px 2px .2rem .05rem #333"
                bd={"#fff"}
                _hovBg="#F6C5F5"
                > 
                <Img src={cartLogo}wd="2.7rem"hg="2.7rem"/>
            </Button>
  
  
  
           </Div> 
  
  
            <Div mt="4px"className={s.applyFilters}> {/* filtros aplicados */}
              {filters.categories.concat(filters.brands).map((el)=>{
                  if(el!== "all") {
                    return <P 
                    fSize=".8rem"fWeight="bold"mr="8px"mb=".2rem"letterSp="1px"
                    pd="0 10px 0 10px"bg="#F8F0F6"color="#848CD9"
                    boxSh="1px 1px .1rem .02rem rgb(0,0,0,0.35)"br="2rem">
                        {el}
                    </P>
                  }
              })}
           </Div>
          </Div>

        </Div>
    )
}

//! ESTO VA ADENTRO
                // <Button 
                //     onClick={()=>navigate("/shop/cart")}
                //     wd="2.5rem"
                //     hg="2.4rem"
                //     fSize={"1.6rem"}
                //     br="100%"
                //     cursor={"pointer"}
                //     alSelf={"flex-start"}
                //     ml={".3rem"}
                //     mb={".3rem"}
                //     bg={"#252525"}
                //     boxSh="2px 2px .2rem .05rem #333"
                //     _hovBg="#dc4a61"
                //     > 
                //       <MdShoppingCart color="#eeee"/>
                // </Button> 
//!

        // <Div 
        //     wd={isOpen?"14rem":"3.2rem"}
        //     hg="100vh" bg="transparent"overflow="hidden"
        //     pos="absolute"posTop="0rem"flexDir="column" br="0 0.5rem 0 0"pd="0rem 0rem 0rem 0rem"
        //     boxSh=".1rem .1rem .4rem .2rem #252525"
        //     jfCont="flex-start"
        //     >
        //   <div 
        //   className={s.divGradient}
        //   bg="red" flexDir="column"wd="100%"hg="100%"jfCont="flex-start">
        //     <Div flexDir="column"mt="1rem">
        //         <Button 
        //             onClick={()=>setIsOpen(!isOpen)}
        //             wd="2.5rem"
        //             hg="2.4rem"
        //             br="100%"
        //             alSelf={"flex-start"}
        //             ml={".3rem"}
        //             // className={s.icons}  
        //             mb={".3rem"}
        //             fSize={"1.6rem"}
        //             bg={"#252525"}
        //             _hovBg="#dc4a61"
        //             boxSh="2px 2px .2rem .05rem #333"
        //             >
        //             {isOpen ? <ArrowLeftIcon color="#eeee"/> : <HiMenu color="#eeee"/>}  
        //         </Button>  
        //         <Button 
        //             onClick={()=>navigate("/shop/cart")}
        //             wd="2.5rem"
        //             hg="2.4rem"
        //             fSize={"1.6rem"}
        //             br="100%"
        //             cursor={"pointer"}
        //             alSelf={"flex-start"}
        //             ml={".3rem"}
        //             mb={".3rem"}
        //             bg={"#252525"}
        //             boxSh="2px 2px .2rem .05rem #333"
        //             _hovBg="#dc4a61"
        //             > 
        //               <MdShoppingCart color="#eeee"/>
        //         </Button>               
        //     </Div>
        //     <Div flexDir="column"wd="100%"pos="relative"posLeft={isOpen?"0":"-8rem"}>
        //     {
        //       productsCategories.length
        //       ? 
        //       <Div flexDir="column"wd="100%">
        //               <Div wd="95%"jfCont="space-between"_hovBg={"rgba(0, 0, 0, 0.05)"}cursor="pointer"_hovColIm="#dc4a61"onClick={()=>setShowCategoriesFlag(!showCategoriesFlag)}>
        //                 <P color={"#252525"}fWeight="bold"wd="80%"jfCont="flex-start"_hovCol="#dc4a61">
        //                   Categorias
        //                 </P> 
        //                 {showCategoriesFlag
        //                 ? <ArrowLeftIcon fontWeight={"bold"}fontSize={"1rem"}color="#252525"marginRight=".15rem"/>
        //                 : <ArrowRightIcon fontWeight={"bold"}fontSize={"1rem"}color="#252525"marginRight=".15rem"/>}
        //               </Div>
        //           { 
        //            showCategoriesFlag 
        //            ? <Div flexDir="column"alItems="flex-start"ml="20px"wd="80%">
        //               <Button _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"pd="0 0 0 .3rem"mt="3px"onClick={(e)=>handlerSetFilters(e)}value="all"
        //                 name="categories" bg="transparent"bd="transparent"fSize="18px"fWeight="bold"
        //                 color={filters.categories.includes("all")?red:"#252525"}
        //                 _hovCol={filters.categories.includes("all")?red:"#252525"}
        //                 // txtSh ={filters.categories.includes("all")?"#252525":"#252525"}
        //                 jfCont="flex-start"
        //                 >Todas</Button>

        //               {
        //               productsCategories.map((cat) => 
        //               <Button pd="0 0 0 .3rem"mt="3px"bg="transparent"name="categories"value={cat.category}mr="10px"
        //                 color={filters.categories.includes(cat.category)?red:"#252525"}
        //                 _hovCol={filters.categories.includes(cat.category)?red:"#252525"}
        //                 // txtSh={filters.categories.includes(cat.category)?lightblue:"lightgray"}
        //                 _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"jfCont="flex-start"fSize="18px"fWeight="bold"letterSp=".1rem"
        //                 key={cat.id}
        //                 onClick={(e)=>handlerSetFilters(e)}>
        //                   {cat.category}
        //                 </Button>)
        //               }
        //             </Div>
        //             : null    
        //         }
        //         </Div>
        //         : null
        //     }
        //     {
        //       brands.length
        //       ? <Div flexDir="column"wd="100%">
        //             <Div wd="95%"jfCont="space-between"_hovBg={"rgba(0, 0, 0, 0.05)"}cursor="pointer"onClick={()=>setShowBrandsFlag(!showBrandsFlag)}>
        //               <P color="#252525" wd="80%"jfCont="flex-start"fWeight="bold"_hovCol="#dc4a61">Marcas</P> 
        //               <P color="#252525" fSize="16px">
        //                 {showBrandsFlag
        //                 ?<ArrowLeftIcon fontWeight={"bold"}fontSize={"1rem"}/>
        //                 :<ArrowRightIcon fontWeight={"bold"}fontSize={"1rem"}/>}
        //               </P>
        //             </Div>
        //            { 
        //            showBrandsFlag 
        //            ? <Div flexDir="column"alItems="flex-start"ml="0px"wd="80%">
        //               <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}name="brands"value="all"mr="10px"
        //                 color={filters.brands.includes("all")?red:"#252525"}
        //                 _hovCol={filters.brands.includes("all")?red:"#252525"}
        //                 // txtSh={filters.brands.includes("all")?"greenyellow":"lightgray"}
        //                 _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"jfCont="flex-start"fSize="1rem"fWeight="bold"letterSp=".1rem"
        //               >Todas</Button>

        //               {
        //               brands.map((br) => 
        //               <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}name="brands"value={br.brand}mr="10px"
        //                 color={filters.brands.includes(br.brand)?red:"#252525"}
        //                 _hovCol={filters.brands.includes(br.brand)?red:"#252525"}
        //                 // txtSh={filters.brands.includes(br.brand)?"greenyellow":"lightgray"}
        //                 _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"jfCont="flex-start"key={br.id}
        //                 fSize="1rem"fWeight="bold"letterSp=".1rem"
        //                 >{br.brand}</Button>)
        //               }
        //               <Button pd="0 0 0 .3rem"mt=".1rem"bg="transparent"onClick={(e)=>handlerSetFilters(e)}value={""}name="brands"
        //                 color={filters.brands.includes("")?red:"#252525"}
        //                 _hovCol={filters.brands.includes("")?red:"#252525"}
        //                 // txtSh={filters.brands.includes("")?"greenyellow":"lightgray"}
        //                 _hovBg={"rgba(0, 0, 0, 0.05)"}wd="100%"jfCont="flex-start"
        //                 fSize="1rem"fWeight="bold"letterSp=".1rem"
        //               >Sin marca</Button>

        //             </Div>
        //             : null    
        //         }
        //         </Div>
        //         : null
        //     }
        //     <Div wd="100%">
        //       <Ul color={"#252525"}fWeight="bold"jfCont="space-between"wd="97%"fSize="22px"
        //       _hovBg="rgba(0, 0, 0, 0.05)"hg="100%"_hovCol="#dc4a61"
        //       >
        //         Condiciones de compra
        //       </Ul>
        //     </Div>
            
        //     </Div>
        //     </div>
        // </Div>