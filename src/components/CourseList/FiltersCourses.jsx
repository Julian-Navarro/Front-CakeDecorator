import { Div, Select, Option, Button } from "../../utils/StyledComponents/StyledComponents";
import s from "./FilterCourses.module.css"
import { useEffect, useState } from "react";
export default function FilterCourses ({ allCourses, courses, setCourses, handlerFilterValue, categoryFilter, typeFilter }){
 let [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{console.log("1");},[isOpen])
  return (
      <Div wd="100%"hg="3rem"pos="fixed"posTop="3.7rem">

        <Div pos="absolute"posRight="0px"zInd="2"bg={isOpen?"#9A6799":"#E9A0E7"}
          mr=".5rem"wd="2.8rem" hg="2.8rem"br="50%"color="#fff"
          display="none"className={s.btnBurguer}onClick={()=>setIsOpen(!isOpen)}
          >
            X
        </Div>

        <Div bg="#fff"br="0"jfCont="space-between"
          pd="0 1rem 0 1rem"bdB="3px solid #E9A0E7"
          hg="3rem"
          wd="1240px"
          posRight={isOpen?"0":"-100%"}
          className={s.container}
          >

          <Select bg="#E9A0E7"br="0"fnFamily="Shrikhand"fSize="1rem"color="#fff"
            letterSp=".05rem"bd="#eee"name="category"onChange={(e)=>handlerFilterValue(e)}>
              <Option value=""fnFamily="Shrikhand">{categoryFilter?"Todos":"Categoría"}</Option>
            <Option value="Curso"fnFamily="Shrikhand"
              >Cursos</Option>
            <Option value="Seminario"fnFamily="Shrikhand"
              >Seminarios</Option>
          </Select>

          <Select bg="#E9A0E7"br="0"fnFamily="Shrikhand"fSize="1rem"color="#fff"
            letterSp=".05rem"bd="#eee"name="type"onChange={(e)=>handlerFilterValue(e)}>
            <Option value=""fnFamily="Shrikhand">{typeFilter?"Todos":"Tipo"}</Option>
            <Option value="Presencial"fnFamily="Shrikhand">Presencial</Option>
            <Option value="Online"fnFamily="Shrikhand">Online</Option>
            <Option value="Hibrido"fnFamily="Shrikhand">Híbrido</Option>
          </Select>

          <Button bg="#E9A0E7" br="0"pd="0 .5rem 0 .5rem"letterSp=".05rem"
            bd="#eee"color="#fff"fnFamily="Shrikhand"fSize="1rem">
            Más populares
          </Button>

        </Div>
      </Div>
  )
}