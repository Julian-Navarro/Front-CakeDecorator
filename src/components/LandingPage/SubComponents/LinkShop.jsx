import { Div, P, Button } from "../../../utils/StyledComponents/StyledComponents";
import CirclesBackground from "../../CirclesBackground/CirclesBackground";
import s from "./LinkShop.module.css"
import { useNavigate } from "react-router-dom";
import Carrousel from "../../Carrusel/Carrusel";
export default function LinkShop () {
  const navigate = useNavigate()
  const shadow = "rgb(0, 0, 0, 0.3)" 

  return (
      <Div mt="2rem"pd=".5rem"hg="70rem"flexDir="column"jfCont="flex-start">
        <Div pos="relative"hg="1rem">
          <CirclesBackground right={true}/>
        </Div>

        <Div hg="52rem"flexDir="column"
          jfCont="flex-start"zInd="1"alItems="flex-start">

          <P fSize="3rem"textSh="#333"fnFamily="Shrikhand"letterSp=".2rem"color="#fff"
            zInd="2"cursor="pointer"onClick={()=>{navigate("/shop")}}
            className={s.titleCourses}_hovCol="#D497D3">
              Explorá nuestra tienda online!
          </P>
          <Div jfCont="flex-end"zInd="1"hg="0">
            <Div wd={"10rem"} hg={"10rem"}pos="relative"posTop="-1rem"cursor="pointer"onClick={()=>{navigate("/shop")}}>
              {/* <img src={iconCourses} alt="" /> */}
            </Div>
          </Div>

          <Div zInd="1"color="#fff"mt="3rem"
            jfCont="space-between"
            className={s.containerCarruselTitle}>
            <Div flexDir="column">
              <Button bg="#60C72F"
                fSize="1.2rem"fWeight="100"letterSp=".15rem"
                pd=".1rem 2rem .1rem 2rem"br="4rem"
                boxSh={`4px 4px .3rem .1rem ${shadow}`}
                onClick={()=>{navigate("/shop")}}fnFamily="Shrikhand"_hovBg="#80E252"
                >
                Productos
              </Button>
              <P fSize="2.2rem" fWeight="bold"wd="30rem"pd="1rem"color="#fff"
                className={s.coursesDescription}textSh="#333">
                Entrá a nuestra tienda y encontrá productos utiles para hacer y decorar tus tortas profesionalmente! Cargá tu carrito con productos y comprá de forma segura y rápida!
              </P>
            </Div>
            <Div wd="auto"mt="2rem"className={s.containerCarrousel}>
              {/* <Carrousel path="landing"/> */}
            </Div>
          </Div>


        </Div>
      </Div>
  )
}
