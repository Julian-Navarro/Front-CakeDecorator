import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./DashboardAdmin.module.css"
import Users from "../SubComponents/Users/Users";
import Courses from "../SubComponents/Courses/Courses";
import Products from "../SubComponents/Products/Products";

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
            <h2>DASHBOARD ADMIN</h2>
            <br />
            <div className={s.divContainer}>
              <div className={s.divDashboardLeftContainer}>
                  <button onClick={(e)=>{handlerChangeRender(e)}} value="users" >Usuarios</button>
                  <button onClick={(e)=>{handlerChangeRender(e)}} value="courses" >Cursos</button>
                  <button onClick={(e)=>{handlerChangeRender(e)}} value="products" >Productos</button>

              </div>
              <div className={s.divDashboardRightContainer}>
                <h2>Container List COMP DASHBOARD</h2>
                {
                    render === false ? <h2>Elige una opcion</h2> : null
                }
                {
                    render === "users" ? <Users/> : null
                }
                {
                    render === "courses" ? <Courses/> : null
                }
                {
                    render === "products" ? <Products/> : null
                }

              </div>

            </div>

        </div>
    )
}