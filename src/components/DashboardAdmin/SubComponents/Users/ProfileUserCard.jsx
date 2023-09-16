import { useState, useEffect } from "react";
import { Div, P, Img, Button} from "../../../../utils/StyledComponents/StyledComponents";
import userIcon from "../../../../utils/user-icon.png"
import { HiOutlineMail} from "react-icons/hi"
import { GiMagnifyingGlass } from "react-icons/gi"
import { ImBlocked } from "react-icons/im"
import { TbLockOpen } from "react-icons/tb"
import { IoIosWarning } from "react-icons/io"
import { MdContentCopy } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import s from "./ProfileUserCard.module.css"


export default function ProfileUserCard ({ user, handlerBlockOrUnlockUser }) {
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
    },[user])
    return (
      <Div boxSh={ view 
        ? "6px 6px .4rem .3rem rgb(0,0,0,0.5), inset 2px 2px 1rem .1rem #afafaf"
        : "2px 2px .3rem .1rem rgb(0,0,0,0.5), inset 2px 2px 1rem .1rem #afafaf"
        }
        hg={view?"8rem":"3.8rem"}mb={view?"1.5rem":"1rem"}br={view?"4rem":"2rem"}
        pd="0 .5rem 0 .5rem"jfCont="space-between"bg="#eeee"
        className={s.cardContainer}
        >
          <Img bd={`3px solid ${user.status==="active"?"#00d386":user.status==="inactive"?"#fcbd11":"#dc4a61"}`}
            wd={view?"7rem":"3.2rem"}hg={view?"7rem":"3.2rem"}br={view?"4rem":"2rem"}src={user.img?user.img:userIcon}
            boxSh="0 0 .2rem .1rem gray"/>
          <Div flexDir="column"wd="80%"hg="100%"jfCont="flex-start">
            <Div mt=".3rem"wd="100%"cursor="pointer"jfCont="space-between">
              <P ml=".4rem"jfCont="flex-start"fSize=".9rem" pd="0"color="#333"fWeight="bold">{user.name} {user.surname}</P>
              <Div wd="14rem"jfCont="space-between">
                <Div wd="9rem"jfCont="flex-start">
                  <Button bg="#333"br="2rem"pd="0"wd="1.2rem"hg="1.2rem">
                    <FaPhoneAlt color="#fff"fontSize={".75rem"}/>
                  </Button>
                  <P jfCont="flex-start"fSize=".9rem" pd="0"color="#333"fWeight="bold">{user.phone}</P>
                </Div>
                {
                  user.status === "active"
                  ? <P fWeight="bold"fSize=".9rem"pd="0 .5rem 0 .5rem"mb=".2rem"wd="5rem"color="#00d386">Activo</P> 
                  : user.status ==="inactive"
                  ? <P fWeight="bold"fSize=".9rem"pd="0 .5rem 0 .5rem"mb=".2rem"wd="5rem"color="#fcbd11">Inactivo</P> 
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
            <Button pos="relative"posTop={view?"1.6rem":"0"}posRight={view?"-1rem":".2rem"}fWeight="bold"boxSh="1px 1px .1rem .05rem gray"wd="2.5rem"hg="2.5rem"bg="#333"br="2rem"fSize=".7rem"pd="0 .5rem 0 .5rem" onClick={(e)=>{handlerBlockOrUnlockUser(e, user)}}>
              { user.status === "active" 
              ? <ImBlocked fontSize={"1.8rem"}color="#dc4a61"/> 
              :user.status ==="inactive"
              ? <IoIosWarning fontSize={"1.8rem"}color="#fcbd11"/>
              : <TbLockOpen fontSize={"1.8rem"}color="#00d386"/>
              }
            </Button>
            <Button pos="relative"posTop={view?"-1.6rem":"0"}posRight={view?"1.5rem":"0"}fWeight="bold"boxSh="1px 1px .1rem .05rem gray"hg="2.5rem"wd="2.5rem"br="50%"bg="#333"fSize=".7rem"pd="0 .5rem 0 .5rem" onClick={(e)=>{setView(!view)}}>
              <GiMagnifyingGlass fontSize={"1.8rem"}/>
            </Button>
          </Div>


        </Div>
    )
    
}