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
  const [users, setUsers] = useState(false)
  const [user, setUser] = useState(false)
  const [flag, setFlag] = useState(false)

  function handlerSetFlag() {
    if(flag) {
      setFlag(false)
    } else {
      setFlag(true)
    }
  }

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
      handlerSetFlag()
      handlerViewUser(e, {...user, status: "banned"})
      alert(`Bloqueaste al usuario ${user.name} ${user.surname}`)
    } else {
      await axios.put(`${HOST}/users/block?id=${user.id}`, {status: "active"})
      handlerSetFlag()
      handlerViewUser(e, {...user, status: "active"})
      alert(`Desbloqueaste al usuario ${user.name} ${user.surname}`)
    }
  }
function cb() {
  if(allUsers.length !== 0 ) {
    setUsers(allUsers)
  }
}
  useEffect(()=>{
    console.log("Rendering USER.JSX");
    dispatch(getUsers())
  },[])
  
  useEffect(()=>{
    cb()
    console.log("ALLusers: ",allUsers);
    console.log("users: ", users);
  },[allUsers])


const [searchValue, setSearchValue] = useState({es:"email", en: "email"})
function handlerSetSearchValue (e) {
  e.preventDefault();
  if(searchValue.es === "email") {
    setSearchValue({es:"apellido", en: "surname"})
  } else {
    setSearchValue({es:"email", en: "email"})
  }
}
const [inputValue, setInputValue] = useState("")
function handlerSearchValue(e) {
  e.preventDefault();
  const newUsers = allUsers.filter((user) => user[searchValue.en].toLowerCase().includes(inputValue.toLowerCase()))
  setUsers(newUsers)
  handlerSetFlag()
console.log("ALL USERS", allUsers.length);
  console.log("USERS: ", users.length);
}
    return (
        <div>
          <h1>USER COMP</h1>
        
            <div className={s.userProfileCard}>
              <div>
                <button onClick={(e)=>{handlerSetSearchValue(e)}}>Cambiar modo de búsqueda</button>
                <label htmlFor="">{`Búsqueda por ${searchValue.es}: `}</label>
                <input onChange={(e)=> {setInputValue(e.target.value); console.log("INPUT VALUE",inputValue);} } type="text" />
                <button onClick={(e)=>{handlerSearchValue(e)}}>Buscar</button>
              </div>
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
              users.length > 0 ? users.map((user) => {
                return (
                    <div key={user.id} className={s.userCard}>
                        <p className={s.userP}>{user.name} {user.surname}</p>
                        <p className={s.userP}>{user.email}</p>
                        <p className={s.userP}>{user.phone!== null ?user.phone:"No existe"}</p>
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