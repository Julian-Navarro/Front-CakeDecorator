import axios from "axios";
import React, { useState } from "react";
import "./FormLogin.css"
import { HOST } from "../../utils";

export default function Login () {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    function handlerChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        
        console.log("INPUT: ", input);
    }
    async function validate() {
        console.log("SUBMIT INPUT: ",input);
        var user = await axios.post(`${HOST}/users/userEmail`, {userEmail: input.email});
        console.log("USER: ",user.data);

        if(input.email.trim() === "") {
            errors.email = "Debes ingresar tu email para ingresar a tu cuenta"
        } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email))) {
            errors.email = "El formato de email ingresado no es válido"
        } else if(user.data === false) {
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
        }
        
        console.log("ERRORS: ",errors);
    }

    async function handlerSubmit (e) {
        e.preventDefault()
        validate()
        // console.log("FUERA DE CONTEXTO DE VALIDATE, USER: ",user);
        if(errors.email && errors.password) {
            
        }
    }
    return  (
        <div>
            <h3> Ingresá a tu cuenta</h3>
            <form onSubmit={(e)=>{handlerSubmit(e)}} className="formLogin">
                <div><label htmlFor="">Ingresá tu E-mail</label> <input name="email" onChange={(e)=>{handlerChange(e)}} type="text"/></div>
                <div><label htmlFor="">Ingresá tu Contraseña</label> <input name="password" onChange={(e)=>{handlerChange(e)}} type="password"/></div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}