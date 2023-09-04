import { Div, Select, Option, Button } from "../../utils/StyledComponents/StyledComponents";
import s from "./FilterCourses.module.css"
import { useEffect, useState } from "react";
import filterIcon from "../../utils/IMAGES/ri_filter-fill.png"
import xIcon from "../../utils/IMAGES/octicon_x-12.png" 
export default function FilterCourses ({ allCourses, courses, setCourses, handlerFilterValue, categoryFilter, typeFilter }){
 let [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{console.log("1");},[isOpen])
  return (
      <Div wd="100%"hg="3rem"pos="fixed"posTop="2rem"className={s.divContainer}zInd="2">

        <Div pos="absolute"posRight="0px"zInd="2"bg={isOpen?"#8B5C8A":"#B39BE5"}
          mr=".5rem"wd="2.8rem" hg="2.8rem"br="50%"
          display="none"className={s.btnBurguer}onClick={()=>setIsOpen(!isOpen)}
          >
            <img src={isOpen?xIcon:filterIcon} alt="" className={s.imgIcon}/>
        </Div>

        <Div bg="#fff"br="0"jfCont="space-around"
          pd="0 1rem 0 1rem"bdB="3px solid #E9A0E7"
          hg="3rem"
          wd="1240px"
          posRight={isOpen?"0":"-100%"}
          className={s.container}
          >

          <Select bg="#E9A0E7"br="0"fnFamily="Shrikhand"fSize="1rem"color="#fff"
            letterSp=".05rem"bd="#eee"name="category"onChange={(e)=>handlerFilterValue(e)}>
            <Option value=""fnFamily="Shrikhand">
              {categoryFilter?"Todos":"Categoría"}
            </Option>
            <Option value="Curso"fnFamily="Shrikhand"
              color={categoryFilter==="Curso"?"#E9A0E7":"#333"}
              >Cursos</Option>
            <Option value="Seminario"fnFamily="Shrikhand"
              color={categoryFilter==="Seminario"?"#E9A0E7":"#333"}
              >Seminarios</Option>
          </Select>

          <Select bg="#E9A0E7"br="0"fnFamily="Shrikhand"fSize="1rem"color="#fff"
            letterSp=".05rem"bd="#eee"name="type"onChange={(e)=>handlerFilterValue(e)}>
            <Option value=""fnFamily="Shrikhand">{typeFilter?"Todos":"Tipo"}</Option>
            <Option value="Presencial"fnFamily="Shrikhand"color={typeFilter==="Presencial"?"#E9A0E7":"#333"}>Presencial</Option>
            <Option value="Grabado"fnFamily="Shrikhand"color={typeFilter==="Grabado"?"#E9A0E7":"#333"}>Grabado</Option>
          </Select>

        </Div>
      </Div>
  )
}