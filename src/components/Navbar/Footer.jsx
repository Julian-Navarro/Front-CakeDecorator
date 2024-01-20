import { Div, P } from "../../utils/StyledComponents/StyledComponents";
import igIcon from "../../utils/IMAGES/imgsFooter/skill-icons_instagram.png"
import fbIcon from "../../utils/IMAGES/imgsFooter/devicon_facebook.png"
import arrow  from "../../utils/IMAGES/imgsFooter/Maskgroup.png"
import logo from "../../utils/IMAGES/Logo.png"
import s from "./Footer.module.css"
import { useNavigate } from "react-router-dom";
export default function Footer () {
  const navigate = useNavigate()
    return (
        <div className={s.divContainer}>
          <Div flexDir="column"alItems="flex-start"jfCont="flex-start"pd="2px">
            <Div wd="8rem" hg="6rem">
              <img src={logo} alt="" />
            </Div>
            <Div jfCont="flex-start" className={s.pointer}>
              <img src={igIcon} alt=""className={s.icons}/>
              <P fWeight="bold"fSize=".9rem">Instagram</P>
            </Div>
            <Div jfCont="flex-start" className={s.pointer}>
              <img src={fbIcon} alt=""className={s.icons}/>
              <P fWeight="bold"fSize=".9rem">Facebook</P>
            </Div>
          </Div>
          <Div flexDir="column"alItems="flex-start">
            <Div jfCont="flex-start" className={s.pointer}>
              <img src={arrow}alt="" className={s.arrowRight}/>
              <P fWeight="bold"fSize=".9rem"onClick={()=>navigate("/courses")}>Cursos</P>
            </Div>
            <Div jfCont="flex-start" className={s.pointer}>
              <img src={arrow}alt="" className={s.arrowRight}/>
              <P fWeight="bold"fSize=".9rem"onClick={()=>navigate("/shop")}>Tienda</P>
            </Div>
          </Div>
          <Div className={s.pointer}>
            <P fWeight="bold"fSize=".9rem">Contactanos</P>
          </Div>
        </div>
    )
}