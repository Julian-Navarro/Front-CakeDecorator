import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function FormPostUser() {
const navigate = useNavigate()
let [errorsFlag, setErrorsFlag] = useState(false)
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

// const errors = {
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
}
async function postUser(trimInput){
        await axios.post(`${HOST}/users`, {...trimInput, role: "user", availableCourses: [], status: "active"});
        alert("Se ha creado tu cuenta con éxito")
        navigate("/")
}
async function validate(trimInput) {
    const users = await axios.get(`${HOST}/users`)
    let emailExist = false;
    users.data.forEach((user)=> user.email === trimInput.email?emailExist=true:null )
    var errors = {
        email: "",
        name: "",
        surname: "",
        phone: "",
        password: "",
        confirmPassword: "",

    }
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
    }
    if(trimInput.phone === "") {
        errors.phone = "Por favor ingresa tu número de telefono"
    } else if (!(trimInput.phone.length >= 8 && trimInput.phone.length <= 10)) {
        errors.phone = "El número debe tener entre 8 y 10 digitos"
    } else {
        errors.name = ""
    }
    if(trimInput.password === "") {
        errors.password = "Debes ingresar tu contraseña"
    } else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(trimInput.password)) || trimInput.password.length < 8 || trimInput.password > 16) {
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
    // errorsFlag===false?setErrorsFlag(true):setErrorsFlag(false)

    console.log("FN VALIDATE ERRORS: ", errors);
    if(!errors.email && !errors.name && !errors.surname && !errors.phone && !errors.password && !errors.confirmPassword) {
        postUser(trimInput)
    }
}

function handlerSubmit (e) {
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
    validate(trimInput)
}

useEffect(()=>{
    console.log("Renderizando componente");
    console.log(errors);
},[errorsFlag])
    return (
        <div>
            <h1>
            FORM POST USER
            </h1>
            <form className="formLogin" onSubmit={(e)=>{handlerSubmit(e)}}>
                <div><label htmlFor="">Ingresá tu E-mail</label> <input name="email" onChange={(e)=>{handlerChange(e)}} type="text"/></div>
                <p>{errors.email === ""?errors.email:"No hay error email"} </p>
                <div><label htmlFor="">Ingresá tu Nombre</label> <input name="name" onChange={(e)=>{handlerChange(e)}} type="text"/></div>
                {/* {errors.name?errors.name:null} */}
                <div><label htmlFor="">Ingresá tu Apellido</label> <input name="surname" onChange={(e)=>{handlerChange(e)}} type="text"/></div>
                {/* {errors.surname?errors.surname:null} */}
                <div><label htmlFor="">Ingresá tu Teléfono</label> <input name="phone" onChange={(e)=>{handlerChange(e)}} type="number"/></div>
                {/* {errors.phone?errors.phone:null} */}
                <div><label htmlFor="">Ingresá tu Contraseña</label> <input name="password" onChange={(e)=>{handlerChange(e)}} type="password"/></div>
                {/* {errors.password?errors.password:null} */}
                <div><label htmlFor="">Confirma tu Contraseña</label> <input name="confirmPassword" onChange={(e)=>{handlerChange(e)}} type="password"/></div>
                {/* {errors.confirmPassword?errors.confirmPassword:null} */}
                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    )
}
