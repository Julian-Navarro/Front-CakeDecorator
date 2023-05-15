import React from "react";
import { Div,DivGradient, P, Button, H1, Img } from "../../utils/StyledComponents/StyledComponents";
export default function CourseListCard ({ course, handlerEditCourse, path, type, category, description, id, img, price, title, videos }) {
    const newTitle = title.length > 80 ? `${title.slice(0, 80)}...` : title
    return (
        // <DivGradient boxSh="10px 20px .3rem .2rem gray"bd="#161616b4"wd="18rem" hg="27rem" flexDir="column" jfCont="space-between" pd="0 0 .7rem 0"mt="1rem" mr="1rem">

        //   <Div hg="15%" wd="85%" bg="none"pd="none">
        //     <H1 hg="100%" fSize=".9rem" bg="transparent"pd="0 1rem 0 1rem">{newTitle}</H1>
        //   </Div>
        //   <Img src={img} wd="80%" br="12px" pd=".5rem 0rem 0 0rem"></Img>
        //         <Div flexDir="column"hg="8rem"pd="none"  wd="85%"bg="transparent">
        //           <Div hg="2rem" pd="none"wd="70%" jfCont="space-between">
        //             <P fSize="18px" fWeight="700" hg="50%"bg="none"pd="none">Tipo: </P>
        //             <P fSize="18px" hg="50%"bg="none"pd="none">{type}</P>
        //           </Div>
        //           <Div hg="2rem" bg="transparent"pd="none" wd="70%" jfCont="space-between">
        //             <P fSize="18px" fWeight="700" pd="none">Categoria: </P>
        //             <P fSize="18px" bg="none"pd="none">{category}</P>
        //           </Div>
        //           <Div hg="2rem" bg="transparent"pd="none" wd="70%" jfCont="space-between">
        //             <P fSize="18px" pd="none"fWeight="700">Precio: </P>
        //             <P fSize="18px" bg="none"pd="none">${price}</P>
        //           </Div>
        //         </Div>
        //     <Div pd="none" hg="30%" wd="100%" bg="none"jfCont="space-around">
        //       <Button bg="#FFBE6C" fWeight="700"color="#161616b4"_hovCol="#161616" _hovBg="#FFA033">Ver Detalles</Button>
        //       {
        //         path === "adm"
        //       ?<Button bg="#FFBE6C" fWeight="700"color="#161616b4"_hovCol="#161616" _hovBg="#FFA033"onClick={(e)=>{handlerEditCourse(e, course)}}>Editar</Button>
        //       :<Button bg="#FFBE6C" fWeight="700"color="#161616b4"_hovCol="#161616" _hovBg="#FFA033">Comprar Curso</Button>
        //       }
        //     </Div>
        // </DivGradient>
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SAVE ↑↑↑
        // course, handlerEditCourse, path, type, category, description, id, img, price, title, videos
      <Div bg="green"wd="30rem"hg="18rem"mt="1rem"mr="1rem">
        <Div wd="100%"overflow="hidden"hg="100%"_hovPosLeftDiv="0%"img={img}>
          <Div bg="rgb(0,0,0,0.25)"blur="blur(4px)"hg="100%"flexDir="column"jfCont="space-between"pos="relative"posLeft="100%"trans="1s">
            <P fWeight="bold">{title}</P>
            <Div ml=".3rem"bg="red"jfCont="space-between">
              <P fSize=".9rem"bg="green">Modalidad: </P>
              <P fSize=".9rem"bg="green">{type==="Hibrido"?"Presencial y Online":type}</P>
            </Div>
            <P fWeight="bold">Tipo: {category}</P>
            <P fWeight="bold">Precio: {price}</P>
           </Div>
        </Div>
        <Div bg="lightblue"pos="absolute"wd="30rem"hg="2rem"br=".3rem .3rem 0 0"mb="17rem">

        </Div>
      </Div>
    )
}