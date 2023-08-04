import { Div, P, Button } from "../../utils/StyledComponents/StyledComponents";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md"
import { AiFillSetting } from "react-icons/ai"
import s from "./CourseListCard.module.css"
import { useBreakpointValue } from "@chakra-ui/react";

export default function CourseListCard ({ course, handlerEditCourse, path, type, category, description, id, img, price, title, videos }) {
    const newTitle = title.length > 80 ? title.slice(0, 80) + "..." : title;
    const breakPoint = useBreakpointValue({ base: "1", md: "2", lg: "3" });
    
    let newDescription = 
    description.length >= 330 
    ? description.slice(0, 330) + "..."
    : description;

    if(breakPoint === "1" && description.length > 200) {
       newDescription = description.slice(0, 200) + "..."
    }

    return (
      <Div bg="#fff"wd="100%"hg="12rem"mt=".5rem"boxSh="2px 2px .3rem .1rem rgb(0, 0, 0, 0.35)"
        jfCont="flex-start"
        ml="10px"mr="10px"className={s.divContainer}>
        <Div wd="14rem"className={s.divImg}>
          <img src={img} alt=""className={s.img} />
        </Div>
        <Div wd="39.8%"hg="12rem"flexDir="column"jfCont="space-between"pd="0 0 .3rem 0"
          className={s.divInfo}>
          <Div >
            <P fSize=".9rem"fnFamily="Shrikhand"color="#AE35B0">{newTitle}</P>
          </Div>
          <Div flexDir="column">
            <Div jfCont="flex-start">
              <P fSize=".85rem"fWeight="bold">Tipo:</P>
              <P fSize=".85rem">{category}</P>
            </Div>
            
            <Div jfCont="flex-start">
              <P fSize=".85rem"fWeight="bold">Modalidad: </P>
              <P fSize=".85rem">{type}</P>
            </Div>
            
            <Div jfCont="flex-start">
              <P fSize=".85rem"fWeight="bold">Duración:</P>
              <P fSize=".85rem">2 Meses (8 clases)</P>
            </Div>
            
            <Div jfCont="flex-start">
              <P fSize=".85rem"fWeight="bold">Precio:</P>
              <P fSize=".85rem">${price}</P>
            </Div>
          </Div>
          
        </Div>
        <Div wd="39.8%"hg="11.4rem"bdL="2px solid gray"br="0"mr=".3rem"flexDir="column"
          className={s.divDescriptionAndButton}>
          <P wd="100%"hg="100%"fSize=".8rem"fWeight="bold"
            className={s.description}>
            {newDescription}
          </P>
          <Div jfCont="flex-end"pd="0 20px 10px 0"className={s.divButton}>
            <Button bg="#DBB5FA"
              fSize=".9rem"fWeight="100"letterSp=".15rem"
              pd=".1rem 2rem .1rem 2rem"br="4rem"
              boxSh="2px 2px .3rem .1rem rgb(0, 0, 0, 0.35), inset -8px -6px 25px #BF97DF"
              onClick={()=>{}}fnFamily="Shrikhand"_hovBg="#C8DCFB"
              >
              Ver Curso
            </Button>
          </Div>
        </Div>
      </Div>
    )
}