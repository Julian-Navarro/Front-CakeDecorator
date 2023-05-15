import React, { useEffect } from "react";
import userIcon from "../../../../utils/user-icon.png"
import { Div, P, Img, Li, Button } from "../../../../utils/StyledComponents/StyledComponents";
import { AiFillCheckCircle, AiFillCloseCircle, AiFillExclamationCircle } from "react-icons/ai"
import { MdContentCopy } from "react-icons/md"
import { IconButton } from "@chakra-ui/react"

export default function UserProfileCard({ user: {name, surname, email, status, phone, id, img} }) {
    let emailParts = [];
    for(let i = 0, j = 1; email.length > 20*i; i++, j++){
        emailParts.push(email.slice(i*20, j*20))
        console.log(emailParts);
    }
function copiarAlPortapapeles(texto) {
  const inputTemp = document.createElement("input");
  inputTemp.setAttribute("value", texto);
  document.body.appendChild(inputTemp)
  inputTemp.select();
  document.execCommand("copy"); 
  document.body.removeChild(inputTemp);
}
    useEffect(()=>{

    },[])
    return (
        <Div ml="1rem"flexDir="column"wd="100%"hg="80vh"bd="#435daa"boxSh="0 0 .3rem .2rem #333"br="4px">
            <Div wd="100%"hg="10%"jfCont="flex-start"bg="#435daa"br="0">
                <P ml=".5rem"hg="100%"letterSp=".05rem"wd="100%"fSize="1.1rem"fWeight="bold"jfCont="flex-start"color="#fff">{name} {surname}</P>
                <P mr=".5rem"hg="100%"fSize="1rem"letterSp=".05rem"color="#fff">{email}</P>
                <IconButton
                bg="lightgray"
                fontSize="1rem"
                height="1.5rem"
                minWidth="1.5rem"
                marginRight=".5rem"
                onClick={()=>copiarAlPortapapeles(email)}
                icon={<MdContentCopy width="1.5rem"/>}
                />
            </Div>
            <Div wd="100%"hg="90%"br="0px"bg="#435daa"pd="10px">
                <Div wd="30%"hg="100%"flexDir="column"jfCont="space-between"bg="#435daa"br="0 0 0 4px">
                    {
                    img !== null
                  ? <Img boxSh="0 0 .3rem .1rem #333"ml=".5rem"wd="90%"hg="60%"br="50%"mt="1rem"src={img} alt="img not found" />
                  : <Img boxSh="0 0 .3rem .1rem #333"ml=".5rem"wd="90%"hg="60%"br="50%"mt="1rem"src={userIcon} alt="img not found" />
                    }


                    <Div ml=".5rem"wd="100%"hg="30%"flexDir="column"jfCont="space-around">
                        <Div jfCont="flex-start">
                            {status==="active"?<AiFillCheckCircle fontSize="1.6rem" color="#56ceab"/>:status==="banned"?<AiFillCloseCircle fontSize="1.6rem"color="red"/>:<AiFillExclamationCircle fontSize="1.6rem" color="yellow"/>}
                            <P wd="80%"pd="2px"fSize="1rem"jfCont="flex-start"color="#fff">Estado: {status==="active"?"Activo":status==="banned"?"Bloqueado":"Inactivo"}</P>
                        </Div>
                        <P wd="90%"fSize="1rem"pd="2px"jfCont="flex-start"color="#fff">Tel: {phone}</P>

                    </Div>


                </Div>
                <Div wd="70%"bg="#fff"hg="100%"br="1rem"boxSh="inset 0 0 .3rem .2rem #333">
                    <Div wd="35%"hg="100%"flexDir="column">
                        <P>Productos comprados</P>

                    </Div>
                    <Div wd="35%"hg="100%"flexDir="column">
                        <P>Cursos comprados</P>
                    </Div>  
                </Div>
            </Div>          
        </Div>
    )
}