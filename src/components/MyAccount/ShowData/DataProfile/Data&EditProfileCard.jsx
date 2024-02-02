import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledFieldSet,
  StyledError,
  StyledSuccess,
  StyledAvatar,
  StyledAvatarWrapper,
  H1Form,
  Box,
  BoxColumn,
  BoxButton,
  StyledArrowWrapper,
  StyledSaveButton,
  StyledAllowInputs,
  StyledInputBlocked,
  BoxSaveButton,
} from "../../../../utils/StyledComponents/StyledMyAccount";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findUserById } from "../../../../redux/actions";
import { BsCheck } from "react-icons/bs";
import { TfiExchangeVertical } from "react-icons/tfi";
import axios from "axios";
import { HOST } from "../../../../utils";
import UploadImage from "../../../../utils/Cloudinary/UploadImage";
import bcryptjs from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import s from "./Data&EditProfileCard.module.css"

export default function ShowProfileData() {
  //HECHO CON REDUX STORE
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("loggedUser"));
  const [newAvatar, setViewNewAvatar] = useState("");

  const [input, setInput] = useState({
    name: userInfo?.name,
    surname: userInfo?.surname,
    email: userInfo?.email,
    phone: userInfo?.phone,
    img: userInfo?.img,
    currentPassword: userInfo?.password,
  });
  const [haveChanges, setHaveChanges] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    img: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  function notify (succes, msg) {
      toast[succes](msg);
  };
  // console.log("HAVE CHANGES: ", haveChanges);
  // console.log("ERRORS: ", errors);
  // console.log("INPUT: ", input);
  // console.log("USER: ", userInfo);
  // console.log("CURRENT: ", currentPassword);
  // console.log("SUCCESS: ", success.currentPassword);
  // console.log("NEW: ", newPassword);
  // console.log("CONFIRM: ", confirmPassword);

  async function validate() {
    let trimInput = {
      email: typeof input.email === "string" ? input.email?.trim() : "",
      name: typeof input.name === "string" ? input.name?.trim() : "",
      surname: typeof input.surname === "string" ? input.surname?.trim() : "",
      phone: typeof input.phone.toString() === "string"
          ? input.phone.toString().trim()
          : "",
      currentPassword:
        typeof currentPassword === "string" ? currentPassword.trim() : "",
      newPassword: typeof newPassword === "string" ? newPassword.trim() : "",
      confirmPassword:
        typeof confirmPassword === "string" ? confirmPassword.trim() : "",
    };

    let errorMessages = {};

    if (trimInput.email === "") {
      errorMessages.email = "Debes ingresar tu correo electronico.";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(trimInput.email)
    ) {
      errorMessages.email = "El formato de email es inválido.";
    }

    if (trimInput.name === "") {
      errorMessages.name = "Por favor ingresá tu nombre.";
    } else if (trimInput.name !== "" && trimInput.name.length <= 18) {
      errorMessages.name = "";
    } else if (trimInput.name.length > 18) {
      errorMessages.name = "El nombre puede contener hasta 18 caracteres.";
    }

    if (trimInput.surname === "") {
      errorMessages.surname = "Por favor ingresá tu apellido.";
    } else if (trimInput.surname !== "" && trimInput.surname.length <= 22) {
      errorMessages.surname = "";
    } else if (trimInput.surname.length > 22) {
      errorMessages.surname = "El apellido puede contener hasta 22 caracteres.";
    }

    if (trimInput.phone === "") {
      errorMessages.phone = "Por favor ingresá tu número de teléfono.";
    } else if (!(trimInput.phone.length >= 8 && trimInput.phone.length <= 10)) {
      errorMessages.phone = "El número debe tener entre 8 y 10 digitos.";
    } else {
      errorMessages.phone = "";
    }
    setErrors({ ...errors, ...errorMessages });
  }

  async function handlerChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handlerSubmit(e) {
    try {
    e.preventDefault();
    const userId = userInfo?.id;
    await axios.put(`${HOST}/users/updateMyAccount?id=${userId}`, input);
    dispatch(findUserById(userInfo.id));
    setInput({
      name: userInfo?.name,
      surname: userInfo?.surname,
      email: userInfo?.email,
      phone: userInfo?.phone,
      img: userInfo?.img,
    });
    setViewNewAvatar("");
    if (
      newPassword !== "" &&
      confirmPassword !== "" &&
      newPassword === confirmPassword
    ) {
      success.currentPassword = "";
    }
    setTimeout(()=>{
      notify('success', "Se han guardado los cambios")
    }, 1200
    )
    } catch (error) {
      console.log(error);
      notify('error', 'Error actualizando la información')
    }
    
  }

  function resetInputsPasswords() {
    // console.log("Entre");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  async function handlerSetNewPassword(e) {
    e.preventDefault();
    let id = userInfo?.id;
    if (
      confirmPassword !== "" &&
      newPassword !== "" &&
      confirmPassword === newPassword
    ) {
      await axios.put(`${HOST}/users/updateUserPass`, { confirmPassword, id });
      resetInputsPasswords();
    }
  }

  const comparePasswords = async (currentPassword) => {
    const match = await bcryptjs.compare(currentPassword, userInfo?.password);
    return match;
  };

  useEffect(() => {
    if (!userInfo.id) {
      dispatch(findUserById(userStorage.id));
    }
  }, [userInfo]);

  useEffect(() => {
    const checkPasswordMatch = async () => {
      const isEqual = await comparePasswords(currentPassword);
      let errorsMessages = { ...errors };
      let successMessages = { ...success };
      if (isEqual === true) {
        successMessages.currentPassword = "success";
        errorsMessages.currentPassword = "";
        errorsMessages.newPassword = "";
        validate();
      } else {
        errorsMessages.currentPassword = "Contraseña incorrecta";
        successMessages.currentPassword = "";
        errorsMessages.newPassword = "";
        validate();
      }
      setSuccess({ ...success, ...successMessages });
      setErrors({ ...errors, ...errorsMessages });
    };
    if (currentPassword) {
      checkPasswordMatch();
    } else if (currentPassword === "") {
      errors.currentPassword = "";
      errors.newPassword = "";
      validate(false);
    }
  }, [currentPassword]);

  useEffect(() => {
    const validatePasswords = async () => {
      if (newPassword !== "") {
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword) ||
          newPassword.length < 8 ||
          newPassword.length > 16
        ) {
          errors.newPassword = `La contraseña debe tener:\n-De 8 a 16 carácteres\n-Una mayúscula\n-Una minúscula\n-Un número`;
        } else if (newPassword === currentPassword) {
          errors.newPassword = "No puede ser igual a la actual.";
          success.newPassword = "";
        } else {
          errors.newPassword = "";
          success.newPassword = "success";
        }
      } else {
        errors.newPassword = "";
        success.newPassword = "";
      }

      if (confirmPassword !== "") {
        if (
          newPassword !== "" &&
          confirmPassword !== "" &&
          newPassword === confirmPassword
        ) {
          success.confirmPassword = "success";
          errors.confirmPassword = "";
        } else {
          errors.confirmPassword =
            "La confirmación y la nueva contraseña no coinciden.";
          success.confirmPassword = "";
        }
      } else {
        success.confirmPassword = "";
        errors.confirmPassword = "";
      }
    };

    validatePasswords();
  }, [currentPassword, newPassword, confirmPassword]);

  useEffect(() => {
    if (userInfo.id) {
      const errorsMatch = async () => {
        await validate();
      };
      errorsMatch();
    }
  }, [input, currentPassword, newPassword, confirmPassword]);

  useEffect(() => {
    setInput({
      name: userInfo?.name,
      surname: userInfo?.surname,
      email: userInfo?.email,
      phone: userInfo?.phone,
      img: userInfo?.img,
    });
  }, [userInfo]);

  useEffect(() => {
    const hashedConfirmPassword = async () => {
      if (
        confirmPassword !== "" &&
        newPassword !== "" &&
        confirmPassword === newPassword
      ) {
        let hashedPw = await bcryptjs.hash(confirmPassword, 11);
        if (userInfo?.id === hashedPw) {
          setHaveChanges(false);
        } else {
          setHaveChanges(true);
        }
      }
    };

    if (
      input?.img !== userInfo?.img ||
      input?.name !== userInfo?.name ||
      input?.surname !== userInfo?.surname ||
      input?.phone !== userInfo?.phone
    ) {
      setHaveChanges(true);
    } else {
      setHaveChanges(false);
    }

    hashedConfirmPassword();
  }, [input, confirmPassword]);

  return (
    <StyledFormWrapper className={s.container}>
      <ToastContainer position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <StyledForm
        onSubmit={(e) => [handlerSubmit(e), handlerSetNewPassword(e)]}
        className={s.StyledForm}
      >
        <div className={s.containerForm}>
          <BoxColumn className={s.boxColumn1}>
            <H1Form>Información personal</H1Form>
            <label>Nombre/s</label>
            <StyledInput
              type="text"
              name="name"
              defaultValue={userInfo.name}
              onChange={(e) => handlerChange(e)}
            />
            {errors.name && (
              <StyledError>
                <p>{errors.name}</p>
              </StyledError>
            )}
            <label>Apellido</label>
            <StyledInput
              type="text"
              name="surname"
              defaultValue={userInfo.surname}
              onChange={(e) => handlerChange(e)}
            />
            {errors.surname && (
              <StyledError>
                <p>{errors.surname}</p>
              </StyledError>
            )}
            <label>Email</label>
            <StyledInputBlocked
              type="email"
              name="email"
              value={userInfo.email}
              disabled={true}
            />
            <label>Teléfono/Celular</label>
            <StyledInput
              type="number"
              name="phone"
              defaultValue={userInfo.phone}
              onChange={(e) => handlerChange(e)}
            />
            {errors.phone && (
              <StyledError>
                <p>{errors.phone}</p>
              </StyledError>
            )}
            {/* <StyledFieldSet className={s.genresContainer}>
              <legend>Género</legend>
              <label>
                <input type="radio" value="female" name="gender" />
                Femenino
              </label>
              <label>
                <input type="radio" value="male" name="gender" />
                Masculino
              </label>
              <label>
                <input type="radio" value="other" name="gender" />
                Otro
              </label>
              <label>
                <input type="radio" value="notSayIt" name="gender" />
                Prefiero no decir
              </label>
            </StyledFieldSet> */}
            <BoxSaveButton>
              <StyledSaveButton
                type="submit"
                disabled={
                  Object.keys(errors).some((key) => errors[key] !== "") ===
                    true || haveChanges === false
                    ? true
                    : false
                }
                haveChanges={haveChanges}
                errors={errors}
              >
                Guardar
              </StyledSaveButton>
            </BoxSaveButton>
          </BoxColumn>
          <BoxColumn className={s.boxColumn2}>
            <H1Form>Contraseña</H1Form>
            <label>Contraseña actual</label>
            <StyledInput
              type="password"
              name="currentPassword"
              onChange={(e) => setCurrentPassword(e.target.value)}
              value={currentPassword}
              disabled={
                newPassword !== "" &&
                confirmPassword !== "" &&
                newPassword === confirmPassword
                  ? true
                  : false
              }
            />
            {success.currentPassword === "success" &&
            errors.currentPassword === "" ? (
              <StyledSuccess>
                <BsCheck size={30} />
              </StyledSuccess>
            ) : (
              <StyledError>
                <p>{errors.currentPassword}</p>
              </StyledError>
            )}
            <label>Nueva contraseña</label>

            <StyledAllowInputs
              type="password"
              name="newPassword"
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={success.currentPassword === "" ? true : false}
              placeholder={
                success.currentPassword === "success"
                  ? null
                  : "Ingresar primero la contraseña actual"
              }
              value={newPassword}
              success={success}
            />
            {success.newPassword === "success" && errors.newPassword === "" ? (
              <StyledSuccess>
                <BsCheck size={30} />
              </StyledSuccess>
            ) : (
              <StyledError>
                <pre>{errors.newPassword}</pre>
              </StyledError>
            )}
            <label>Confirmar nueva contraseña</label>
            <StyledAllowInputs
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder={
                success.currentPassword === "success"
                  ? null
                  : "Ingresar primero la contraseña actual"
              }
              disabled={success.currentPassword === "success" ? false : true}
              success={success}
            />
            {success.confirmPassword === "success" &&
            errors.newPassword === "" ? (
              <StyledSuccess>
                <BsCheck size={30} />
              </StyledSuccess>
            ) : (
              <StyledError>
                <p>{errors.confirmPassword}</p>
              </StyledError>
            )}

            <H1Form margin={"10px 0 10px"}>Avatar</H1Form>
            <StyledAvatarWrapper className={s.imgAvatar}> 
              <StyledAvatar src={userInfo.img} />
              {newAvatar !== "" && (
                <StyledArrowWrapper>
                  <TfiExchangeVertical size={30} style={{ margin: "0 10px" }} />
                  <StyledAvatar src={newAvatar}className={s.imgAvatar} />
                </StyledArrowWrapper>
              )}
            </StyledAvatarWrapper>
            <Box margin={"20px 0"}>
              <UploadImage
                inputProfile={input}
                setAvatarImg={setInput}
                setViewNewAvatar={setViewNewAvatar}
                folder={`user_avatar/${userInfo.id}`}
              />
            </Box>
          </BoxColumn>
        </div>
      </StyledForm>
    </StyledFormWrapper>
  );
}
