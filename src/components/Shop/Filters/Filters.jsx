import { HOST } from "../../../utils"
import { Img, Div, P, Button, Select, Option } from "../../../utils/StyledComponents/StyledComponents"
import { useState } from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import axios from "axios";
import s from "./Filters.module.css"
import cartLogo from "../../../utils/IMAGES/bi_cart4.png"
import iconMenuLine from "../../../utils/IMAGES/imgsCardProduct/healthicons_ui-menu-line.png"
import iconMenuGrid from "../../../utils/IMAGES/imgsCardProduct/healthicons_ui-menu-grid.png"
import iconMenuLineBlue from "../../../utils/IMAGES/imgsCardProduct/healthicons_ui-menu-line-blue.png"
import iconMenuGridBlue from "../../../utils/IMAGES/imgsCardProduct/healthicons_ui-menu-grid-blue.png"
import { CiFilter } from "react-icons/ci";


export default function FilterBar({ handlerSetFilters, isOpen, setIsOpen, filters, handlerSearchProducts, displayOption, setDisplayOption, breakPoint }) {
    let navigate = useNavigate()
    let [productsCategories, setProductsCategories] = useState([]);
    let [brands, setBrands] = useState([]);
    let [input, setInput] = useState("");

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
    },[])
    useEffect(() => {
        
    },[productsCategories, breakPoint])
    return (
        <Div br="0"
            wd="100%"
            jfCont="center"
            hg="0"
            zInd="3"
            pos="fixed"
            posTop="3rem"
            // posLeft="0"
            // mr="-.9rem"
            // pd="1rem"
            > 

          <Div className={s.btnBurguer}
            posRight="-.5rem"zInd="6"
            pos="absolute"
            posTop="-.5rem"
            wd="2.4rem"
            hg="2.4rem"
            br="50%"
            display="none"
            bd=".1rem solid #B39BE5"
            bg={"#fff"}
            // bg="red"
            onClick={()=>setIsOpen(!isOpen)}
            >
                <CiFilter fontSize={"1.8rem"}color="#B39BE5"className={s.iconHome}/>
          </Div>

          <Div bg="#fff"flexDir="column"
            alItems="flex-start"jfCont="flex-start"
            hg="5rem"mt="2rem"br="0"zInd="2"wd="1240px"
            pd=".5rem .5rem 0 .5rem"
            // bg="red"
            bdB=".1rem solid #689EEE"
            //!   posTop={isOpen?"4rem":"-14rem"}
            posRight={isOpen?"0":"-100%"}
            className={s.container}
          >

           <Div jfCont="space-between"className={s.selectsXcartIcon}
            // bg="green"
           >
  
            <div className={s.divInputSearch}>
              <input placeholder="Buscar un producto.."
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                onKeyUp={(e)=>enter(e)}
                className={s.inputSearch}/>
                <button onClick={()=>handlerSearchProducts(input)}
                    className={s.iconButton}>
                  <HiOutlineMagnifyingGlass className={s.iconGlass}/>  
                    </button>
            </div>
  
            <Select pd="0 .4rem 0 .4rem"br=".2rem"
            className={s.selects}cursor="pointer"bg="lightskyblue"
            boxSh="2px 2px .3rem .1rem rgb(0,0,0,0.35)"letterSp=".1rem"
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
  
            <Select pd="0 .4rem 0 .4rem"br=".2rem"
            className={s.selects}cursor="pointer"bg="lightskyblue"
            boxSh="2px 2px .3rem .1rem rgb(0,0,0,0.35)"letterSp=".1rem"
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
        
            <div className={breakPoint!="1"?s.divBtnsShow:s.divBtnsShowDis}>
                <button onClick={()=>setDisplayOption('grid')}>
                    <img src={displayOption==="grid"?iconMenuGridBlue:iconMenuGrid}/>
                </button>
                <button onClick={()=>setDisplayOption('line')}>
                    <img src={displayOption==="line"?iconMenuLineBlue:iconMenuLine}/>
                </button>
            </div>

            <Button 
                onClick={()=>navigate("/shop/cart")}
                wd="2.6rem"
                hg="2.6rem"
                br="100%"
                cursor={"pointer"}
                ml={".3rem"}
                bg={"#F1B444"}
                boxSh="2px 2px .2rem .05rem #333"
                bd={"#fff"}
                _hovBg="#F6C5F5"
                className={s.cartButton}
                > 
                <Img src={cartLogo}wd="2.6rem"hg="2.6rem"/>
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
