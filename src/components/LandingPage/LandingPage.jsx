import React, { useEffect, useState } from "react";
import FormLogin from "../Login/FormLogin";
import LinkCourses from "./SubComponents/LinkCourses";
import LinkShop from "./SubComponents/LinkShop";
import { Link, useNavigate } from "react-router-dom"
import { Div, Button } from "../../utils/StyledComponents/StyledComponents";
import s from "./LandingPage.module.css"
export default function LandingPage ({handlerSetUserFlagApp, breakPoint}) {
  const navigate = useNavigate()
return (
      <Div flexDir="column"wd="100%"minHg="100vh"
        jfCont="flex-start"bg="#fff"pd=".5rem"br="0"
        className={s.divContainer}>
        <div className={s.divRecomendedUser}>
          <h2>Recomendamos logear con el siguiente usuario para poder explorar las funciones de administrador</h2>
          <p><label htmlFor="">E-mail: </label> admin@gmail.com</p>
          <p><label>Contraseña: </label> asdqweasdA1</p>
        </div>
        <FormLogin breakPoint={breakPoint}
          handlerSetUserFlagApp={handlerSetUserFlagApp}/>
        <LinkCourses/>
        <LinkShop/>
        {/* <Button bg="#60C72F"br="2rem"pd=".2rem 2rem .2rem 2rem"fWeight="bold"fSize="1.2rem"bd="none"
          alSelf="flex-start"ml="2rem"mb="2rem"onClick={()=>navigate("/home")}
          boxSh="2px 2px .3rem .1rem rgb(0, 0, 0, 0.35), inset -8px -6px 25px #44752C"
          _hovBg="#80E252"
          >
          Ir al home!
        </Button> */}
      </Div>
    )
};