import React, { useEffect, useState } from "react";
import { getUsers } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, P, Button, Label, Input } from "../../../../utils/StyledComponents/StyledComponents";

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
        <Div flexDir="column"wd="100%"bg="greenyellow"pd="10px">
        
            <Div bg="pink"pd="10px"flexDir="column">
              {
              user !== false
                ? <Div bg="blue"pd="15px">
                    <UserProfileCard user={user}/>
                  </Div>
                : null
              }
              <Div bg="gray"pd="10px">
                <Button onClick={(e)=>{handlerSetSearchValue(e)}}>Cambiar modo de búsqueda</Button>
                <Label htmlFor="">{`Búsqueda por ${searchValue.es}: `}</Label>
                <Input onChange={(e)=> {setInputValue(e.target.value); console.log("INPUT VALUE",inputValue);} } type="text" />
                <Button onClick={(e)=>{handlerSearchValue(e)}}>Buscar</Button>
              </Div>
            </Div>

            <Div bg="purple"pd="10px">
              <P bg="lightgray">Nombre y apellido</P>
              <P bg="lightgray">E-mail</P>
              <P bg="lightgray">Telefono</P>
              {/* <p className={s.userP}>Cursos</p> */}
              <P bg="lightgray">Estado</P>
            </Div>

            
            <Div flexDir="column"bg="#252525" pd="10px">
            {
              users.length > 0 ? allUsers.map((user) => {
                return (
                  <Div  bg="violet"pd="10px"mb="5px"key={user.id}>
                        <P bg="red">{user.name} {user.surname}</P>
                        <P bg="red">{user.email}</P>
                        <P bg="red">{user.phone!== null ? user.phone : "No existe"}</P>
                        <Div bg="yellow"pd="5px"flexDir="column"wd="16rem">
                          {
                          user.status === "active"
                          ? <P bg="gray">Activo</P> 
                          : user.status ==="inactive"
                          ? <P bg="gray">Inactivo</P> 
                          : <P bg="gray">Bloqueado</P>  
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
        </Div>
    )
}