import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FormLogin.css"
import { HOST } from "../../utils";
import bcryptjs from "bcryptjs"
import { useNavigate } from "react-router-dom";

export default function Login ({handlerSetUserFlagApp}) {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const [errorsFlag, setErrorsFlag] = useState(false)
    function changeErrorsFlag () {
        if(errorsFlag === true) {
            console.log("Seteando TRUE ");
            setErrorsFlag(false)
            console.log(errorsFlag);
        } else {
            console.log("Seteando FALSE ");
            setErrorsFlag(true)
            console.log(errorsFlag);
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
        console.log("USER: ",user);

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
                console.log("Usuario existe validate: ");

                const pwIsCorrect = await bcryptjs.compare(input.password, user.password)
                console.log("PW IS CORRECT: ",pwIsCorrect);
                if(pwIsCorrect) {
                    // console.log("CASO LA PW ES LA MISMA");
                    localStorage.setItem("loggedUser", JSON.stringify(user))
                    handlerSetLoggedUserFlag()
                    handlerSetUserFlagApp()
                    alert("Usuario logeado correctamente");
                    navigate("/home")
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
        if(errors.email && errors.password) {
            
        }
    }
    
    const [loggedUserFlag, setLoggedUserFlag] = useState(false);
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));

    
    function handlerSetLoggedUserFlag() {
        if(loggedUserFlag === false) {
            console.log("SETEANDO FLAG: ", loggedUserFlag);
            console.log("USER STATE: ", loggedUser);
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
        <div>
            <h3> Ingresá a tu cuenta</h3>
            <form onSubmit={(e)=>{handlerSubmit(e)}} className="formLogin">
                <div><label htmlFor="">Ingresá tu E-mail</label> <input name="email" onChange={(e)=>{handlerChange(e)}} type="text"/></div>
                <p>{errors.email!== ""? errors.email :"No hay errror"}</p>
                <div><label htmlFor="">Ingresá tu Contraseña</label> <input name="password" onChange={(e)=>{handlerChange(e)}} type="password"/></div>
                <p>{errors.password!== ""? errors.password :"No hay errror"}</p>
                <button type="submit">Ingresar</button>
                <br />
            </form>
            <button onClick={()=>{navigate("/home")}}>Ingresar como usuario invitado</button>
        </div>
    )
    : (
        <div>
            <h4>USUARIO LOGEADO</h4>
            <button onClick={(e)=>{handlerCloseSesion(e)}}>Cerrar sesión</button>
        </div>
    )
}