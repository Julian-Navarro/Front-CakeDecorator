import React, { useEffect, useState } from "react";
import { getUsers } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, P, Button, Label, Input } from "../../../../utils/StyledComponents/StyledComponents";
import ProfileUserCard from "./ProfileUserCard";
import { RxMagnifyingGlass } from "react-icons/rx"

export default function Users () {
  
  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.users)//! All users
  const [users, setUsers] = useState([]) //! Users Filtrados
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
  console.log("Ejecutando Funcion");
  const newUsers = allUsers.filter((user) => user[searchValue.en].toLowerCase().includes(inputValue.toLowerCase()))
  console.log(newUsers);
  setUsers(newUsers)
  handlerSetFlag()
}

useEffect(()=>{
  dispatch(getUsers())
  handlerSetUsers()
},[])

useEffect(()=>{
  console.log("UseEffect", users);
},[allUsers, users, flag])

    return (
        <Div flexDir="column"wd="100%"pd=".1rem .5rem .5rem .5rem"> 
        <Div bg="#dc4a61"mb="1rem"br=".5rem"boxSh="2px 2px .4rem .1rem rgb(0,0,0,0.35)">
            <Div ml="1rem"mt="1rem"mb="1rem"flexDir="column"alItems="flex-start">
              <Button mb=".3rem"pd=".3rem .5rem .3rem .5rem"br="2rem"wd="14rem"bg="#eee"color="#333"jfCont="flex-start"
                boxSh="0 0 .2rem .1rem #333, inset 0 0 .8rem .2rem gray"
                onClick={(e)=>{handlerSetSearchValue(e)}}
                >Búsqueda por {searchValue.es}
              </Button>
              {/* <Label>{`Búsqueda por ${searchValue.es}: `}</Label> */}
              <Div wd="22rem"jfCont="flex-start">
                <Input onChange={(e)=> {setInputValue(e.target.value)} } type="text" br="2rem"txAlign="left"pd="0 .4rem 0 .4rem"mr=".5rem"
                hg="2rem"wd="14rem"fontSize="1.1rem"boxSh="0 0 .2rem .1rem rgb(0,0,0,0.35)"/>
                <Button pd=".3rem .5rem .3rem .5rem"br="2rem"wd="2rem"hg="2rem"bg="#333"onClick={(e)=>{handlerSearchValue(e)}}
                  boxSh="0 0 .2rem .1rem rgb(0,0,0,0.35)">
                  <RxMagnifyingGlass fontSize={"1.3rem"}/>
                </Button>
              </Div>
            </Div>
        </Div>
            {
              allUsers.length > 0 ? users.length !== 0 ? users.map((user) => {
                return (
                  <ProfileUserCard user={user}handlerBlockOrUnlockUser={handlerBlockOrUnlockUser}/>
                )
              }) : <P>No se encontraron usuarios</P> : <P>Cargando usuarios</P>
            }
        </Div>
    )
}