import { Div, P } from "./StyledComponents/StyledComponents";
import Foto from "../utils/IMAGES/2082c1b2-3917-45be-837e-7d586c37ba60.jpg";
import s from "./Editor.module.css";

export default function Editor() {
    return (
        <Div hg=""bg="#fff"jfCont="center"br="0">
            <Div img={Foto} wd="50%"bg="blue"hg="100vh"br="0">
              <Div flexDir="column"hg="100%"jfCont="space-evenly"br="0">
                <p 
                   className={s.gradientText}
                   fSize="3rem"
                   color="red"fWeight="bold"
                   >
                    @ExclusiveArt
                </p>
                <p  
                    className={s.gradientText}
                    fSize="3rem"
                    color="red"fWeight="bold"
                   >
                    @ExclusiveArt
                </p>
                {/* className={s.gradientText} */}
                <p 
                   className={s.gradientText}
                   fSize="3rem"
                   color="red"fWeight="bold"
                    >
                    @ExclusiveArt
                </p>
              </Div>
            </Div>
        </Div>
    )
}