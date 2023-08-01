import React from "react";
import FormLogin from "../Login/FormLogin";
import LinkCourses from "./SubComponents/LinkCourses";
import LinkShop from "./SubComponents/LinkShop";
import { Link, useNavigate } from "react-router-dom"
import { Div, Button } from "../../utils/StyledComponents/StyledComponents";
import s from "./LandingPage.module.css"
export default function LandingPage ({handlerSetUserFlagApp, breakPoint}) {
  const navigate = useNavigate()
return (
      <Div flexDir="column"wd="100%"minHg="100vh"jfCont="flex-start"bg="#fff"pd=".5rem"br="0"
        className={s.divContainer}>
        <FormLogin breakPoint={breakPoint}handlerSetUserFlagApp={handlerSetUserFlagApp}/>
        <LinkCourses/>
        <LinkShop/>
        <Button bg="#60C72F"br="2rem"pd=".2rem 2rem .2rem 2rem"fWeight="bold"fSize="1.2rem"
          alSelf="flex-start"ml="2rem"mb="2rem"onClick={()=>navigate("/home")}
          >
          Ir al home!
        </Button>
      </Div>
    )
};