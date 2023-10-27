import { Div, P, Button } from "../../../utils/StyledComponents/StyledComponents";
import iconCourses from "../../../utils/IMAGES/fluent-mdl2_learning-tools.png"
import CirclesBackground from "../../CirclesBackground/CirclesBackground";
import { useNavigate } from "react-router-dom";
import s from "./LinkCourses.module.css"
import Carrousel from "../../Carrusel/Carrusel";
export default function LinkCourses(){
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
              className={s.titleCourses}_hovCol="#D497D3">
                Explorá todos los cursos!
            </P>
            <Div jfCont="flex-end"zInd="1"hg="0">
              <Div wd={"10rem"} hg={"10rem"}pos="relative"posTop="-1rem"cursor="pointer"onClick={()=>{navigate("/courses")}}>
                <img src={iconCourses} alt="" />
              </Div>
            </Div>

            <Div zInd="1"color="#fff"mt="3rem"
              jfCont="space-between"
              className={s.containerCarruselTitle}>
              <Div flexDir="column">
                <Button bg="#60C72F"bd="none"
                  fSize="1.2rem"fWeight="100"letterSp=".15rem"
                  pd=".1rem 2rem .1rem 2rem"br="4rem"
                  boxSh="2px 2px .3rem .1rem rgb(0, 0, 0, 0.35), inset -8px -6px 25px #44752C"
                  onClick={()=>{navigate("/courses")}}fnFamily="Shrikhand"_hovBg="#80E252"
                  >
                  Ver Cursos
                </Button>
                <P fSize="2.2rem" fWeight="bold"wd="30rem"pd="1rem"color="#fff"
                  className={s.coursesDescription}textSh="#333">
                  Dentro de nuestros cursos podrás encontrar opciones de clases presenciales, clases de manera online por Zoom y clases mixtas las cuales son presenciales y por Zoom
                </P>
              </Div>
              <Div wd="auto"mt="2rem"className={s.containerCarrousel}>
                <Carrousel path="landing"/>
              </Div>
            </Div>


          </Div>
        </Div>
    )
}