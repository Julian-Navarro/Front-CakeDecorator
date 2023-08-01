import React from "react";
import FormLogin from "../Login/FormLogin";
import LinkCourses from "./SubComponents/LinkCourses";
import LinkShop from "./SubComponents/LinkShop";
import { Link } from "react-router-dom"
import { Div } from "../../utils/StyledComponents/StyledComponents";
import s from "./LandingPage.module.css"
export default function LandingPage ({handlerSetUserFlagApp, breakPoint}) {

return (
      <Div flexDir="column"wd="100%"minHg="100vh"jfCont="flex-start"bg="#fff"pd=".5rem"br="0"
        className={s.divContainer}>
        <FormLogin breakPoint={breakPoint}handlerSetUserFlagApp={handlerSetUserFlagApp}/>
        <LinkCourses/>
        <LinkShop/>
      </Div>
    )
};