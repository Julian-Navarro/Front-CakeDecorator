import React from "react";
import "./FormLogin.css"

export default function Login () {
    return  (
        <div>
            
                <p> Ingresá a tu cuenta</p>
            <form className="formLogin">
                <div><label htmlFor="">Ingresá tu E-mail</label> <input name="email" type="text"/></div>
                <div><label htmlFor="">Ingresá tu Contraseña</label> <input name="password" type="password"/></div>
            </form>
        </div>
    )
}