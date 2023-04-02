import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findUserById } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HOST } from "../../utils";

export default function UpdateMyInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStorage = JSON.parse(localStorage.getItem("loggedUser"));

  const userInfo = useSelector((state) => state.user);

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
    await axios.put(`${HOST}/users/updateMyAccount?id=${userId}`, input);
    alert("Actualizado de forma correcta");
    navigate("/myAccount");
  }

  useEffect(() => {
    dispatch(findUserById(userStorage.id));
  }, []);

  useEffect(() => {
    if (input.name === undefined && input.surname === undefined) {
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
        {/* <input
          type="email"
          name="email"
          onChange={(e) => handlerChange(e)}
          defaultValue={userInfo.email}
        /> */}
        <br />
        <label>Tel/Cel: </label>
        <input
          type="text"
          name="phone"
          onChange={(e) => handlerChange(e)}
          defaultValue={userInfo.phone}
        />
        <br />
        <label>Foto de Perfil:</label>
        {userInfo.img ? (
          userInfo.img
        ) : (
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              height={"30px"}
              width={"30px"}
              alt="img not found"
            />
          </div>
        )}
        <input
          type="text"
          name="img"
          onChange={(e) => handlerChange(e)}
          defaultValue={userInfo.img}
          placeholder="Insertar URL de imagen"
        />
        <br />
        <button type="submit">Guardar</button>
        <Link to="/myAccount">
          <button>Atrás</button>
        </Link>
      </form>
    </div>
  );
}
