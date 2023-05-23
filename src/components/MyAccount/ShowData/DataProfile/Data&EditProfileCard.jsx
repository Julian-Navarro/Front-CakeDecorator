import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledFieldSet,
  StyledError,
  StyledAvatar,
  StyledAvatarWrapper,
  H1Form,
  Box,
  BoxColumn,
  BoxButton,
  StyledArrowWrapper,
} from "../../../../utils/StyledComponents/StyledMyAccount";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findUserById } from "../../../../redux/actions";
import { FaRegEdit } from "react-icons/fa";
import { TfiExchangeVertical } from "react-icons/tfi";
import axios from "axios";
import { HOST } from "../../../../utils";
import UploadImage from "../../../../utils/Cloudinary/UploadImage";

export default function ShowProfileData() {
  //HECHO CON REDUX STORE
  // const [editing, setEditing] = useState(false);
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
  });

  console.log("INPUT ", input);

  function handlerChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    const userId = userInfo.id;
    await axios.put(`${HOST}/users/updateMyAccountInfo?id=${userId}`, input);
    dispatch(findUserById(userInfo.id));
    setInput({
      name: userInfo?.name,
      surname: userInfo?.surname,
      email: userInfo?.email,
      phone: userInfo?.phone,
      img: userInfo?.img,
    });
    setViewNewAvatar("");
    alert("Actualizado de forma correcta");
  }

  useEffect(() => {
    if (!userInfo.id) {
      dispatch(findUserById(userStorage.id));
    }
  }, [userInfo]);

  useEffect(() => {
    setInput({
      name: userInfo?.name,
      surname: userInfo?.surname,
      email: userInfo?.email,
      phone: userInfo?.phone,
      img: userInfo?.img,
    });
  }, [userInfo]);

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={(e) => handlerSubmit(e)}>
        <Box>
          <BoxColumn>
            <H1Form>Información personal</H1Form>
            <label>Nombre/s</label>
            <StyledInput
              type="text"
              name="name"
              defaultValue={userInfo.name}
              onChange={(e) => handlerChange(e)}
            />
            <label>Apellido</label>
            <StyledInput
              type="text"
              name="surname"
              defaultValue={userInfo.surname}
              onChange={(e) => handlerChange(e)}
            />
            <label>Email</label>
            <StyledInput
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
            <StyledFieldSet>
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
            </StyledFieldSet>
            <StyledError>
              <p>Mensaje de error va acá</p>
            </StyledError>
            <Box>
              <BoxButton>
                <StyledButton type="submit">Guardar</StyledButton>
              </BoxButton>
            </Box>
          </BoxColumn>
          <BoxColumn>
            <H1Form>Contraseña</H1Form>
            <label>Contraseña actual</label>
            <StyledInput />
            <label>Nueva contraseña</label>
            <StyledInput />
            <label>Confirma nueva contraseña</label>
            <StyledInput />
            <H1Form margin={"10px 0 10px"}>Avatar</H1Form>
            <StyledAvatarWrapper>
              <StyledAvatar src={userInfo.img} />
              {newAvatar !== "" && (
                <StyledArrowWrapper>
                  <TfiExchangeVertical size={30} style={{ margin: "0 10px" }} />
                  <StyledAvatar src={newAvatar} />
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
        </Box>
      </StyledForm>
    </StyledFormWrapper>
  );
}
