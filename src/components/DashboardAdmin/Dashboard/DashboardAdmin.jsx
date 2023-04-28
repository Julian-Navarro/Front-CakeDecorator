
import React, { useEffect, useState } from "react";
import Users from "../SubComponents/Users/Users";
import CoursesAdm from "../SubComponents/Courses/CoursesAdm";
import Products from "../SubComponents/Products/ProductsAdm";
import CreateCategoriesAndBrands from "../SubComponents/Products/EditCategoriesAndBrands";
import Navbar from "../../Navbar/Navbar";
import { Div, Button, P, Button2 } from "../../../utils/StyledComponents/StyledComponents";
import { FaUsers, FaProductHunt, FaEdit } from "react-icons/fa"
import { MdQueryStats } from "react-icons/md"
import { RiDatabaseLine } from "react-icons/ri"
import { BsClipboard2DataFill } from "react-icons/bs"
import DashboardStats from "../SubComponents/DashboardStats"


export default function DashboardAdmin () {
    const [render, setRender] = useState("dashboard")
    function handlerChangeRender(value) {
        console.log("EJECUTANDO HANDLER!!!!!!!!!!!!!!!!!!!");
        setRender(value)
    }

    useEffect(()=>{}, [render])
    return (
        <div>
            <Navbar/>
            <Div bg="green" alItems="flex-start">

              <Div flexDir="column"jfCont="slex-start"wd="20%"hg="100vh"bg="#dc4a61"pos="sticky"posTop="0px">
                <br />
                <Div bg="#dc4a61"wd="95%"bd="#fff">
                    <RiDatabaseLine fontSize="3rem"color="#fff"/>
                    <P wd="80%"fSize="1.4rem"color="#fff"fWeight="bold">Panel de administración</P>
                </Div>
                <Div flexDir="column"alItems="flex-end"bg="#dc4a61"alSelf="flex-end"hg="40%"jfCont="space-evenly"wd="95%">
                   
                  <Button2 onClick={()=>handlerChangeRender("dashboard")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg={render==="dashboard"?"#fff":"#dc4a61"}wd="100%">
                    <MdQueryStats color={render==="dashboard"?"#dc4a61":"#fff"} fontSize="1.6rem"/>
                    <P cursor="pointer"ml=".5rem"color={render==="dashboard"?"#dc4a61":"#fff"}fSize="1.1rem">Estadísticas</P>
                  </Button2>

                  <Button2 onClick={()=>handlerChangeRender("users")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg={render==="users"?"#fff":"#dc4a61"}wd="100%"value="users">
                    <FaUsers color={render==="users"?"#dc4a61":"#fff"} fontSize="1.5rem"/>
                    <P cursor="pointer" ml=".5rem"color={render==="users"?"#dc4a61":"#fff"}fSize="1.1rem">Usuarios</P>
                  </Button2>

                  <Button2 onClick={()=>handlerChangeRender("courses")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg={render==="courses"?"#fff":"#dc4a61"}wd="100%">
                    <BsClipboard2DataFill color={render==="courses"?"#dc4a61":"#fff"} fontSize="1.5rem"/>
                    <P cursor="pointer" ml=".5rem"color={render==="courses"?"#dc4a61":"#fff"}fSize="1.1rem">Cursos</P>
                  </Button2>

                  <Button2 onClick={()=>handlerChangeRender("products")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg={render==="products"?"#fff":"#dc4a61"}wd="100%">
                    <FaProductHunt color={render==="products"?"#dc4a61":"#fff"} fontSize="1.5rem"/>
                    <P cursor="pointer" ml=".5rem"color={render==="products"?"#dc4a61":"#fff"}fSize="1.1rem">Productos</P>
                  </Button2>

                  <Button2 onClick={()=>handlerChangeRender("editCategoriesAndBrands")}pd=".5rem"br="1rem 0 0 1rem"hg="2rem"bg={render==="editCategoriesAndBrands"?"#fff":"#dc4a61"}wd="100%"><FaEdit color={render==="editCategoriesAndBrands"?"#dc4a61":"#fff"} fontSize="1.5rem"/><P  ml=".5rem"color={render==="editCategoriesAndBrands"?"#dc4a61":"#fff"}fSize="1.1rem"hg="100%">Categorias y marcas</P>
                  </Button2>

                </Div>
              </Div>


              <Div wd="80%">
                {
                    render === "dashboard" ? <DashboardStats/> : null
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