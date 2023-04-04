import React, { useEffect, useState } from "react";
import { findUserById } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShowProfileData() {
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("loggedUser"));
  const loggedUser = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(findUserById(userStorage.id));
  }, []);

  return (
    <div>
      <h1>Datos Personales</h1>
      <div>
        <label>
          Foto de perfil:{" "}
          {loggedUser.img ? (
            <img
              src={loggedUser.img}
              height={"40px"}
              width={"40px"}
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
        <label>Nombre: {loggedUser.name}</label>
        <br />
        <label>Apellido: {loggedUser.surname}</label>
        <br />
        <label>Email: {loggedUser.email}</label>
        <br />
        <label>Tel/Cel: {loggedUser.phone}</label>
        <br />
        <Link to="/updateUser">
          <button>Editar✏️</button>
        </Link>
      </div>
    </div>
  );
}
