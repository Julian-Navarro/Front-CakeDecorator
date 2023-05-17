import { useState, useEffect } from "react";
import { Div, P, Img, Button} from "../../../../utils/StyledComponents/StyledComponents";
import userIcon from "../../../../utils/user-icon.png"
import { HiOutlineMail} from "react-icons/hi"
import { GiMagnifyingGlass } from "react-icons/gi"
import { ImBlocked } from "react-icons/im"
import { TbLockOpen } from "react-icons/tb"
import { IoIosWarning } from "react-icons/io"
import { IconButton } from "@chakra-ui/react"
import { MdContentCopy } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"


export default function ProfileUserCard ({ user, handlerBlockOrUnlockUser, handlerViewUser }) {
const [view, setView] = useState(false)
function copiarAlPortapapeles(texto) {
  const inputTemp = document.createElement("input");
  inputTemp.setAttribute("value", texto);
  document.body.appendChild(inputTemp)
  inputTemp.select();
  document.execCommand("copy"); 
  document.body.removeChild(inputTemp);
}
    useEffect(()=>{
        console.log("USER: ",user);
    },[user])
    return (
        <Div boxSh={view?"6px 6px .4rem .3rem rgb(0,0,0,0.5)":"2px 2px .3rem .1rem rgb(0,0,0,0.5)"}
          hg={view?"8rem":"3.8rem"}mb={view?"1.5rem":"1rem"}br={view?"4rem":"2rem"}
          pd="0 .5rem 0 .5rem"jfCont="space-between"bg="#eeee">
          <Img wd={view?"7rem":"3rem"}hg={view?"7rem":"3rem"}br={view?"4rem":"2rem"}src={user.img?user.img:userIcon}boxSh="0 0 .2rem .1rem gray"/>
          <Div flexDir="column"wd="80%"hg="100%"jfCont="flex-start">
            <Div mt=".3rem"wd="100%"cursor="pointer"jfCont="space-between">
              <P ml=".4rem"jfCont="flex-start"fSize=".9rem" pd="0"color="#333"fWeight="bold">{user.name} {user.surname}</P>
              <Div wd="14rem"jfCont="space-between">
                <Div wd="9rem">
                  <Button bg="#333"br="2rem">
                    <FaPhoneAlt color="#fff"fontSize={".9rem"}/>
                  </Button>
                  <P jfCont="flex-start"fSize=".9rem" pd="0"color="#333"fWeight="bold">{user.phone}</P>
                </Div>
                {
                  user.status === "active"
                  ? <P fWeight="bold"fSize=".9rem"pd="0 .5rem 0 .5rem"mb=".2rem"wd="5rem"color="green">Activo</P> 
                  : user.status ==="inactive"
                  ? <P fWeight="bold"fSize=".9rem"pd="0 .5rem 0 .5rem"mb=".2rem"wd="5rem"color="#daa205">Inactivo</P> 
                  : <P fWeight="bold"fSize=".9rem"pd="0 .5rem 0 .5rem"mb=".2rem"wd="5rem"color="#dc4a61">Bloqueado</P>  
                }
              </Div>
            </Div>
            <Div ml=".4rem">
              <MdContentCopy fontSize={"1.2rem"}cursor={"pointer"}onClick={()=>{copiarAlPortapapeles(user.email)}}/>
              <HiOutlineMail fontSize={"1.2rem"}/>
              <P ml=".4rem"wd="100%"jfCont="flex-start"fSize=".9rem"pd="0" color="#333"fWeight="bold">{user.email}</P>  
            </Div>
              <Div overflow="hidden">
                <Div pd="2px"hg="4.5rem"alItems="flex-start"pos="relative"posTop={view?"0rem":"3rem"}trans=".8s">
                  <Div bg="lightgray"wd="50%">
                    <P fSize=".9rem"pd="0"wd="90%">Cursos</P>
                  </Div>
                  <Div bg="lightgray"wd="50%">
                    <P fSize=".9rem"pd="0"wd="90%">Productos</P>
                  </Div>
                </Div>
              </Div>
          </Div>


          <Div wd={view?"4rem":"6.5rem"}hg={view?"8rem":"3.8rem"}>
            <Button pos="relative"posTop={view?"1.6rem":"0"}posRight={view?"-1.5rem":".2rem"}fWeight="bold"wd="3rem"hg="3rem"bg="#333"br="2rem"fSize=".7rem"pd="0 .5rem 0 .5rem" onClick={(e)=>{handlerBlockOrUnlockUser(e, user)}}>
              { user.status === "active" 
              ? <ImBlocked fontSize={"2rem"}color="red"/> 
              :user.status ==="inactive"
              ? <IoIosWarning fontSize={"2rem"}color="yellow"/>
              : <TbLockOpen fontSize={"2rem"}color="green"/>
              }
            </Button>
            <Button pos="relative"posTop={view?"-1.6rem":"0"}posRight={view?"1.5rem":"0"}fWeight="bold"hg="3rem"wd="3rem"br="50%"bg="#333"fSize=".7rem"pd="0 .5rem 0 .5rem" onClick={(e)=>{setView(!view)}}>
              <GiMagnifyingGlass fontSize={"2rem"}/>
            </Button>
          </Div>


        </Div>
    )
    
}