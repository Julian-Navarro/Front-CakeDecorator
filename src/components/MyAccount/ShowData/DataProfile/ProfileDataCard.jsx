import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findUserById } from "../../../../redux/actions";
import { TbEdit } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HOST } from "../../../../utils";
import UploadImage from "../../../../utils/Cloudinary/UploadImage";
import { Image } from "cloudinary-react";

export default function ShowProfileData() {
  //HECHO CON REDUX STORE
  // const dispatch = useDispatch()
  // const userStorage = JSON.parse(localStorage.getItem("loggedUser"));
  // const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  // console.log("BOOL", editing);
  // const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("loggedUser"));
  const userInfo = useSelector((state) => state.user);
  console.log("INFO", userInfo);

  const [img2, setImg] = useState("");
  console.log("IMG", img2);

  const [input, setInput] = useState({
    name: userInfo?.name,
    surname: userInfo?.surname,
    email: userInfo?.email,
    phone: userInfo?.phone,
    img: userInfo
      ? userInfo.img
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  });
  console.log("INPUT", input);

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
    dispatch(findUserById(userInfo.id))
    alert("Actualizado de forma correcta");
    setEditing(false);
    // navigate("/myAccount");
  }

  useEffect(() => {
    if (!userInfo["id"]) {
      console.log("BUSCO EL USER");
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
      console.log("VUELVO A SETEAR");
      setInput({
        name: userInfo.name,
        surname: userInfo.surname,
        email: userInfo.email,
        phone: userInfo.phone,
        img: img2
          ? img2
          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      });
    }
  }, [input]);

  // useEffect(() => {
  //   if (!userInfo["id"]) {
  //     dispatch(findUserById(userStorage.id));
  //   } else {
  //     dispatch(findUserById(userStorage.id));
  //   }
  // }, []);

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
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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
          {/* <Link to="/updateUser"> */}
          <button onClick={() => setEditing(true)}>
            <TbEdit />
          </button>
          {/* </Link> */}
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
            {/* <Link to="/myAccount">
          <button>Atrás</button>
        </Link> */}
          </form>
        </div>
      )}
    </div>
  );
}
