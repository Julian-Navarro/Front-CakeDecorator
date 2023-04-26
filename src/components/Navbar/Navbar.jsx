import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Div } from "../../utils/StyledComponents/StyledComponents";

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
        <Div bg="rgba(0, 204, 255, 0.366)" wd="100%"jfCont="space-around"hg="4rem"boxSh="0 0 1rem .6rem lightblue">
            <Link to="/home"><h3>Home</h3></Link>
            <Link to="/courses"><h3>Cursos</h3></Link>
            <Link to="/aboutUs"><h3>Nosotros</h3></Link>
            <Link><h3 onClick={(e)=>handlerNavigateMyAccount(e)}>Mi cuenta</h3></Link>
            <Link to="/"><h3>Log in</h3></Link>
            <Link to="/shop"><h3>Tienda</h3></Link>
        {
            loggedUser !== null ? loggedUser.role === "admin" 
            ? <Link to="/dashboardAdmin"><h3>Administrar Pagina</h3></Link>
            : null :null
        }

        </Div>
    )
}