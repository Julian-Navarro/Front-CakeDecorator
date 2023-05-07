import React from "react";
import FormLogin from "../Login/FormLogin";
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { Div, Button, P } from "../../utils/StyledComponents/StyledComponents";
import s from "./LandingPage.module.css"
export default function LandingPage ({handlerSetUserFlagApp}) {

    return (
        <Div flexDir="column"wd="100%"minHg="100vh"jfCont="flex-start">
            <div className={s.containerBackground}>
                <Navbar/>
                <Div jfCont="flex-end">
                    <FormLogin handlerSetUserFlagApp={handlerSetUserFlagApp}/>
                </Div>
            </div>
        </Div>
    )
};