import React from "react";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";

export default function Navbar () {
    const navigate = useNavigate();
    function handlerNavigateMyAccount(e) {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        if(loggedUser !== null) {
            navigate("/myAccount")
        } else {
            alert("Ingresa a tu cuenta")
            navigate("/")
        }
    }
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

    return (
        <div className="containerNavbar">
            <Link to="/home"><h3>Home</h3></Link>
            <Link to="/courses"><h3>Cursos</h3></Link>
            <Link to="/aboutUs"><h3>Nosotros</h3></Link>
            <Link><h3 onClick={(e)=>handlerNavigateMyAccount(e)}>Mi cuenta</h3></Link>
            <Link to="/"><h3>Log in</h3></Link>
        {
            loggedUser !== null ? loggedUser.role === "admin" 
            ? <Link to="/dashboardAdmin"><h3>Administrar Pagina</h3></Link>
            : null :null
        }

        </div>
    )
}