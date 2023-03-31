import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../utils";

export default function ForgotPassword() {
  let [error, setError] = useState({
    emailError: "",
  });
  console.log("ERROR", error);

  const [input, setInput] = useState({
    emailExist: "",
  });
  console.log("INPUT", input);

  function handlerSearchMail(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    let trimInput = {
      emailExist: input.emailExist.trim(),
    };
    // console.log("TRIM", trimInput);
    if (trimInput.emailExist === "") {
      error.emailError = "Falta ingresar el email!";
    } else if (trimInput.emailExist !== "") {
      error.emailError = "";
    }
    return error;
  }

  async function findEmail(trimInput) {
    const findEmail = await axios.get(
      `${HOST}/users/forgotPassword?email=${trimInput.emailExist}`
    );
    console.log("FIND", findEmail);
    if (findEmail.data !== false) {
      alert("Te enviamos un mail para cambiar la contraseña. ¡Revisalo!");
    } else {
      alert("Ese email no está registrado");
    }
  }

  async function handlerSubmit(e) {
    e.preventDefault();

    let trimInput = {
      emailExist: input.emailExist.trim(),
    };

    let errorEmail = validate();
    // console.log("ERROR VALIDATE", errorEmail)

    if (error.emailError === "") {
      findEmail(trimInput);
    } else {
      error = errorEmail;
      console.log("ERROR SUBMIT", error);
      return error;
    }
  }

  useEffect(() => {}, []);

  return (
    <div>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <h3>Ingresar tu email ya registrado</h3>
        <input
          type="email"
          name="emailExist"
          onChange={(e) => handlerSearchMail(e)}
        />
        <button type="submit">Buscar</button>
        <p>{error.emailError ? error.emailError : null}</p>
        <br />
      </form>
    </div>
  );
}
