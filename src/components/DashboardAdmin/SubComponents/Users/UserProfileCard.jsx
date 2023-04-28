import React, { useEffect, useState } from "react";
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
        console.log(navigator.clipboard.writeText("HOla"));
    },[])
    return (
        <Div bg="red"flexDir="column"pd="5px"wd="100%"hg="70vh"bd="#fff">
            <Div wd="100%"pd="2px"bg="#fff">
                <Li mr="1rem">{email}</Li>
                <IconButton
                bg="lightgray"
                onClick={()=>copiarAlPortapapeles(email)}
                icon={<MdContentCopy/>}
                />
            </Div>

            <Div wd="100%"hg="100%">
                <Div pd="10px"wd="20%"hg="100%"bg="purple"flexDir="column"jfCont="flex-start">
                    <P hg="12%"letterSp=".05rem"wd="auto"fSize="1.1rem"pd="2px"bg="#fff">{name} {surname}</P>
                    {
                    img !== null
                    ? <Img wd="100%"hg="39%"br="1rem"src={img} alt="img not found" />
                    : <Img wd="100%"hg="39%"br="1rem"src={userIcon} alt="img not found" />
                    }


                    <Div bg="#252525"wd="100%"hg="49%"flexDir="column">
                        <Div bg="gray">
                            {status==="active"?<AiFillCheckCircle fontSize="1.6rem" color="greenyellow"/>:status==="banned"?<AiFillCloseCircle fontSize="1.6rem"color="red"/>:<AiFillExclamationCircle fontSize="1.6rem" color="yellow"/>}
                            <P wd="80%"pd="2px"bg="#fff"fSize="1rem">Estado: {status==="active"?"Activo":status==="banned"?"Bloqueado":"Inactivo"}</P>
                        </Div>
                        <P wd="100%"fSize="1rem"pd="2px"bg="#fff">Tel: {phone}</P>

                    </Div>


                </Div>

                <Div bg="green"wd="40%"hg="100%"flexDir="column">
                    <P>Productos comprados</P>

                </Div>

                <Div bg="violet"wd="40%"hg="100%"flexDir="column">
                    <P>Cursos comprados</P>
                </Div>  
            </Div>          
        </Div>
    )
}