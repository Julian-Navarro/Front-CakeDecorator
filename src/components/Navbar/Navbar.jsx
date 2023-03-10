import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div className="containerNavbar">
            <Link to="/home"><h3>Home</h3></Link>
            <Link to="/courses"><h3>Cursos</h3></Link>
            <Link to="/aboutUs"><h3>Nosotros</h3></Link>
            <Link to="/myAccount"><h3>Mi Cuenta</h3></Link>
        </div>
    )
}