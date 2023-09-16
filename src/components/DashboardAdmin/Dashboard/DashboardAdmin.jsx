
import React, { useEffect, useState } from "react";
import Users from "../SubComponents/Users/Users";
import CoursesAdm from "../SubComponents/Courses/CoursesAdm";
import Products from "../SubComponents/Products/ProductsAdm";
import CreateCategoriesAndBrands from "../SubComponents/Products/EditCategoriesAndBrands";
import { Div, Button, P, Button2 } from "../../../utils/StyledComponents/StyledComponents";
import { FaUsers, FaProductHunt, FaEdit } from "react-icons/fa"
import { MdQueryStats } from "react-icons/md"
import { RiDatabaseLine } from "react-icons/ri"
import { BsClipboard2DataFill } from "react-icons/bs"
import DashboardStats from "../SubComponents/DashboardStats/DashboardStats.jsx"
import s from "./DashboardAdmin.module.css"


export default function DashboardAdmin () {
    const [render, setRender] = useState("dashboard")
    function handlerChangeRender(value) {
        setRender(value)
    }

    useEffect(()=>{}, [render])
    return (
      <Div className={s.divContainer}
        bg="#fff"
        br="0">

        <div className={s.btnsContainer}
          wd="100%"
          >
          <Button2 onClick={()=>handlerChangeRender("dashboard")}
            className={s.btn}
            bg={render==="dashboard"?"#A281D8":"#fff"}
            >
             <MdQueryStats className={s.iconSelectBtn}
               color={render==="dashboard"?"#fff":"#A281D8"} 
               />
             <P 
               color={render==="dashboard"?"#fff":"#A281D8"}
               >Estadisticas</P>
          </Button2>

          <Button2 onClick={()=>handlerChangeRender("users")}
            className={s.btn}
            bg={render==="users"?"#A281D8":"#fff"}
            value="users"
            >
            <FaUsers 
              color={render==="users"?"#fff":"#A281D8"}
              />
            <P 
              color={render==="users"?"#fff":"#A281D8"}
              >Usuarios</P>
          </Button2>

          <Button2 onClick={()=>handlerChangeRender("courses")}
            className={s.btn}
            bg={render==="courses"?"#A281D8":"#fff"}
            >
            <BsClipboard2DataFill 
              color={render==="courses"?"#fff":"#A281D8"} 
              />
            <P 
              color={render==="courses"?"#fff":"#A281D8"}
              >Cursos</P>
          </Button2>

          <Button2 onClick={()=>handlerChangeRender("products")}
            bg={render==="products"?"#A281D8":"#fff"}
            className={s.btn}
            >
              <FaProductHunt 
                color={render==="products"?"#fff":"#A281D8"}
                />
              <P 
                color={render==="products"?"#fff":"#A281D8"}
                >Productos</P>
          </Button2>

          <Button2 onClick={()=>handlerChangeRender("editCategoriesAndBrands")}
            bg={render==="editCategoriesAndBrands"?"#A281D8":"#fff"}
            className={s.btn}
            >
              <FaEdit 
                color={render==="editCategoriesAndBrands"?"#fff":"#A281D8"}
                />
              <P  
                color={render==="editCategoriesAndBrands"?"#fff":"#A281D8"}
                >Categorias</P>
          </Button2>

        </div>



        {/* <Div className={s.container}>
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
        </Div> */}

      </Div>
    )
}