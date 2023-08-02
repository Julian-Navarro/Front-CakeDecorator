import { Div, P } from "../../utils/StyledComponents/StyledComponents";
import igIcon from "../../utils/IMAGES/imgsFooter/skill-icons_instagram.png"
import fbIcon from "../../utils/IMAGES/imgsFooter/devicon_facebook.png"
export default function Footer () {
    return (
        <Div br="0"bg="#C7CAD6" wd="100%"minHg="14rem"zInd="-1"color="#fff">
          <Div flexDir="column"bg="cyan"alItems="flex-start"hg="12rem"jfCont="flex-start"pd="2px">
            <Div jfCont="flex-start"bg="orange">
              <img src={igIcon} alt="" />
              <P fWeight="bold">Instagram</P>
            </Div>
            <Div jfCont="flex-start"bg="orange">
              <img src={fbIcon} alt="" />
              <P fWeight="bold">Facebook</P>
            </Div>
          </Div>
        </Div>
    )
}