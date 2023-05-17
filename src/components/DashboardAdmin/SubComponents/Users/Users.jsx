import React, { useEffect, useState } from "react";
import { getUsers } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, P, Button, Label, Input } from "../../../../utils/StyledComponents/StyledComponents";
import UserProfileCard from "./UserProfileCard";
import ProfileUserCard from "./ProfileUserCard";

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
        <Div flexDir="column"wd="100%"pd=".5rem"zInd="3"> 
          {/* <Div wd="100%">
            {
              user !== false
              ? <UserProfileCard user={user}/>
              : null
            }   
          </Div>        */}

            {/* <Div mt="1rem"mb="1rem"jfCont="flex-start">
              <Button onClick={(e)=>{handlerSetSearchValue(e)}}>Cambiar modo de búsqueda</Button>
              <Label>{`Búsqueda por ${searchValue.es}: `}</Label>
              <Input onChange={(e)=> {setInputValue(e.target.value); console.log("INPUT VALUE",inputValue);} } type="text" />
              <Button onClick={(e)=>{handlerSearchValue(e)}}>Buscar</Button>
            </Div> */}

            {/* <Div flexDir="column"> */}
              {/* <Div hg="4rem">
                <Div wd="30%"hg="100%"bg="lightgray"br="0"bdT="2px solid #333"bdL="2px solid #333"bdB="2px solid #333">
                  <P fWeight="bold"br="0"wd="100%"hg="90%"
                  bdR="2px solid #333"
                  >
                    Nombre y apellido
                  </P>
                </Div>
                <Div wd="40%"hg="100%"bg="lightgray"br="0"bdT="2px solid #333"bdB="2px solid #333">
                  <P fWeight="bold"br="0"wd="100%"hg="90%"
                  bdR="2px solid #333"
                  >
                    E-mail
                  </P>
                </Div>
                <Div wd="15%"hg="100%"bg="lightgray"br="0"bdT="2px solid #333"bdB="2px solid #333">
                  <P fWeight="bold"br="0"wd="100%"hg="90%"
                  bdR="2px solid #333"
                  >
                    Telefono
                  </P>
                </Div>
                <Div wd="15%"hg="100%"bg="lightgray"br="0"bdT="2px solid #333"bdB="2px solid #333"bdR="2px solid #333">
                  <P fWeight="bold"br="0"wd="100%"hg="90%"
                  
                  >
                    Estado
                  </P>
                </Div>
              </Div> */}
            {/* <ProfileUserCard users={users}/> */}
            
            {
              users.length > 0 ? allUsers.map((user) => {
                return (
                  <ProfileUserCard user={user}handlerBlockOrUnlockUser={handlerBlockOrUnlockUser} handlerViewUser={handlerViewUser}/>
                  // <Div hg="3.5rem"key={user.id}bg="#eee"br="0">
                  //       <Div wd="30%"hg="100%"br="0"bdL="2px solid #333"bdB="2px solid #333">
                  //         <P jfCont="flex-start"pd="0 0 0 .5rem"bg="#eee"fSize=".85rem"
                  //           letterSp=".03rem"wd="100%"hg="90%"br="0"bdR="2px solid #333"fWeight="bold"
                  //           >{user.name} {user.surname}
                  //         </P>
                  //       </Div>
                  //       <Div wd="40%"hg="100%"br="0"bdB="2px solid #333">
                  //         <P jfCont="flex-start"pd="0 0 0 .5rem"bdR="2px solid #333"bg="#eee"fSize=".85rem"letterSp=".03rem"wd="100%"hg="90%"
                  //           br="0"fWeight="bold"
                  //           >{user.email}
                  //         </P>
                  //       </Div>
                  //       <Div wd="15%"hg="100%"br="0"bdB="2px solid #333">
                  //         <P jfCont="flex-start"pd="0 0 0 .5rem"bdR="2px solid #333"bg="#eee"fSize=".85rem"letterSp=".03rem"wd="100%"hg="90%"
                  //           br="0"fWeight="bold"
                  //           >{user.phone!== null ? user.phone : "No existe"}
                  //         </P>
                  //       </Div>
                  //       <Div bg="#eee"pd="5px"flexDir="column"wd="15%"hg="100%"br="0"bdB="2px solid #333"bdR="2px solid #333">
                  //         {
                  //         user.status === "active"
                  //         ? <P fWeight="bold"fSize=".9rem"pd="0 .5rem 0 .5rem"mb=".2rem"bg="transparent"color="green">Activo</P> 
                  //         : user.status ==="inactive"
                  //         ? <P fWeight="bold"fSize=".9rem"pd="0 .5rem 0 .5rem"mb=".2rem"bg="transparent"color="#daa205">Inactivo</P> 
                  //         : <P fWeight="bold"fSize=".9rem"pd="0 .5rem 0 .5rem"mb=".2rem"bg="transparent"color="#dc4a61">Bloqueado</P>  
                  //         }
                  //         <Div jfCont="space-between">
                  //           <Button fWeight="bold"wd="100%"hg="1.2rem"bg="#333"br="4px"fSize=".7rem"pd="0 .5rem 0 .5rem" onClick={(e)=>{handlerViewUser(e, user)}}>Ver</Button>
                  //           <Button fWeight="bold"wd="100%"hg="1.2rem"bg="#333"br="4px"fSize=".7rem"pd="0 .5rem 0 .5rem" onClick={(e)=>{handlerBlockOrUnlockUser(e, user)}}>{user.status === "active" ? "Bloquear" :user.status ==="inactive"? "Bloquear?": "Desbloquear"}</Button>
                  //         </Div>
                  //       </Div>
                  //   </Div>
                )
              }) : <P>Cargando usuarios</P>
            }
            {/* </Div> */}
        </Div>
    )
}