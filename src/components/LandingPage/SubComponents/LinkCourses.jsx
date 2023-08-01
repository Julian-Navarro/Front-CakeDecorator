import { Div, P } from "../../../utils/StyledComponents/StyledComponents";
import iconCourses from "../../../utils/IMAGES/fluent-mdl2_learning-tools.png"
import CirclesBackground from "../../CirclesBackground/CirclesBackground";
import { useNavigate } from "react-router-dom";
import s from "./LinkCourses.module.css"
import Carrousel from "../../Carrusel/Carrusel";
export default function LinkShop(){
  const navigate = useNavigate()
    return (
        <Div mt="2rem"pd=".5rem"hg="70rem"flexDir="column"jfCont="flex-start">
          <Div pos="relative"hg="1rem">
            <CirclesBackground/>
          </Div>

          <Div hg="52rem"flexDir="column"
            jfCont="flex-start"zInd="1"alItems="flex-start">

            <P fSize="3rem"textSh="#333"fnFamily="Shrikhand"letterSp=".2rem"color="#fff"
              zInd="2"cursor="pointer"onClick={()=>{navigate("/courses")}}
              className={s.titleCourses}>
                Explorá todos los cursos!
            </P>
            <Div jfCont="flex-end"zInd="1"hg="0">
              <Div wd={"8rem"} hg={"8rem"}pos="relative"posTop="-3rem"cursor="pointer"onClick={()=>{navigate("/courses")}}>
                <img src={iconCourses} alt="" />
              </Div>
            </Div>

            <Div zInd="1"color="#fff"mt="3rem"
              jfCont="space-between"
              className={s.containerCarruselTitle}>

              <P fSize="1.6rem" fWeight="bold"wd="20rem"
                className={s.coursesDescription}alSelf="flex-start"textSh="#333">
                Dentro de nuestros cursos podrás encontrar opciones de clases presenciales, clases de manera online por Zoom y clases mixtas las cuales son presenciales y por Zoom
              </P>
              <Div wd="auto"alSelf="flex-end"mt="2rem">
                <Carrousel path="landing"/>
              </Div>
            </Div>


          </Div>
        </Div>
    )
}