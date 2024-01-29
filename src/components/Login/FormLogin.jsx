import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../utils";
import bcryptjs from "bcryptjs"
import { useNavigate } from "react-router-dom";
import { Div, Button, P, Label, Form, Input } from "../../utils/StyledComponents/StyledComponents";
import s from "./FormLogin.module.css"
import logo from "../../utils/IMAGES/Logo.png"

export default function Login ({handlerSetUserFlagApp, breakPoint}) {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        status: ""
    })
    const [errorsFlag, setErrorsFlag] = useState(false)
    function changeErrorsFlag () {
        if(errorsFlag === true) {
            // console.log("Seteando TRUE ");
            setErrorsFlag(false)
            // console.log(errorsFlag);
        } else {
            // console.log("Seteando FALSE ");
            setErrorsFlag(true)
            // console.log(errorsFlag);
        }
    }
    function handlerChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        // console.log("INPUT: ", input);
    }
    async function validate() {
        // console.log("SUBMIT INPUT: ",input);

        const userDB = await axios.get(`${HOST}/users/userEmail/?email=${input.email}`);
        const user = userDB.data

        if(input.email.trim() === "") {
            errors.email = "Debes ingresar tu email para ingresar a tu cuenta"
        } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email))) {
            errors.email = "El formato de email ingresado no es válido"
        } else if(user === false) {
            errors.email = "No existe un usuario con ese email"
        } else {
            errors.email = ""
        } 
        if(input.password === "") {
            errors.password = "Debes ingresar la contraseña"
        } else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(input.password)) || input.password.length < 8 || input.password.length > 16) {
            errors.password = "La contraseña debe tener entre 8 y 16 caracteres, una mayúscula, una minúscula y un número."
        } else {
            errors.password = ""
            if(user !== false){

                const pwIsCorrect = await bcryptjs.compare(input.password, user.password)
                // console.log("PW IS CORRECT: ",pwIsCorrect);
                if(pwIsCorrect) {
                    if(user.status === "active"){
                        localStorage.setItem("loggedUser", JSON.stringify(user))
                        handlerSetLoggedUserFlag()
                        handlerSetUserFlagApp()
                        alert("Usuario logeado correctamente");
                        navigate("/courses")
                    }else{
                        errors.status = "Falta verificar la cuenta. Revisar correo"
                        alert("Falta verificar la cuenta. Revisá tu correo por favor.")
                    }
                } else {
                    errors.password = "Contraseña incorrecta"
                    alert("La contraseña es incorrecta")
                }
            }
        }
        changeErrorsFlag()
        console.log("ERRORS: ",errors);
    }

    async function handlerSubmit (e) {
        e.preventDefault()
        validate()
        // console.log("FUERA DE CONTEXTO DE VALIDATE, USER: ",user);
        if(errors.email && errors.password && errors.status) {
            
        }
    }
    
    const [loggedUserFlag, setLoggedUserFlag] = useState(false);
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));

    
    function handlerSetLoggedUserFlag() {
        if(loggedUserFlag === false) {
            // console.log("SETEANDO FLAG: ", loggedUserFlag);
            // console.log("USER STATE: ", loggedUser);
            setLoggedUserFlag(true)
        } else {
            console.log("SETEANDO FLAG: ", loggedUserFlag);
            console.log("USER STATE: ", loggedUser);
            setLoggedUserFlag(false)
        }
    }
    function handlerCloseSesion (e) {
        e.preventDefault();
        localStorage.clear()
        handlerSetLoggedUserFlag()
        handlerSetUserFlagApp()
        setLoggedUser(null)
        alert("Sesión cerrada")
    }
    useEffect(()=>{

    },[errorsFlag, loggedUserFlag])

    useEffect(()=>{},[loggedUserFlag])
    useEffect(()=>{
        console.log("US-EFF: BREAK POINT: ", breakPoint);
    },[breakPoint])
    return loggedUser === null
     ? (
        <Div alItems="flex-start"bd="4px solid #F6C5F5"br="1rem"mt="2rem"boxSh="4px 4px 1rem .2rem #333"
            wd={breakPoint!=1?"34rem":"100%"}hg={breakPoint!=1?"19.5rem":"34rem"}flexDir={breakPoint!=1?"row":"column"}bg="#fff"
            >
            <Div flexDir="column"wd={breakPoint!=1?"50%":"100%"}hg={breakPoint!=1?"100%":"40%"}jfCont="space-between">
              <P txtD="underline"color="#333"fWeight="bold"fSize="1.3rem"txAlign="center"wd="100%"hg="1.8rem">Ingresá a tu cuenta</P>
              <Div flexDir={breakPoint!=1?"column":"row"}mt={breakPoint!=1?"0":"1rem"}>
                <Div wd={breakPoint!=1?"14rem":"14rem"}br="50%" hg={breakPoint!=1?"9rem":"9rem"}
                  >
                  <img src={logo}/>
                </Div>
                <P color="#383838"ml=".3rem"mr=".3rem"letterSp="0.04rem"fWeight="bold"
                    txAlign="center"wd={breakPoint!=1?"100%":"50%"}fSize={breakPoint!=1?"1rem":"1.2rem"}
                    className={s.title}>
                  Aprendé de los mejores cursos de decoración de tortas!
                </P>
              </Div>
              <P color="#383838"fSize={breakPoint!=1?".85rem":"1rem"}fWeight="bold"txtD="underline"onClick={()=>navigate("/home")}cursor="pointer"mb=".2rem"_hovCol="#5A5AEA">Explorá la pagina sin cuenta</P>
            </Div>

            <Div wd={breakPoint!=1?"50%":"100%"}hg={breakPoint!=1?"100%":"60%"}flexDir="column"jfCont="flex-start">
              <Form flexDir="column"wd="100%"onSubmit={(e)=>{handlerSubmit(e)}}bg="transparent">
                <Div bg="transparent"wd="100%"flexDir="column"mt="1rem">
                  <Label wd="90%"jfCont="flex-start"color={errors.email?"#EB6F6F":"#333"}pd="0"bg="transparent">
                    <P br="0"letterSp=".05rem"fSize=".8rem"hg="1.2rem"pd="0 .5rem 0 .5rem"
                       fWeight="bold"
                       bg="transparent">
                        E-mail
                    </P>
                  </Label> 
                  <Input className={errors.email?s.inputFormLoginDanger:s.inputFormLogin}txAlign="left"name="email"
                    onChange={(e)=>{handlerChange(e)}}type="text"bg="#fff"br="2rem"wd="90%"
                    boxSh="4px 4px .4rem .1rem #878787"bd="1.5px solid lightgray"fSize=".85rem"/>
                  <P pd="0"wd="88%"hg="1.5rem"jfCont="flex-start"fSize=".75rem"letterSp="0.02rem"
                    fWeight="bold"bg="transparent"alItems="flex-start"mt=".5rem"color="#EB6F6F">
                    {errors.email!== ""? errors.email :""}
                  </P>
                </Div>
                
                <Label wd="90%"jfCont="flex-start"color={errors.password?"#EB6F6F":"#333"}bg="transparent">
                  <P br="0"letterSp=".05rem"fSize=".8rem"hg="1.2rem"pd="0 .5rem 0 .5rem"mt={breakPoint!=1?"0":".5rem"}
                   fWeight="bold"
                   bg="transparent"
                  >
                    Contraseña
                    </P>
                </Label> 
                <Input className={errors.password?s.inputFormLoginDanger:s.inputFormLogin}txAlign="left"name="password"
                  onChange={(e)=>{handlerChange(e)}}type="password"bg="#fff"br="2rem"wd="90%"
                  boxSh="4px 4px .4rem .1rem #878787"bd="1.5px solid lightgray"fSize=".85rem"
                />
                <P pd="0"wd="88%"minHg="3.5rem"jfCont="flex-start"fSize=".75rem"letterSp="0.02rem"
                    fWeight="bold"bg="transparent"mb="rem"alItems="flex-start"color="#EB6F6F"mt=".5rem">
                    {errors.password!== ""? errors.password :""}
                </P>
    
                <Button type="submit"_hovCol="#7CA9D2"color="#fff"
                    boxSh="2px 2px .2rem .1rem rgb(0,0,0,0.2)"wd="90%"hg="1.8rem"fSize="1.2rem"
                    pd="0"bg="linear-gradient(20deg, #EABCE9 50%, #F8D4F7 100%)"br="2rem"fWeight="bold"bd="none"
                    >
                    Ingresar
                </Button>
                <P cursor="pointer"fSize=".85rem"_hovCol="#5A5AEA"mt="2rem"
                    pd="0 1rem 0 1rem"bg="transparent"color="#333"
                    onClick={()=>navigate("/forgotPassword")}>
                    ¿Olvidaste tu contraseña?
                </P>
                <P cursor="pointer"fSize=".85rem"_hovCol="#5A5AEA"
                    pd="0 1rem 0 1rem"bg="transparent"color="#333"
                    onClick={()=>navigate("/createAccount")}>
                    ¿No tenés cuenta? Creala ahora!
                </P>
              </Form>
            </Div>
        </Div>
    )
    : null
}