// import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findUserById } from "../../../../redux/actions";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { Image } from "cloudinary-react";
import { HOST } from "../../../../utils";
import UploadImage from "../../../../utils/Cloudinary/UploadImage";

export default function ShowProfileData() {
  //HECHO CON REDUX STORE

  const defaultImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("loggedUser"));
  const userInfo = useSelector((state) => state.user);
  // console.log("INFO", userInfo);

  const [img2, setImg] = useState("");
  // console.log("IMG", img2);

  const [input, setInput] = useState({
    name: userInfo?.name,
    surname: userInfo?.surname,
    email: userInfo?.email,
    phone: userInfo?.phone,
    img: userInfo
      ? userInfo.img
      : defaultImg,
  });
  // console.log("INPUT", input);

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
    alert("Actualizado de forma correcta");
    setEditing(false);
  }

  useEffect(() => {
    if (!userInfo["id"]) {
      // console.log("BUSCO EL USER");
      dispatch(findUserById(userStorage.id));
    }
  }, []);

  useEffect(() => {
    if (input.img !== img2) {
      setInput({
        ...input,
        img: img2,
      });
    }
  });

  useEffect(() => {
    if (input.name === undefined && input.surname === undefined) {
      // console.log("VUELVO A SETEAR");
      setInput({
        name: userInfo.name,
        surname: userInfo.surname,
        email: userInfo.email,
        phone: userInfo.phone,
        img: img2
          ? img2
          : defaultImg,
      });
    }
  }, [input]);

  return (
    <div>
      {editing === false ? (
        <div>
          <h1>Datos Personales</h1>
          <label>
            Foto de perfil:{" "}
            {userInfo.img ? (
              <img
                src={userInfo.img}
                height={"80px"}
                width={"80px"}
                alt="Sin imagen"
              />
            ) : (
              <img
                src={defaultImg}
                height={"30px"}
                width={"30px"}
                alt="img not found"
              />
            )}
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
          <FaRegEdit size={25}/>
          </button>
        </div>
      ) : (
        <div>
          <h1>Editar datos personales</h1>
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
            <UploadImage setImg={setImg} />
            <br />
            {
              <Image
                cloudName="dcq2glrhg"
                publicId={img2}
                width="300"
                crop="scale"
              />
            }
            <br />
            <button type="submit">Guardar</button>
            <button onClick={() => setEditing(false)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
}
