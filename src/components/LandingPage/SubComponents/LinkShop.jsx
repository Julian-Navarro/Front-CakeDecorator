import { Div, P } from "../../../utils/StyledComponents/StyledComponents";
import CirclesBackground from "../../CirclesBackground/CirclesBackground";
import s from "./LinkShop.module.css"
import { useNavigate } from "react-router-dom";
import Carrousel from "../../Carrusel/Carrusel";
export default function LinkShop () {
    const navigate = useNavigate()
    return (
        // <Div hg="60rem"bg="cyan"flexDir="column"jfCont="flex-start">
        //   <Div pos="relative"hg="1rem"bg="red">
        //     <CirclesBackground right={true}/>
        //   </Div>
        //     <Div zInd="1">
        //         Hola
        //     </Div>
        // </Div>
        <Div mt="2rem"pd=".5rem"hg="70rem"flexDir="column"jfCont="flex-start">
          <Div pos="relative"hg="1rem">
            <CirclesBackground right={true}/>
          </Div>

          <Div hg="52rem"flexDir="column"
            jfCont="flex-start"zInd="1"alItems="flex-start">

            <P fSize="3rem"textSh="#333"fnFamily="Shrikhand"letterSp=".2rem"color="#fff"//color="#383838"
              zInd="2"cursor="pointer"onClick={()=>{navigate("/courses")}}
              className={s.titleCourses}>
                Explorá nuestra tienda!
            </P>
            <Div jfCont="flex-end"zInd="1"hg="0">
              <Div wd={"8rem"} hg={"8rem"}pos="relative"posTop="-3rem"cursor="pointer"onClick={()=>{navigate("/courses")}}>
                {/* <img src={iconCourses} alt="" /> */}
              </Div>
            </Div>

            <Div zInd="1"color="#fff"mt="3rem"
              jfCont="space-between"
              className={s.containerCarruselTitle}>

              <P fSize="1.6rem" fWeight="bold"wd="20rem"
                className={s.coursesDescription}alSelf="flex-start"textSh="#333">
                Entrá a nuestra tienda y encontrá muchos productos utiles para decorar tus tortas! Cargá tu carrito con productos y comprá de forma segura y rápida!
              </P>
              <Div wd="auto"alSelf="flex-end">
                <Carrousel path="landing"/>
              </Div>
            </Div>


          </Div>
        </Div>
    )
}