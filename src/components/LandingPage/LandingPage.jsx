import React from "react";
import FormLogin from "../Login/FormLogin";
import "./LandingPage.css"
import { Link } from "react-router-dom"
// import s from "./Landing.module.css"

export default function LandingPage () {
    return (
        <div className="containerLandingPage">
            <div className="title">
                <h1>Bienvenidos al Mundo Dulce De Marite!</h1>
            </div>
            <FormLogin/>
            <Link to="/createAccount"><span>Si no tienes cuenta, creala aquí</span></Link>

        </div>
    )
};