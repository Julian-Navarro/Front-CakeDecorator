import { useParams } from "react-router-dom";
import { Div, P, Button } from "../../../utils/StyledComponents/StyledComponents";
import { useEffect } from "react";
import axios from "axios";
import { HOST } from "../../../utils";
import { useState } from "react";
import s from "./DetailCourses.module.css"
import DetailLearnCards from "./DetailLearnCards";
export default function DetailCourses () {
    const { id } = useParams();
    const [course, setCourse] = useState()
    async function getCourse(id) {
        const course = await axios.get(`${HOST}/courses/id?id=${id}`);
        setCourse(course.data)
    }
    useEffect(()=>{getCourse(id);console.log(course);},[]);
    useEffect(()=>{console.log(course?.id);},[course])
// BORDER IMG COLORS #C78BD7, #EFB1FF, #ABE6FF, #EFB1FF, #C78BD7
    return (
    <Div bg="#fff"br="0"mt="2rem"flexDir="column"
        className={s.divContainer}>
        <P fSize="2.5rem"textSh="#333"fnFamily="Shrikhand"letterSp=".2rem"color="#fff"
            zInd="2"mt="2rem"mb="2rem"
            >{course?.title}</P>
        <Div jfCont="space-evenly">
          <Div flexDir="column"wd="auto"hg="17rem"jfCont="space-between">
            <P color="#fff"pd="5px 5px 5px 10px"letterSp="2px"jfCont="flex-start"bg="#4D4D4D"br="0"wd="20rem">Tipo: {course?.category}</P>
            <P color="#fff"pd="5px 5px 5px 10px"letterSp="2px"jfCont="flex-start"bg="#4D4D4D"br="0"wd="20rem"display={course?.startDate?"flex":"none"}>Fecha de inicio: {course?.startDate}</P>
            <P color="#fff"pd="5px 5px 5px 10px"letterSp="2px"jfCont="flex-start"bg="#4D4D4D"br="0"wd="20rem">Duración: {course?.duration}</P>
            <P color="#fff"pd="5px 5px 5px 10px"letterSp="2px"jfCont="flex-start"bg="#4D4D4D"br="0"wd="20rem">{course?.type}</P>
            <P color="#fff"pd="5px 5px 5px 10px"letterSp="2px"jfCont="flex-start"bg="#4D4D4D"br="0"wd="20rem">Valor del {course?.category}: ${course?.price}</P>
          </Div>
          <Div wd="auto">
            <img src={course?.img} alt="cargando imagen..." 
                className={s.img}/>
          </Div>
        </Div>
        
        <P bg="#4D4D4D"br="0"fSize="1.2rem"fWeight="bold"
            color="#fff"textSh="#333"letterSp=".1rem"mt="2rem"
            >{course?.description}</P>
        <Button mt="2rem"bg="#EE9039"br="2rem"letterSp=".1rem"
            fnFamily="Shrikhand"fSize="1.2rem"
            boxSh="2px 2px .3rem .1rem #9A9A9A"pd="6px 30px 6px 30px"
            _hovBg="#80E252"mb="2rem"
            >Pagar Matrícula
        </Button>
        <P mb="2rem"fnFamily="Shrikhand"fSize="1.6rem"wd="100%"
          letterSp="2px"textSh="rgb(0,0,0,0.25)"
          color="#4B4B4B">
          Lo que aprenderás en este {course?.category?.toLowerCase()}
        </P>
        <DetailLearnCards learnDescriptions={course?.learnDescriptions}/>
        <Button mt="2rem"bg="#EE9039"br="2rem"letterSp=".1rem"
            fnFamily="Shrikhand"fSize="1.2rem"
            boxSh="2px 2px .3rem .1rem #9A9A9A"pd="6px 30px 6px 30px"
            _hovBg="#80E252"mb="2rem"
            >Pagar Matrícula
        </Button>
    </Div>
    )
}