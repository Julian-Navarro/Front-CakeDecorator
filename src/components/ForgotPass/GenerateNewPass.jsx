import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../utils";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function GenerateNewPass() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [input, setInput] = useState({
    newPassword: "",
    samePassword: "",
  });
  let [errors, setErrors] = useState({
    newPassword: "",
    samePassword: "",
  });
  console.log("INPUT", input);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    let trimInput = {
      newPassword: input.newPassword.trim(),
      samePassword: input.samePassword.trim(),
    };

    if (trimInput.newPassword === "") {
      errors.newPassword = "Debes ingresar tu contraseña";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(trimInput.newPassword) ||
      trimInput.newPassword.length < 8 ||
      trimInput.newPassword.length > 16
    ) {
      errors.newPassword =
        "La contraseña debe tener entre 8 y 16 caracteres, una mayúscula, una minúscula y un número.";
    } else {
      errors.newPassword = "";
    }
    if (trimInput.samePassword === "") {
      errors.samePassword = "Debes repetir tu contraseña";
    } else if (trimInput.samePassword !== trimInput.newPassword) {
      errors.samePassword = "La confirmación de la contraseña no coincide";
    } else {
      errors.samePassword = "";
    }

    return errors;
  }

  async function sendNewPassword(trimInput) {
    const response = await axios.put(`${HOST}/users/updateUserPass`, {...trimInput, id});

    if(response !== null){
        alert("¡Contraseña actualizada correctamente!")
        navigate("/")
    }else{
        alert("Algo salió mal")
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let trimInput = {
      newPassword: input.newPassword.trim(),
      samePassword: input.samePassword.trim(),
    };

    var newErrors = validate();
    if (newErrors.newPassword === "" && newErrors.samePassword === "") {
      errors = newErrors;
      //   console.log("EMPTY ERR", errors);
      sendNewPassword(trimInput);
    }
  }

  useEffect(() => {}, []);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Ingresá nueva Contraseña</label>
          <input
            name="newPassword"
            onChange={(e) => {
              handleChange(e);
            }}
            type="password"
          />
        </div>
        <p>{errors.newPassword ? errors.newPassword : null} </p>
        <div>
          <label>Repite la Contraseña</label>
          <input
            name="samePassword"
            onChange={(e) => {
              handleChange(e);
            }}
            type="password"
          />
        </div>
        <p>{errors.samePassword ? errors.samePassword : null} </p>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
