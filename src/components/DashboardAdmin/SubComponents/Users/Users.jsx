import React, { useEffect, useState } from "react";
import { getUsers } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { HOST } from "../../../../utils";
import { Div, P, Button, Button2, Label, Input } from "../../../../utils/StyledComponents/StyledComponents";
import ProfileUserCards from "./ProfileUserCards";
import { RxMagnifyingGlass } from "react-icons/rx"
import { IoMdRefresh } from "react-icons/io"
import s from "./Users.module.css"
import Paginate from "../../../Paginate/Paginate";
import userInactive from "../../../../utils/IMAGES/imgsDashAdmUsers/mdi_user-alert.png"
import userBanned from "../../../../utils/IMAGES/imgsDashAdmUsers/userBanned.png"
import userChecked from "../../../../utils/IMAGES/imgsDashAdmUsers/userChecked.png"
export default function Users () {
  
  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.users)//! All users
  const [users, setUsers] = useState([]) //! Users Filtrados
  const [flag, setFlag] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [searchValue, setSearchValue] = useState({es:"email", en: "email"})

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
  const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
  };

  function handlerSetUsersByStatus(status) {
  // console.log("Ejecutando Funcion Block Users");
  setCurrentPage(1)
  const newUsers = allUsers.filter((user) => user.status === status)
  // console.log(newUsers);
  setUsers(newUsers)
  handlerSetFlag()
  }
  function enter(e) {
    if(e.keyCode===13) handlerSearchValue()
  } 
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


function handlerSearchValue() {
  // console.log("Ejecutando Funcion");
  setCurrentPage(1)
  const newUsers = allUsers.filter((user) => user[searchValue.en].toLowerCase().includes(inputValue.toLowerCase()))
  // console.log(newUsers);
  setUsers(newUsers)
  handlerSetFlag()
}

useEffect(()=>{
  dispatch(getUsers())
},[])
useEffect(()=>{
  handlerSetUsers()
},[allUsers])

useEffect(()=>{
},[allUsers, users, flag])

    return (
        <Div flexDir="column"wd="100%"pd=".1rem .5rem .5rem .5rem"
          // bg="blue"
          > 
          <div className={s.containerSearchBar}>
            <div className={s.containerDivsSearch}>
              <div className={s.divSearchBar}>
                <button onClick={(e)=>{handlerSetSearchValue(e)}}
                  className={s.btnSearchValue}
                  >Búsqueda por {searchValue.es}
                </button>
                <button onClick={(e)=>{setUsers(allUsers);setCurrentPage(1)}}
                  className={s.btnsSearch}
                  >
                  <IoMdRefresh fontSize={"1.6rem"}/>
                </button>
              </div>
              <div className={s.divSearchBarInput}>
                <Input onChange={(e)=> {setInputValue(e.target.value)} }
                  type="text"
                  onKeyUp={(e)=>enter(e)}
                  br="2rem"
                  txAlign="left"
                  pd="0 .4rem 0 .4rem"
                  mr=".5rem"
                  hg="2rem"
                  fontSize="1.1rem"
                  boxSh="0 0 .2rem .1rem rgb(0,0,0,0.35)"
                  className={s.inputValue}
                  />
                <button className={s.btnsSearch}onClick={()=>handlerSearchValue()}>
                  <RxMagnifyingGlass fontSize={"1.3rem"}/>
                </button>
              </div>
            </div>
              <div className={s.divBtnsUserStatus}>
                <button className={s.btnUserStatusValue}onClick={()=>handlerSetUsersByStatus("banned")}>
                  <img src={userBanned}/>
                </button>
                <button className={s.btnUserStatusValue}onClick={()=>handlerSetUsersByStatus("inactive")}>
                  <img src={userInactive}/>
                </button>
                <button className={s.btnUserStatusValue}onClick={()=>handlerSetUsersByStatus("active")}>
                  <img src={userChecked}/>
                </button>
              </div>
          </div>
          <Paginate usersPerPage={usersPerPage} 
            paginate={paginate} 
            allUsers={users.length} 
            currentPage={currentPage}/>
          <ProfileUserCards users={currentUsers}handlerBlockOrUnlockUser={handlerBlockOrUnlockUser}/>
        </Div>
    )
}