import React from "react";
import Login from "../Login/FormLogin";
import "./LandingPage.css"
// import { Link } from "react-router-dom"
// import s from "./Landing.module.css"

export default function LandingPage () {
    return (
        <div className="containerLandingPage">
            <div className="title">
                <h1>Bienvenidos al Mundo Dulce De Marite!</h1>
            </div>
            <Login/>

        </div>
    )
};