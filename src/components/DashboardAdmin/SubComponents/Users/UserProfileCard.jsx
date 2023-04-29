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
        <Div bg="red"flexDir="column"pd="5px"wd="100%"hg="80vh"bd="#fff">
            <Div wd="100%"hg="10%"pd="2px"bg="#fff"jfCont="flex-start">
                <Li mr=".5rem"fSize=".9em">{email}</Li>
                <IconButton
                bg="lightgray"
                fontSize="1rem"
                height="90%"
                onClick={()=>copiarAlPortapapeles(email)}
                icon={<MdContentCopy/>}
                />
            </Div>

            <Div wd="100%"hg="90%"pd="10px"bg="coral">
                <Div pd="10px"wd="30%"hg="100%"bg="purple"flexDir="column"jfCont="flex-start">
                    <P hg="20%"letterSp=".05rem"wd="100%"fSize="1.1rem"pd="2px"bg="#fff"fWeight="bold">{name} {surname}</P>
                    {
                    img !== null
                  ? <Img wd="100%"hg="50%"br=".4rem"src={img} alt="img not found" />
                  : <Img wd="100%"hg="50%"br=".4rem"src={userIcon} alt="img not found" />
                    }


                    <Div bg="#252525"wd="100%"hg="30%"flexDir="column"jfCont="space-around">
                        <Div bg="gray"jfCont="flex-start">
                            {status==="active"?<AiFillCheckCircle fontSize="1.6rem" color="greenyellow"/>:status==="banned"?<AiFillCloseCircle fontSize="1.6rem"color="red"/>:<AiFillExclamationCircle fontSize="1.6rem" color="yellow"/>}
                            <P wd="80%"pd="2px"bg="#fff"fSize="1rem"jfCont="flex-start">Estado: {status==="active"?"Activo":status==="banned"?"Bloqueado":"Inactivo"}</P>
                        </Div>
                        <P wd="100%"fSize="1rem"pd="2px"bg="#fff"jfCont="flex-start">Tel: {phone}</P>

                    </Div>


                </Div>

                <Div bg="green"wd="35%"hg="80%"flexDir="column">
                    <P>Productos comprados</P>

                </Div>

                <Div bg="violet"wd="35%"hg="80%"flexDir="column">
                    <P>Cursos comprados</P>
                </Div>  
            </Div>          
        </Div>
    )
}