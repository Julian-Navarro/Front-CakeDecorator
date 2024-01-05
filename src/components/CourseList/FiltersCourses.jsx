import { Div, Select, Option, Button } from "../../utils/StyledComponents/StyledComponents";
import s from "./FilterCourses.module.css"
import { useEffect, useState } from "react";
import filterIcon from "../../utils/IMAGES/ri_filter-fill.png"
import xIcon from "../../utils/IMAGES/octicon_x-12.png" 
export default function FilterCourses ({ allCourses, courses, setCourses, handlerFilterValue, categoryFilter, typeFilter }){
  useEffect(()=>{},[])
  return (
      <div className={s.divContainer}>

        <div pd="0 1rem 0 1rem"bdB="3px solid #E9A0E7"
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
        </div>
      </div>
  )
}