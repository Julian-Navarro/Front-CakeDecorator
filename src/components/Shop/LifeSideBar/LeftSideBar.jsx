import { useState } from "react"
import { Div, Button, P, Input, Img } from "../../../utils/StyledComponents/StyledComponents"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react"
import { useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../utils"
export default function LeftSideBar({ handlerSetProducts, isOpen, setIsOpen }) {
    // const [isOpen, setIsOpen] = useState(false);
    let [productsCategories, setProductsCategories] = useState([]);
    async function getCategories(){
        const productsCategoriesDB = await axios.get(`${HOST}/categories`)
        setProductsCategories(productsCategoriesDB.data)
    } 
    
    // const [sideBarWd, setSideBarWd] = useState("18%");
    
    useEffect(()=>{
        getCategories()
        console.log("productsCategories: ",productsCategories);
    },[])
    return (
        <Div hg="100vh" wd={isOpen?"200px":"0px"} bg="gray"flexDir="column">
            <Div flexDir="column">
            {
                productsCategories.length && isOpen
                ? <Div flexDir="column">
                    <Button onClick={()=>handlerSetProducts("default")}>Todos</Button>

                 {productsCategories.map((cat) => 
                    <Button onClick={()=>handlerSetProducts(cat.category)} key={cat.id}>{cat.category}</Button>)} 
                </Div>
                : null
            }
            </Div>
        </Div>
    )
}