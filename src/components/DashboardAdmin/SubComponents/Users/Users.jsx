import React, { useEffect, useState } from "react";
import { getUsers } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./Users.module.css"
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, P, Li, Button, Label, Input } from "../../../../utils/StyledComponents/StyledComponents";

export default function Users () {
  
  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.users)//! All users
  const [users, setUsers] = useState(false) //! Users Filtrados
  const [user, setUser] = useState(false)  //! El usuario para la UserCardProfile
  const [flag, setFlag] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [searchValue, setSearchValue] = useState({es:"email", en: "email"})

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
      await axios.put(`${HOST}/users?userId=${user.id}`, {status: "banned"})
      user.status = "banned"
      handlerSetFlag()
      alert(`Bloqueaste al usuario ${user.name} ${user.surname}`)
    } else {
      await axios.put(`${HOST}/users?userId=${user.id}`, {status: "active"})
      user.status = "active"
      handlerSetFlag()
      alert(`Desbloqueaste al usuario ${user.name} ${user.surname}`)
    }
  }
  function handlerSetUsers() {
    if(allUsers.length !== 0 ) {
      setUsers(allUsers)
    }
  }
  

function handlerSetSearchValue (e) {
  e.preventDefault();
  if(searchValue.es === "email") {
    setSearchValue({es:"apellido", en: "surname"})
  } else {
    setSearchValue({es:"email", en: "email"})
  }
}


function handlerSearchValue(e) {
  e.preventDefault();
  const newUsers = allUsers.filter((user) => user[searchValue.en].toLowerCase().includes(inputValue.toLowerCase()))
  setUsers(newUsers)
  handlerSetFlag()
}

useEffect(()=>{
  dispatch(getUsers())
},[])

useEffect(()=>{
  handlerSetUsers()
  console.log("USER: ",user);
},[allUsers, flag])
    return (
        <Div flexDir="column"wd="100%"bg="greenyellow">
        
            <Div className={s.userProfileCard}>
              <Div>
                <Button onClick={(e)=>{handlerSetSearchValue(e)}}>Cambiar modo de búsqueda</Button>
                <Label htmlFor="">{`Búsqueda por ${searchValue.es}: `}</Label>
                <Input onChange={(e)=> {setInputValue(e.target.value); console.log("INPUT VALUE",inputValue);} } type="text" />
                <Button onClick={(e)=>{handlerSearchValue(e)}}>Buscar</Button>
              </Div>
              {
              user !== false
                ? <UserProfileCard user={user}/>
                : null
              }
            </Div>

            <Div bg="yellowgreen">
              <P bg="lightgray">Nombre y apellido</P>
              <P bg="lightgray">E-mail</P>
              <P bg="lightgray">Telefono</P>
              {/* <p className={s.userP}>Cursos</p> */}
              <P bg="lightgray">Estado</P>
            </Div>
            {
              users.length > 0 ? allUsers.map((user) => {
                return (
                    <Div  bg="violet"key={user.id}>
                        <P bg="red">{user.name} {user.surname}</P>
                        <P bg="red">{user.email}</P>
                        <P bg="red">{user.phone!== null ? user.phone : "No existe"}</P>
                        <Div bg="yellow">
                          {user.status === "active"
                          ? <P bg="gray">Activo</P>   //! CLASSNAME PARA CADA UNO CON COLOR DISTINTO
                          : <P bg="gray">Bloqueado</P>  //! CLASSNAME PARA CADA UNO CON COLOR DISTINTO
                          }
                          <Div bg="orange">
                            <Button onClick={(e)=>{handlerViewUser(e, user)}}>Ver</Button>
                            <Button onClick={(e)=>{handlerBlockOrUnlockUser(e, user)}}>{user.status === "active" ? "Bloquear" : "Desbloquear"}</Button>
                          </Div>
                        </Div>
                    </Div>
                )
              }) :null
            }
        </Div>
    )
}