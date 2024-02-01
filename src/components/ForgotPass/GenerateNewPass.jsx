import React, { useState } from "react";
import axios from "axios";
import { HOST } from "../../utils";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function GenerateNewPass() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [input, setInput] = useState({
    newPassword: "",
    samePassword: "",
  });
  const [errorsFlag, setErrorsFlag] = useState(false);
  let [errors, setErrors] = useState({
    newPassword: "",
    samePassword: "",
  });

  function changeErrorsFlag() {
    if (errorsFlag === true) {
      setErrorsFlag(false);
      // console.log(errorsFlag);
    } else {
      setErrorsFlag(true);
      // console.log(errorsFlag);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (input.newPassword.length > 0) {
      errors.newPassword = "";
    }
    if (input.samePassword.length > 0) {
      errors.samePassword = "";
    }
  }

  async function sendNewPassword(trimInput) {
    const updateUser = await axios.put(`${HOST}/users/updateUserPass`, {
      ...trimInput,
      id,
    });

    console.log("UPDATE", updateUser);
    if (updateUser.data !== "") {
      alert("¡Contraseña actualizada correctamente!");
      navigate("/");
    } else {
      alert("Algo salió mal");
    }
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

    changeErrorsFlag();
    return errors;
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
      sendNewPassword(trimInput);
    }
  }

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
            value={input.newPassword}
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
            value={input.samePassword}
          />
        </div>
        <p>{errors.samePassword ? errors.samePassword : null} </p>
        <br />
        <button type="submit">Guardar</button>
        <br />
        <Link to="/">Ingresar</Link>
      </form>
    </div>
  );
}
