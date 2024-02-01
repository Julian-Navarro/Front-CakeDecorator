
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
import { useParams, useLocation, useNavigate } from "react-router-dom";


export default function DashboardAdmin ({ breakPoint }) {
    const navigate = useNavigate();
    const [render, setRender] = useState("users")
    const location = useLocation()
    function handlerChangeRender(value) {
        setRender(value)
    }
    useEffect(()=>{
      // console.log(location.search);
      if(location?.search) {
        // console.log(location.search);
        setRender(location.search.split("=")[1])
      } else {
        // console.log("No location: ", location);
      }
    }, [])
    useEffect(()=>{
    }, [render])
    return (
      <div className={s.divContainer}br="0">

        <div className={s.btnsContainer}
          wd="100%"
          >
          {/* <Button2 onClick={()=>{handlerChangeRender("dashboard");navigate('/dashboardAdmin?render=dashboard')}}
            className={s.btn}
            bg={render==="dashboard"?"#A281D8":"#fff"}
            >
             <MdQueryStats className={s.iconSelectBtn}
               color={render==="dashboard"?"#fff":"#A281D8"} 
               />
             <P 
               color={render==="dashboard"?"#fff":"#A281D8"}
               >Estadisticas</P>
          </Button2> */}

          <Button2 onClick={()=>{handlerChangeRender("users");navigate('/dashboardAdmin?render=users')}}
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

          <Button2 onClick={()=>{handlerChangeRender("courses");navigate('/dashboardAdmin?render=courses')}}
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

          <Button2 onClick={()=>{handlerChangeRender("products");navigate('/dashboardAdmin?render=products')}}
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

          <Button2 onClick={()=>{handlerChangeRender("editCategoriesAndBrands");navigate('/dashboardAdmin?render=editCategoriesAndBrands')}}
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



        <div className={s.container}>
          {
              render === "users" ? <Users/> : null
          }
          {
              render === "dashboard" ? <DashboardStats/> : null
          }
          {
              render === "courses" ? <CoursesAdm path={"adm"}/> : null
          }
          {
              render === "products" ? <Products path={"adm"}breakPoint={breakPoint}/> : null
          }
          {
              render === "editCategoriesAndBrands" ? <CreateCategoriesAndBrands/> : null
          }
        </div>

      </div>
    )
}