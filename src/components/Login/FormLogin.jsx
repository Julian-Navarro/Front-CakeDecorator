import React from "react";
import "./FormLogin.css"

export default function Login () {
    return  (
        <div>
            <h1>LOGIN</h1>
            
            <form className="formLogin">
                <div><label htmlFor="">Ingresá tu E-mail</label> <input name="email" type="text"/></div>
                <div><label htmlFor="">Ingresá tu Nombre</label> <input name="name" type="text"/></div>
                <div><label htmlFor="">Ingresá tu Apellido</label> <input name="surname" type="text"/></div>
                <div><label htmlFor="">Ingresá tu Teléfono</label> <input name="phone" type="text"/></div>
                <div><label htmlFor="">Ingresá tu Contraseña</label> <input name="password" type="text"/></div>
            </form>
        </div>
    )
}