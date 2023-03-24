import React from "react";
import FormLogin from "../Login/FormLogin";
import { Link } from "react-router-dom"


export default function LandingPage ({handlerSetUserFlagApp}) {

    return (
        <div className="containerLandingPage">
            <div className="title">
                <h1>Bienvenidos al Mundo Dulce De Marite!</h1>
            </div>
            <FormLogin handlerSetUserFlagApp={handlerSetUserFlagApp}/>
            <Link to="/createAccount"><span>Si no tienes cuenta, creala aquí</span></Link>

        </div>
    )
};