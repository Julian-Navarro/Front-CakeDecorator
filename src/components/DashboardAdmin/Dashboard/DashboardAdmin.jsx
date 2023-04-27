
import React, { useEffect, useState } from "react";
import Users from "../SubComponents/Users/Users";
import CoursesAdm from "../SubComponents/Courses/CoursesAdm";
import Products from "../SubComponents/Products/ProductsAdm";
import CreateCategoriesAndBrands from "../SubComponents/Products/EditCategoriesAndBrands";
import Navbar from "../../Navbar/Navbar";
import { Div, Button, P, Button2 } from "../../../utils/StyledComponents/StyledComponents";
import { FcComboChart, FcDataConfiguration } from "react-icons/fc"
import { FaUsers, FaProductHunt, FaEdit } from "react-icons/fa"
import { RiDatabaseLine } from "react-icons/ri"


export default function DashboardAdmin () {
    const [render, setRender] = useState(false)
    function handlerChangeRender(value) {
        console.log("EJECUTANDO HANDLER!!!!!!!!!!!!!!!!!!!");
        setRender(value)
    }

    useEffect(()=>{}, [render])
    return (
        <div>
            <Navbar/>
            <Div bg="green" alItems="flex-start">


              <Div flexDir="column"wd="20%"bg="greenyellow">
                <Div bg="orange"wd="100%">
                    <RiDatabaseLine/>
                    <P bg="gray"wd="80%"fSize=".9rem"color="#fff">Panel de administración</P>
                </Div>
                <Div flexDir="column"alItems="flex-end"bg="yellow"alSelf="flex-end"wd="95%">
                   
                  <Button2 onClick={()=>handlerChangeRender("dashboard")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg="#dc4a61"wd="100%"><FcComboChart fontSize="1.2rem"/><P ml=".4rem"color="#fff"fSize=".9rem">Inicio</P></Button2>


                  <Button2 onClick={()=>handlerChangeRender("users")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg="#dc4a61"wd="100%"value="users"><FaUsers/><P ml=".4rem"color="#fff"fSize=".9rem">Usuarios</P></Button2>

                  <Button2 onClick={()=>handlerChangeRender("courses")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg="#dc4a61"wd="100%"><FcDataConfiguration/><P ml=".4rem"color="#fff"fSize=".9rem">Cursos</P></Button2>
                  <Button2 onClick={()=>handlerChangeRender("products")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg="#dc4a61"wd="100%"><FaProductHunt/><P ml=".4rem"color="#fff"fSize=".9rem">Productos</P></Button2>
                  <Button2 onClick={()=>handlerChangeRender("editCategoriesAndBrands")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg="#dc4a61"wd="100%"><FaEdit/><P  ml=".4rem"color="#fff"fSize=".9rem"hg="100%">Categorias y marcas</P></Button2>
                </Div>
              </Div>


              <Div wd="80%">
                {
                    render === false ? <h2>Elige una opcion</h2> : null
                }
                {
                    render === "users" ? <Users/> : null
                }
                {
                    render === "courses" ? <CoursesAdm path={"adm"}/> : null
                }
                {
                    render === "products" ? <Products path={"adm"}/> : null
                }
                {
                    render === "editCategoriesAndBrands" ? <CreateCategoriesAndBrands/> : null
                }
              </Div>

            </Div>

        </div>
    )
}