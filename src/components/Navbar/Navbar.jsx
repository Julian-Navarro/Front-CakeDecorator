import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, DivAccountBar, Button, Button2, P } from "../../utils/StyledComponents/StyledComponents";
import s from "./Navbar.module.css"
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

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


  const [currentPos, setCurrentPos] = useState(0)
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentPos > currentScrollPos) {
      // El usuario está scrollando hacia arriba
      // console.log('Scroll hacia arriba');
    } else {
      // El usuario está scrollando hacia abajo o se encuentra en la parte superior
      // console.log('Scroll hacia abajo o en la parte superior');
    }
    setCurrentPos(currentScrollPos);
  };
  window.addEventListener("scroll", handleScroll)
  useEffect(()=>{},[])







// const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
useEffect(()=>{},[account])
useEffect(()=>{},[isOpen])
return (
    location.pathname !== "/" ?
  <Div className={s.container}
    wd="100%"
    hg="1.8rem"
    pos="fixed"
    jfCont="flex-start"br="0"
    zInd="10">

    <Div pos="absolute"posRight="0"mr="1rem"zInd="4"mt=".5rem"
      posTop="0px"wd="2.4rem" hg="2.4rem"br="50%"bg={"#fff"}
      display="none"className={s.btnBurguer}
      onClick={()=>handlerCloseBarAccount()}
      >
        {isOpen
        ? <IoCloseOutline color="#B39BE5"fontSize={"2rem"}/>
        : <IoMenu color="#B39BE5"fontSize={"1.4rem"}/>
        }
    </Div>

    <Div bg="#fff"className={s.divContainer}zInd="2"br="0"
        posTop={isOpen?"46vh":"-46vh"}wd="1240px"
        >

      <Div wd="100%"hg="100%"
        jfCont="space-between"
        br="0"
        className={s.divBtns}
        // bg="red !important"
        >
        <Div className={s.divBtnsNavbar}
            wd="100%"
            jfCont="space-evenly"
            // bg="green !important"
            hg="fit-content !important">
        
        <Button onClick={()=>handlerNavigate("/courses")}
            >
            <P letterSp=".1em" fWeight="bold"fSize="1rem"
                filter="drop-shadow(1px 1px 2px #25252575)">Cursos</P>
        </Button>
        
        <Button onClick={()=>handlerNavigate("/shop")}
            >
            <P letterSp=".1em" fWeight="bold"fSize="1rem"
                filter="drop-shadow(1px 1px 2px #25252575)">Tienda</P>
        </Button>
        </Div>
        <Div wd="auto"
        // bg="yellow !important"
        >
            <Button2 className={account?s.btnCuentaMove:s.btnCuenta}
                onClick={()=>setAccount(!account)}
                bg={account?"#fff":"transparent"}
                // bd={account?".1rem solid #f6dbf5":".1rem solid #fff"}
                pos={"relative"}
                pd="0 .25rem 0 .25rem"
                // posTop={account?"-2.5rem":"0rem"}
                >
                <P letterSp=".1rem"
                    filter={`drop-shadow(1px 1px 1px #25252575)`}>
                        Cuenta
                </P>
            </Button2>
            <DivAccountBar hg="100vh"
                trans=".4s"
                display={"flex"}
                overflow="hidden"
                flexDir="column"
                alItems="flex-start"
                pos="absolute"
                posTop="1.8rem"
                zInd="4"br="0"
                className={account?s.accountBarContainer : s.accountBarContainerClose}>
                <Div wd="100%"hg="100%"
                    pos="absolute"
                    posRight={account?"0rem":"0"} //! ???????????
                    flexDir="column"
                    jfCont="space-evenly"
                    zInd="4"
                    blur="blur(5px)"br="0"
                    bg={"#fff"}
                    className={s.divBtnsMenu}
                    >
                    <Button2 onClick={(e)=>handlerNavigateMyAccount(e)}
                        wd="16rem"
                        bd=".1rem solid #B39BE5"
                        fSize=".9rem"
                        br="2rem"
                        jfCont="center"
                        color="#B39BE5"
                        fWeight="bold"
                        className={s.btnMyAccount}
                        >Mi Cuenta</Button2>
                    {
                    loggedUser
                    ? <Button2 onClick={()=>handlerCloseSesion()}
                        wd="16rem"
                        bd=".1rem solid #B39BE5"
                        fSize=".9rem"
                        br="2rem"
                        jfCont="center"
                        color="#B39BE5"
                        fWeight="bold"
                        >Cerrar Sesión</Button2>
                    : <Button2 onClick={()=>navigate("/")}
                        wd="16rem"
                        bd=".1rem solid #B39BE5"
                        fSize=".9rem"
                        br="2rem"
                        jfCont="center"
                        color="#B39BE5"
                        fWeight="bold"
                        >Ingresar</Button2>
                    }
                    {
                    loggedUser !== null ? loggedUser.role === "admin" 
                    ? <Button2 onClick={()=>handlerNavigate("/dashboardAdmin")}
                        wd="16rem"
                        bd=".1rem solid #B39BE5"
                        fSize=".9rem"
                        br="2rem"
                        jfCont="center"
                        color="#B39BE5"
                        fWeight="bold"
                        >
                            Panel de Administrador
                      </Button2>
                        : null : null
                    }
                </Div>    
            </DivAccountBar>
        </Div>
      </Div>
    </Div>

  </Div> : null
)
}