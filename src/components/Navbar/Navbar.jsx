import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, DivAccountBar, Button, P } from "../../utils/StyledComponents/StyledComponents";
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
        setAccount(false)
        navigate(path)
        window.scroll(0, 0)
    }
    function handlerNavigateMyAccount(e) {
        e.preventDefault();
        // console.log(loggedUser);
        setIsOpen(false)
        setAccount(false)
        if(loggedUser !== null) {
            navigate("/myAccount")
        } else {
            alert("Ingresa a tu cuenta")
            navigate("/")
        }
        window.scroll(0, 0)
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
    function handlerCloseBarAccount() {
        setIsOpen(!isOpen)
        setAccount(false)
    }
    // const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    useEffect(()=>{},[account])
    return (
        location.pathname !== "/" ?
      <Div className={s.container}
        wd="100%"
        hg="1.8rem"
        pos="fixed"
        jfCont="flex-start"br="0"
        zInd="10">

        <Div pos="absolute"posRight="0"mr="1rem"zInd="4"mt=".5rem"
          posTop="0px"wd="2.8rem" hg="2.8rem"br="50%"bg={isOpen?"#8B5C8A":"#B39BE5"}
          display="none"className={s.btnBurguer}
        //   bg="orange"
          onClick={()=>handlerCloseBarAccount()}
          >
            <img src={isOpen?xIcon:homeIcon} alt=""className={s.iconHome} />
        </Div>

        <Div bg="#fff"className={s.divContainer}zInd="2"br="0"
            posBot={isOpen?"-10rem":"12rem"}wd="1240px"
            >

          <Div wd="100%"hg="100%"
            jfCont="space-between"
            br="0"
            className={s.divBtns}
            // bg="#333"
            >
            <Div className={s.divBtnsNavbar}
                wd="100%"
                jfCont="space-between">

            
            <Button onClick={()=>handlerNavigate("/home")}
                >
                <AiTwotoneHome fontSize={"1.8rem"}
                />
            </Button>
            
            <Button onClick={()=>handlerNavigate("/courses")}
                >
                <P letterSp=".1em" fWeight="bold"
                    filter="drop-shadow(1px 1px 2px #25252575)">Cursos</P>
            </Button>
            
            <Button onClick={()=>handlerNavigate("/shop")}
                >
                <P letterSp=".1em" fWeight="bold"
                    filter="drop-shadow(1px 1px 2px #25252575)">Tienda</P>
            </Button>
            
            <Button onClick={()=>handlerNavigate("/aboutUs")}
                >
                <P letterSp=".1em" fWeight="bold"
                    filter={`drop-shadow(1px 1px 1px #25252575)`}>Nosotros</P>
            </Button>
            </Div>
            <Div wd="auto"
                >
                <Button className={s.btnCuenta}
                    cursor="pointer"
                    onClick={()=>setAccount(!account)}
                    bg={account?"#f6dbf5":"transparent"}
                    zInd="11"
                    // mr="2.9rem"
                    >
                    {/* <VscAccount filter="drop-shadow(2px 2px 2px black)"
                        fontSize={"1.8rem"}
                    > */}
                    <P letterSp=".1em" fWeight="bold"
                        filter={`drop-shadow(1px 1px 1px #25252575)`}>Cuenta</P>
                </Button>
                <DivAccountBar hg="100vh"
                    // wd={account?"10rem":".1rem"}
                    // wd={account?"1242px":".0rem"}
                    trans=".4s"
                    display={"flex"}
                    overflow="hidden"
                    flexDir="column"
                    alItems="flex-start"
                    pos="absolute"
                    posTop="2rem"
                    // posRight="0"
                    // posRight="none"
                    // mr="522px"
                    zInd="4"br="0"
                    className={account?s.accountBarContainer : s.accountBarContainerClose}
                    // bg="red"
                    >
                    <Div wd="100%"hg="100%"
                        pos="absolute"
                        posRight={account?"0rem":"0"} //! ???????????
                        flexDir="column"
                        jfCont="space-evenly"
                        zInd="4"
                        blur="blur(5px)"br="0"
                        bg={"#25252586"}
                        // jfCont="center"
                        // bg="yellow !important"
                        >
                        <Button onClick={(e)=>handlerNavigateMyAccount(e)}
                            wd="50%"
                            fSize=".9rem"
                            mb="1rem"
                            // letterSp=".1rem"
                            // bd="#fff"
                            // bg={pink}
                            className={s.btnMyAccount}
                            >Mi Cuenta</Button>
                        {
                        loggedUser
                        ? <Button onClick={()=>handlerCloseSesion()}
                            wd="50%"
                            fSize=".9rem"
                            mb="1rem"
                            // bd="#fff"
                            // bg={pink}
                            // letterSp=".1rem"
                            >Cerrar Sesión</Button>
                        : <Button onClick={()=>navigate("/")}
                            wd="50%"
                            fSize=".9rem"
                            mb="1rem"
                            // bd="#fff"
                            // bg={pink}
                            // letterSp=".1rem"
                            >Ingresar</Button>
                        }
                        {
                        loggedUser !== null ? loggedUser.role === "admin" 
                        ? <Button onClick={()=>handlerNavigate("/dashboardAdmin")}
                            wd="50%"
                            fSize=".9rem"
                            mb="2rem"
                            // pd="0px 10px 0 10px"
                            // br="6px"
                            // color="#252525"
                            // bg={pink}
                            // bd="#fff"
                            // fWeight="bold"
                            // _hovCol={"#fff"}
                            >
                                Panel de Administrador
                            {/* <RiDatabaseLine filter="drop-shadow(1px 1px 2px black)"fontSize="2em"/> */}
                          </Button>
                            : null :null
                        }
                    </Div>    
                </DivAccountBar>
            </Div>
          </Div>
        </Div>

      </Div> : null
    )
}