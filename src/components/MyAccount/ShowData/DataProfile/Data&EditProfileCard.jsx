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
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("loggedUser"));
  const userInfo = useSelector((state) => state.user);
  const [editing, setEditing] = useState(false);
  const [newAvatar, setViewNewAvatar] = useState("");
  const [input, setInput] = useState({
    name: userInfo?.name,
    surname: userInfo?.surname,
    email: userInfo?.email,
    phone: userInfo?.phone,
    img: userInfo?.img,
  });

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
    setEditing(false);
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
    <div>
      {editing === false ? (
        <div>
          <h1>Datos Personales</h1>
          <label>
            Foto de perfil:{" "}
            <img
              src={userInfo.img}
              height={"80px"}
              width={"80px"}
              alt="Sin imagen"
            />
          </label>
          <br />
          <label>Nombre: {userInfo?.name}</label>
          <br />
          <label>Apellido: {userInfo?.surname}</label>
          <br />
          <label>Email: {userInfo?.email}</label>
          <br />
          <label>Tel/Cel: {userInfo?.phone}</label>
          <br />
          <button onClick={() => setEditing(true)}>
            <FaRegEdit size={25} />
          </button>
        </div>
      ) : (
        <div>
          <h1>Editar</h1>
          <form onSubmit={(e) => handlerSubmit(e)}>
            <div>
              <label>Nombre: {userInfo.name}</label>
            </div>
            <div>
              <label>Apellido: {userInfo.surname}</label>
            </div>
            <label>Email: {userInfo.email}</label>
            <br />
            <label>Tel/Cel: </label>
            <input
              type="text"
              name="phone"
              onChange={(e) => handlerChange(e)}
              defaultValue={userInfo.phone}
            />
            <br />
            <label>
              Avatar:{" "}
              <img src={userInfo.img} alt="Sin avatar" width={"120px"} />
            </label>
            <br />
            {newAvatar !== "" ? (
              <label htmlFor="">
                <TfiExchangeVertical size={30} />
                <br />
                <img src={newAvatar} alt="" width="120px" />
              </label>
            ) : null}
            <br />
            <UploadImage
              inputProfile={input}
              setAvatarImg={setInput}
              setViewNewAvatar={setViewNewAvatar}
              folder={`user_avatar/${userInfo.id}`}
            />
            <button type="submit">Guardar</button>
            <button onClick={() => setEditing(false)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
}
