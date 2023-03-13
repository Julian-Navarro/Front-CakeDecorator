import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function FormPostUser() {
const navigate = useNavigate()
const [errorsFlag, setErrorsFlag] = useState(false)
let [errors, setErrors] = useState({
    email: "",
    name: "",
    surname: "",
    phone: "",
    password: "",
    confirmPassword: "",
})

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
const [input, setInput] = useState({
    email: "",
    name: "",
    surname: "",
    phone: "",
    password: "",
    confirmPassword: ""
})

// var errors = {
//     email: "",
//     name: "",
//     surname: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
// }

function handlerChange (e) {
    e.preventDefault();
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    console.log("INPUT HANDLER: ",input);
}

async function postUser(trimInput){
        await axios.post(`${HOST}/users`, {...trimInput, role: "user", availableCourses: [], status: "active"});
        alert("Se ha creado tu cuenta con éxito")
        navigate("/")
}
async function validate() {
    let trimInput = {
        email: input.email.trim(),
        name: input.name.trim(),
        surname: input.surname.trim(),
        phone: input.phone.trim(),
        password: input.password.trim(),
        confirmPassword: input.confirmPassword.trim(),
    }
    const users = await axios.get(`${HOST}/users`)
    let emailExist = false;
    users.data.forEach((user)=> user.email === trimInput.email?emailExist=true:null )


    if(trimInput.email === "") {
        errors.email = "Debes ingresar tu correo electrónico"
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(trimInput.email))) {
        errors.email = "El formato de email es inválido"
    } else if (emailExist) {
        errors.email = `El correo '${trimInput.email}' ya está en uso`
    } else {
        errors.email = ""
    }
    if(trimInput.name === "") {
        errors.name = "Por favor ingresa tu nombre"
    } else if (trimInput.name.length > 18) { 
        errors.name = "El nombre puede contener hasta 18 caracteres"
    } else {
        errors.name = ""
    }
    if(trimInput.surname === "") {
        errors.surname = "Por favor ingresa tu apellido"
    } else if(trimInput.surname.length > 22) {
        errors.surname = "El apellido puede contener hasta 22 caracteres"
    } else {
        errors.surname = ""
    }
    if(trimInput.phone === "") {
        errors.phone = "Por favor ingresa tu número de telefono"
    } else if (!(trimInput.phone.length >= 8 && trimInput.phone.length <= 10)) {
        errors.phone = "El número debe tener entre 8 y 10 digitos"
    } else {
        errors.phone = ""
    }
    if(trimInput.password === "") {
        errors.password = "Debes ingresar tu contraseña"
    } else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(trimInput.password)) || trimInput.password.length < 8 || trimInput.password.length > 16) {
        errors.password = "La contraseña debe tener entre 8 y 16 caracteres, una mayúscula, una minúscula y un número."
    } else {
        errors.password = ""
    }
    if(trimInput.confirmPassword === ""){
        errors.confirmPassword = "Debes confirmar tu contraseña"
    } else if(trimInput.confirmPassword !== trimInput.password) {
        errors.confirmPassword = "La confirmación de la contraseña no coincide"
    } else {
        errors.confirmPassword = ""
    }
    changeErrorsFlag()
    console.log("FN VALIDATE ERRORS: ", errors);
    return errors
}

 async function handlerSubmit (e) {
    e.preventDefault();
    //? Por si el usuario se equivoca y manda un espacio vacio al principio o al final
    //? El proceso puede seguir con normalidad en tal caso
    let trimInput = {
        email: input.email.trim(),
        name: input.name.trim(),
        surname: input.surname.trim(),
        phone: input.phone.trim(),
        password: input.password.trim(),
        confirmPassword: input.confirmPassword.trim(),
    }
    var newErrors = await validate();

    if(newErrors.email === "" && newErrors.name === "" && newErrors.surname === "" && newErrors.phone === "" && newErrors.password === "" && newErrors.confirmPassword === "" ) {
        errors = newErrors
        console.log("Entrando caso de postear usuario");
        postUser(trimInput)
    } else {
        errors = newErrors
        console.log("CASO NO SE PUEDE POSTEAR XQ HAY UN ERROR");
    }
    // validate()
}

useEffect(()=>{
    console.log("USEEFFECT------------------------------------");
    console.log("Errors: ",errors);
    // validate()
},[])
    return (
        <div>
            <h1>
            FORM POST USER
            </h1>
            <form className="formLogin" onSubmit={(e)=>{handlerSubmit(e)}}>
                <div><label htmlFor="">Ingresá tu E-mail</label> <input name="email" onChange={(e)=>{handlerChange(e)}} type="text"/></div>
                <p>{errors.email?errors.email:null} </p>
                <div><label htmlFor="">Ingresá tu Nombre</label> <input name="name" onChange={(e)=>{handlerChange(e)}} type="text"/></div>
                <p>{errors.name?errors.name:null} </p>
                <div><label htmlFor="">Ingresá tu Apellido</label> <input name="surname" onChange={(e)=>{handlerChange(e)}} type="text"/></div>
                <p>{errors.surname?errors.surname:null} </p>
                <div><label htmlFor="">Ingresá tu Teléfono</label> <input name="phone" onChange={(e)=>{handlerChange(e)}} type="number"/></div>
                <p>{errors.phone !== ""?errors.phone:null} </p>
                <div><label htmlFor="">Ingresá tu Contraseña</label> <input name="password" onChange={(e)=>{handlerChange(e)}} type="password"/></div>
                <p>{errors.password?errors.password:null} </p>
                <div><label htmlFor="">Confirma tu Contraseña</label> <input name="confirmPassword" onChange={(e)=>{handlerChange(e)}} type="password"/></div>
                <p>{errors.confirmPassword?errors.confirmPassword:null} </p>
                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    )
}
