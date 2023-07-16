import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../utils";
import bcryptjs from "bcryptjs"
import { useNavigate } from "react-router-dom";
import { Div, Button, P, H2, Label, Form, Input, Img } from "../../utils/StyledComponents/StyledComponents";
import s from "./FormLogin.module.css"
import background from "../../utils/imgFondoUserLogin.jpg"
import userNotFoundIcon from "../../utils/user-icon.png"

export default function Login ({handlerSetUserFlagApp}) {
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
        console.log("SUBMIT INPUT: ",input);
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
                console.log("PW IS CORRECT: ",pwIsCorrect);
                if(pwIsCorrect) {
                    // console.log("CASO LA PW ES LA MISMA");
                    if(user.status === "active"){
                        localStorage.setItem("loggedUser", JSON.stringify(user))
                        handlerSetLoggedUserFlag()
                        handlerSetUserFlagApp()
                        alert("Usuario logeado correctamente");
                        navigate("/home")
                    }else{
                        errors.status = "Falta verificar la cuenta. Revisar correo"
                        alert("Falta verificar la cuenta. Revisá tu correo por favor.")
                    }
                } else {
                    // console.log("CASO LA PW NOOO ES LA MISMA");
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

    return loggedUser === null
     ? (
  
        <Div alItems="flex-start"jfCont="space-between"bg="#e8f0fd"blur="blur(3px)"wd="34rem"hg="22rem"mr="4%"br=".3rem"mt="1rem"boxSh="4px 4px 1rem .2rem #333">
            <Div clPath="50% 0, 60% 0%, 0% 100%, 0% 0%"bg="#f6d0db"wd="100%"hg="100%"br=".2rem"pos="absolute"zInd="-1">
            </Div>

            <Div flexDir="column"wd="40%"mt="1rem">
                <H2 letterSp="0.05rem"fSize="1.7rem"bg="transparent"fWeight="bold">Bienvenidos!</H2>
                <P ml=".5rem"letterSp="0.05rem"fSize="1.3rem"txAlign="left">Ingresá a tu cuenta!</P>
                <div className={s.divGradient}
                 mt="1rem"ml="1rem"wd="14rem"hg="1.6rem">
                    <Button hg="1.6rem"cursor="pointer"wd="100%"fWeight="bold"fSize="1.2rem"color="#252525"fnFamily="'Roboto'"pd="0 1rem 0 1rem"bg="transparent"boxSh="2px 2px .4rem .02rem #333" onClick={()=>navigate("/createAccount")}>Crear una cuenta</Button>
                </div>
            </Div>

            <Div wd="50%"hg="100%"pd="5px"flexDir="column"jfCont="flex-end">
            <Form bg="#e8f0fd"flexDir="column"wd="100%"onSubmit={(e)=>{handlerSubmit(e)}}>
                <Div bg="transparent"wd="100%"flexDir="column">
                    <Label wd="90%"jfCont="flex-start"color={errors.email?"red":"#333"}pd="0"bg="transparent">
                        <P br="0"letterSp=".05rem"fSize=".9rem"hg="1.2rem"pd="0 .5rem 0 .5rem"bg="transparent"brB={errors.email?"2px solid red":"2px solid #333"}>E-mail</P>
                    </Label> 
                    <input className={errors.email?s.inputFormLoginDanger:s.inputFormLogin}name="email"onChange={(e)=>{handlerChange(e)}}type="text" />
                <P pd="0"wd="88%"hg="1.5rem"jfCont="flex-start"fSize=".75rem"letterSp="0.02rem" fWeight="bold"bg="transparent"alItems="flex-start">{errors.email!== ""? errors.email :""}</P>

                </Div>
                <Div bg="transparent"pd="5px"wd="100%"flexDir="column">
                    <Label wd="90%"jfCont="flex-start"color={errors.password?"red":"#333"}pd="0"bg="transparent">
                        <P br="0"letterSp=".05rem"fSize=".9rem"hg="1.2rem"pd="0 .5rem 0 .5rem"bg="transparent"brB={errors.password?"2px solid red":"2px solid #333"}>Contraseña</P>
                    </Label> 
                    <input className={errors.password?s.inputFormLoginDanger:s.inputFormLogin}name="password"onChange={(e)=>{handlerChange(e)}}type="password"/>
                    <P pd="0"wd="88%"minHg="3.5rem"jfCont="flex-start"fSize=".75rem"letterSp="0.02rem"fWeight="bold"bg="transparent"mb="rem"alItems="flex-start">{errors.password!== ""? errors.password :""}</P>
                    <P pd="0"wd="88%"hg="1.3rem"jfCont="flex-start"fSize=".75rem"letterSp="0.02rem"fWeight="bold"bg="transparent"alItems="flex-start">{errors.status!== ""? errors.status : ""}</P>
                </Div>
                <Div>
                    <Button mt="0.5rem"type="submit"bg="rgb(240, 147, 186, 0.75)"_hovCol="#fff"color="#eee"_hovBSh="2px 2px .2rem .1rem rgb(0,0,0,0.2)"wd="50%"hg="2rem"fWeight="bold"fSize="1.2rem"pd="0"fnFamily="Roboto">Ingresar</Button>
                </Div>
            </Form>
            <Div flexDir="column">
                    {/* <P cursor="pointer"fSize=".85rem"_hovCol="rgb(45, 45, 209)"_hovBg="rgb(0, 0, 0, 0.25)"pd="0 1rem 0 1rem"bg="transparent"onClick={()=>navigate("/createAccount")}>Si no tienes cuenta, creala aquí</P> */}
                    <P cursor="pointer"fSize=".85rem"_hovCol="rgb(45, 45, 209)"_hovBg="rgb(0, 0, 0, 0.25)"pd="0 1rem 0 1rem"bg="transparent"onClick={()=>navigate("/forgotPassword")}>¿Olvidaste tu contraseña?</P>
            </Div>
            </Div>
        </Div>
    )
    : (
        <Div flexDir="column"bg="#e8f0fd"blur="blur(3px)"overflow="hidden"jfCont="flex-start"wd="20rem"hg="30rem"mr="4%"br="1.4rem"mt="1rem"boxSh="4px 4px 1rem .2rem #333">
            <Div flexDir="column"img={background}boxSh="0 0 1rem .2rem #333"hg="12rem"jfCont="flex-start"br="1.2rem 1.2rem 0 0">
                <P fnFamily="fantasy"letterSp=".05rem"
                    fSize="2rem"color="rgb(132, 192, 245)"textSh="#33333370">
                        Sesión Iniciada
                </P>
                <P 
                    fnFamily="fantasy"letterSp=".05rem"
                    fSize="1.5rem"color="#eeee"textSh="#33333370"
                    > {loggedUser.name} {loggedUser.surname}
                </P>
            </Div>
            <Div flexDir="column"pos="relative"posTop="-4rem">
                <Div flexDir="column">
                    <Div bg="gray"wd="auto"br="50%"boxSh="
                    0 0 3rem .2rem lightblue,
                     0 0 1rem .1rem blue
                    ">
                        <Img br="50%"src={loggedUser.img?loggedUser.img:userNotFoundIcon}/>
                    </Div>
                <P fSize="1.1rem">{loggedUser.email}</P>
                </Div>
            </Div>
            <Button pd=".2rem 1.2rem .2rem 1.2rem"bg="rgb(0,0,0,0.45)"fSize="1rem"onClick={handlerCloseSesion}>
                Cerrar sesión
            </Button>
        </Div>
    )
}