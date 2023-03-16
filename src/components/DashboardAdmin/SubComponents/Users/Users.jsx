import React, { useEffect, useState } from "react";
import { getUsers } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./Users.module.css"
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import { HOST } from "../../../../utils";


export default function Users () {

  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.users)
  const [user, setUser] = useState(false)
  
  function handlerViewUser(e, user) {
    e.preventDefault()
    setUser(user)
  }

  async function handlerBlockOrUnlockUser(e, user) {
    e.preventDefault()
    if (user.role === "admin") {
      alert("No puedes bloquear a un administrador")
    } else if(user.status === "active") {
      await axios.put(`${HOST}/users/block?id=${user.id}`, {status: "banned"})
      alert(`Bloqueaste al usuario ${user.name} ${user.surname}`)
    } else {
      await axios.put(`${HOST}/users/block?id=${user.id}`, {status: "active"})
      alert(`Desbloqueaste al usuario ${user.name} ${user.surname}`)
    }
  }

  useEffect(()=>{
    dispatch(getUsers())
  },[allUsers])

    return (
        <div>
            <div className={s.userProfileCard}>
              {
              user !== false
                ? <UserProfileCard user={user}/>
                : null
              }
            </div>

            <div className={s.userCardTitles}>
              <p className={s.userP}>Nombre y apellido</p>
              <p className={s.userP}>E-mail</p>
              <p className={s.userP}>Telefono</p>
              <p className={s.userP}>Cursos</p>
              <p className={s.userP}>Estado</p>
            </div>
            {
              allUsers.length > 0 ? allUsers.map((user) => {
                return (
                    <div key={user.id} className={s.userCard}>
                        <p className={s.userP}>{user.name} {user.surname}</p>
                        <p className={s.userP}>{user.email}</p>
                        <p className={s.userP}>{user.phone!== null ?user.phone:"No existe"}</p>
                        <p className={s.userP}>{user.availableCourses.length}</p>
                        <div className={s.userCardDiv}>
                          {user.status === "active"
                          ? <p>Activo</p>   //! CLASSNAME PARA CADA UNO CON COLOR DISTINTO
                          : <p>Bloqueado</p>  //! CLASSNAME PARA CADA UNO CON COLOR DISTINTO
                          }
                          <div className={s.btnStatusContainer}>
                            <button className={s.btnStatus} onClick={(e)=>{handlerViewUser(e, user)}}>Ver</button>
                            <button className={s.btnStatus} onClick={(e)=>{handlerBlockOrUnlockUser(e, user)}}>{user.status === "active" ? "Bloquear" : "Desbloquear"}</button>
                          </div>
                        </div>
                        <div>
                        </div>
                    </div>
                )
              }) :null
            }
        </div>
    )
}