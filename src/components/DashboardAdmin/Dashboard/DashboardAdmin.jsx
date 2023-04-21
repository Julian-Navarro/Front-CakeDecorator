import React, { useEffect, useState } from "react";
import s from "./DashboardAdmin.module.css"
import Users from "../SubComponents/Users/Users";
import CoursesAdm from "../SubComponents/Courses/CoursesAdm";
import Products from "../SubComponents/Products/ProductsAdm";
import CreateCategoriesAndBrands from "../SubComponents/Products/EditCategoriesAndBrands";
import Navbar from "../../Navbar/Navbar";
export default function DashboardAdmin () {
    const [render, setRender] = useState(false)
    function handlerChangeRender(e) {
        e.preventDefault();
        setRender(e.target.value)
        // console.log("RENDER: ",render);
    }

    useEffect(()=>{}, [render])
    return (
        <div>
            <Navbar/>
            <h2>DASHBOARD ADMIN</h2>
            <br />
            <div className={s.divContainer}>
              <div className={s.divDashboardLeftContainer}>
                  <button onClick={(e)=>handlerChangeRender(e)} value="users" >Usuarios</button>
                  <button onClick={(e)=>handlerChangeRender(e)} value="courses" >Cursos</button>
                  <button onClick={(e)=>handlerChangeRender(e)} value="products" >Productos</button>
                  <button onClick={(e)=>handlerChangeRender(e)} value="editCategoriesAndBrands">Editar categorias y marcas</button>

              </div>
              <div className={s.divDashboardRightContainer}>
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
              </div>

            </div>

        </div>
    )
}