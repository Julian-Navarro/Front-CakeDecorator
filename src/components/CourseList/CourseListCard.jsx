import { Div, P, Button } from "../../utils/StyledComponents/StyledComponents";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md"
import { AiFillSetting } from "react-icons/ai"
import s from "./CourseListCard.module.css"
import { useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CourseListCard ({ course, handlerEditCourse, path, type, category, description, duration, startDate, id, img, price, title, videos, limit }) {
    const newTitle = title.length > 38 ? title.slice(0, 38) + "..." : title;
    const breakPoint = useBreakpointValue({ base: "1", md: "2", lg: "3" });
    const navigate = useNavigate()
    function handleNavEditCourse() {
      navigate(`editCourse/${id}`)
    }
    let newDescription = 
    description.length >= 118 
    ? description.slice(0, 118) + "..."
    : description;

    if(breakPoint === "1" && description.length > 200) {
       newDescription = description.slice(0, 200) + "..."
    }

    return (
      // <Div bg="#fff"wd="100%"hg="12rem"mt=".5rem"boxSh="2px 2px .3rem .1rem rgb(0, 0, 0, 0.35)"
      //   jfCont="flex-start"
      //   ml="10px"mr="10px"className={s.divContainer}>
      //   <Div wd="14rem"className={s.divImg}>
      //     <img src={img} alt=""className={s.img} />
      //   </Div>
      //   <Div wd="39.8%"hg="12rem"flexDir="column"jfCont="space-between"pd="0 0 .3rem 0"
      //     className={s.divInfo}>
      //     <Div >
      //       <P fnFamily="Shrikhand"color="#AE35B0"className={s.title}>{newTitle}</P>
      //     </Div>
      //     <Div flexDir="column"className={s.divInfoContainer}>
      //       <Div jfCont="flex-start">
      //         <P fSize=".85rem"fWeight="bold">Categoría:</P>
      //         <P fSize=".85rem">{category}</P>
      //       </Div>
            
      //       <Div jfCont="flex-start">
      //         <P fSize=".85rem"fWeight="bold">Tipo: </P>
      //         <P fSize=".85rem">{type}</P>
      //       </Div>
            
      //       <Div jfCont="flex-start">
      //         <P fSize=".85rem"fWeight="bold">Duración:</P>
      //         <P fSize=".85rem">{duration}</P>
      //       </Div>
            
      //       <Div jfCont="flex-start"display={type==="Grabado"?"none":"flex"}>
      //         <P fWeight="bold">Fecha de inicio:</P>
      //         <P >{startDate}</P>
      //       </Div>
      //     </Div>
          
      //   </Div>
      //   <Div wd="39.8%"hg="11.4rem"bdL="2px solid gray"br="0"mr=".3rem"flexDir="column"
      //     className={s.divDescriptionAndButton}>
      //     <P wd="100%"hg="100%"fSize={path==="adm"?"1rem":".8rem"}fWeight="bold"
      //       className={s.description}
      //       display={path==="adm"?"none":"flex"}
      //       >
      //       {newDescription}
      //     </P>
      //     <p className={s.limit}>
      //       Limite de personas: {limit}
      //     </p>
      //     <Div className={s.divButton}>
      //       <Button bg="#DBB5FA"
      //         fSize=".9rem"
      //         fWeight="100"
      //         letterSp=".15rem"
      //         pd=".1rem 2rem .1rem 2rem"br="4rem"
      //         boxSh="2px 2px .3rem .1rem rgb(0, 0, 0, 0.35), inset -8px -6px 25px #BF97DF"
      //         onClick={()=>{navigate(`/courses/${id}`)}}
      //         fnFamily="Shrikhand"
      //         _hovBg="#C8DCFB"
      //         bd="none"
      //         >
      //         Ver {path === "adm" ? null : category}
      //       </Button>
      //       {
      //         path === "adm"
      //         ? <button className={s.btnEdit}onClick={()=>handleNavEditCourse()}>
      //             Editar
      //           </button>
      //         : null
      //       }
      //     </Div>
      //   </Div>
      // </Div>
      //! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      <div className={s.container}>
        <div className={s.divName}>
          <p>{category}</p>
          <h2>
            {newTitle}
          </h2>
        </div>
        <div className={s.divRightSide}>
          <h3>{newDescription}</h3>

          <div className={s.divStartDate}>
            <h4>{startDate}</h4>
            { path === "adm" 
            ?
            <button className={s.btnEdit}
            onClick={()=>handleNavEditCourse()}>
              Editar
            </button>
            :       
            <button>Continuar</button>
            }
          </div>
          
        </div>
      </div>
    )
}