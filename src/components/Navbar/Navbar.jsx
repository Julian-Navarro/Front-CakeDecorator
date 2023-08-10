import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, Button, P } from "../../utils/StyledComponents/StyledComponents";
import { RiDatabaseLine, RiCake3Line } from "react-icons/ri"
import { AiTwotoneHome } from "react-icons/ai"
import homeIcon from "../../utils/IMAGES/bxs_home-heart.png"
import xIcon from "../../utils/IMAGES/octicon_x-12.png"
import { VscAccount } from "react-icons/vsc"
import s from "./Navbar.module.css"
import { useLocation } from "react-router-dom";
export default function Navbar () {
    const location = useLocation();
    const navigate = useNavigate();
    const [account, setAccount] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const pink = "#ddc6da"
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    function handlerNavigate(path) {
        setIsOpen(false)
        navigate(path)
    }
    function handlerNavigateMyAccount(e) {
        e.preventDefault();
        console.log("HOla");
        console.log(loggedUser);
        if(loggedUser !== null) {
            setIsOpen(false)
            navigate("/myAccount")
        } else {
            alert("Ingresa a tu cuenta")
            navigate("/")
        }
    }
    function handlerCloseSesion(){
        let cart = localStorage.getItem("cart");
        localStorage.clear();
        localStorage.setItem("cart", cart)
        setAccount(false)
        alert("Cerraste sesión")
        setIsOpen(false)
        navigate("/")
    }
    // const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    useEffect(()=>{},[account])
    return (
        location.pathname !== "/" ?
      <Div className={s.container}br="0"wd="100%"pos="fixed"jfCont="flex-start"hg="2rem">

        <Div pos="absolute"posRight="0"mr="12px"zInd="4"mt=".5rem"
          posTop="0px"wd="2.8rem" hg="2.8rem"br="50%"bg={isOpen?"#9A6799":"#E9A0E7"}
          display="none"className={s.btnBurguer}onClick={()=>setIsOpen(!isOpen)}
          >
            <img src={isOpen?xIcon:homeIcon} alt=""className={s.iconHome} />
        </Div>

        <Div bg="#fff"className={s.divContainer}zInd="2"br="0"
            posBot={isOpen?"-6rem":"8rem"}wd="1240px"
            >

          <Div wd="30%"jfCont="flex-start"ml=".5rem"className={s.cakeIcon}>
            <RiCake3Line fontSize={"2rem"}/>
          </Div>

          <Div wd="70%"hg="100%" jfCont="space-between"mr=".5rem"className={s.divBtns}>
            <Button 
                pd="0px 10px 0 10px"br="6px"color="#252525"
                bg={"transparent"}fSize="1.2rem"fWeight="bold"_hovCol={"#fff"}
                onClick={()=>handlerNavigate("/home")}>
                <AiTwotoneHome fontSize={"1.8rem"}
                />
            </Button>
            
            <Button 
                pd="0px 10px 0 10px"br="6px"color="#252525"
                bg={"transparent"}fSize="1.2rem"fWeight="bold"_hovCol={"#fff"}
                onClick={()=>handlerNavigate("/courses")}>
                    <P letterSp=".1em" fWeight="bold"filter="drop-shadow(1px 1px 2px #25252575)">Cursos</P>
            </Button>
            
            <Button 
                pd="0px 10px 0 10px"br="6px"color="#252525"
                bg={"transparent"}fSize="1.2rem"fWeight="bold"_hovCol={"#fff"}
                onClick={()=>handlerNavigate("/shop")}>
                    <P letterSp=".1em" fWeight="bold"filter="drop-shadow(1px 1px 2px #25252575)">Tienda</P>
            </Button>
            
            <Button 
                pd="0px 10px 0 10px"br="6px"color="#252525"
                bg={"transparent"}fSize="1.2rem"fWeight="bold"_hovCol={"#fff"}
                onClick={()=>handlerNavigate("/aboutUs")}>
                <P letterSp=".1em" fWeight="bold"filter={`drop-shadow(1px 1px 1px #25252575)`}>Nosotros</P>
            </Button>
            <Div mr=".5rem"wd="auto"br="6px"color="#252525"
                bg={"transparent"}
                >
                <Div _hovCol={"#fff"}cursor="pointer">
                    <VscAccount filter="drop-shadow(2px 2px 2px black)"fontSize={"1.8rem"}onClick={()=>setAccount(!account)}/>
                </Div>
                <Div hg="60vh"wd={account?"7.8rem":".1rem"}trans=".1s"display={"flex"}overflow="hidden"flexDir="column"
                    pos="absolute"posTop="3rem"posRight="0"zInd="4"
                    >
                    <Div wd="100%"hg="100%"jfCont="space-evenly"flexDir="column"bg={"#25252586"}pos="absolute"posRight={account?"0rem":"-7.8rem"}zInd="4"blur="blur(5px)">
                        <Button bd="#fff"bg={pink}wd="94%"fSize=".8rem"letterSp=".1rem"onClick={(e)=>handlerNavigateMyAccount(e)}>Mi cuenta</Button>
                        {
                            loggedUser
                            ? <Button bd="#fff"bg={pink}wd="94%"fSize=".8rem"letterSp=".1rem"onClick={()=>handlerCloseSesion()}>Cerrar Sesión</Button>
                            : <Button bd="#fff"bg={pink}wd="94%"fSize=".8rem"letterSp=".1rem"onClick={()=>navigate("/")}>Ingresar</Button>
                        }
                        {
                            loggedUser !== null ? loggedUser.role === "admin" 
                            ? <Button 
                            pd="0px 10px 0 10px"br="6px"color="#252525"wd="100%"
                            bg={pink}bd="#fff"fSize="1.2rem"fWeight="bold"_hovCol={"#fff"}
                            onClick={()=>navigate("/dashboardAdmin")}>
                                <RiDatabaseLine filter="drop-shadow(1px 1px 2px black)"fontSize="2em"/>
                              </Button>
                            : null :null
                        }
                    </Div>    
                </Div>
            </Div>
          </Div>
        </Div>

      </Div> : null
    )
}