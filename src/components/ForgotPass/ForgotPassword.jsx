import axios from "axios";
import React, { useState } from "react";
import { HOST } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  let [error, setError] = useState({
    emailError: "",
  });

  const [errorsFlag, setErrorsFlag] = useState(false);

  const [input, setInput] = useState({
    email: "",
  });
  // console.log("INPUT", input);

  function changeErrorsFlag() {
    if (errorsFlag === true) {
      setErrorsFlag(false);
      // console.log(errorsFlag);
    } else {
      setErrorsFlag(true);
      // console.log(errorsFlag);
    }
  }

  function handlerChange(e) {
    e.preventDefault();
    setInput({
      [e.target.name]: e.target.value,
    });
    if (input.email.length > 0) {
      error.emailError = "";
    }
  }

  async function findEmail(trimInput, e) {
    let userInfo = await axios.get(
      `${HOST}/users/forgotPassword?email=${trimInput.email}`
    );
    // console.log("RES", userInfo);

    if (userInfo && userInfo.data !== "") {
      alert("Te enviamos un mail para cambiar la contraseña. ¡Revisalo!");
      navigate("/");
    } else if (userInfo.data === "") {
      alert("Ese email no está registrado");
      setInput({
        email: "",
      });
    }
  }

  function validate() {
    let trimInput = {
      email: input.email.trim(),
    };
    if (trimInput.email === "") {
      error.emailError = "Debes ingresar tu correo electrónico";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(trimInput.email)
    ) {
      error.emailError = "El formato de email es inválido";
    }
    changeErrorsFlag();
    return error;
  }

  async function handlerSubmit(e) {
    e.preventDefault();

    let trimInput = {
      email: input.email.trim(),
    };

    let errorEmail = validate();
    if (error.emailError === "") {
      findEmail(trimInput);
    } else {
      error = errorEmail;
      console.log("ERROR SUBMIT", error);
      return error;
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <h3>Ingresar tu email registrado</h3>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={(e) => handlerChange(e)}
        />
        <button type="submit">Buscar</button>
        <p>{error.emailError ? error.emailError : null}</p>
        <br />
      </form>
    </div>
  );
}
