import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findUserById } from "../../../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HOST } from "../../../../utils";
import UploadImage from "../../../UploadImage";
import {
  Image,
} from "cloudinary-react";

export default function UpdateMyInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStorage = JSON.parse(localStorage.getItem("loggedUser"));

  const userInfo = useSelector((state) => state.user);
  const [img, setImg] = useState("")
  console.log("USER",userInfo)

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
    alert("Actualizado de forma correcta");
    navigate("/myAccount");
  }

  useEffect(() => {
    if(!userInfo["id"] ){
      console.log("BUSCO EL USER")
      dispatch(findUserById(userStorage.id));
    }
  }, []);

  useEffect(() => {
    if (input.name === undefined && input.surname === undefined) {
      console.log("VUELVO A SETEAR")
      setInput({
        name: userInfo.name,
        surname: userInfo.surname,
        email: userInfo.email,
        phone: userInfo.phone,
        img: userInfo
          ? userInfo.img
          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      });
    }
  }, [input]);

  useEffect(()=>{
    setInput({
      ...input,
      img: img
    })
  },[img])

  return (
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
        <label>Avatar: </label>
          <UploadImage setImg={setImg}/>
        <br />
        {userInfo.img && (
        <Image
          cloudName="dcq2glrhg"
          publicId={img}
          width="300"
          crop="scale"
        />
      )}
        <br />
        <button type="submit">Guardar</button>
        <Link to="/myAccount">
          <button>Atrás</button>
        </Link>
      </form>
    </div>
  );
}
