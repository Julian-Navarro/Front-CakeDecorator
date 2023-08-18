import { Div, P } from "../../../utils/StyledComponents/StyledComponents";

export default function DetailLearnCards({learnDescriptions}) {
    return (
      <Div jfCont="space-evenly"flWr="wrap"wd="47rem">
          {learnDescriptions?.map((learn, i) => (
            <Div bg="#4B4B4B"wd="12rem"hg="15rem"bd="3px solid #9D9D9D"
              flexDir="column"jfCont="flex-start"
              mb="1.5rem"boxSh=".1rem .1rem .3rem .1rem rgb(0,0,0,0.35), inset 0 0 4rem #222222">
              <P color="#9D9D9D"wd="100%"jfCont="flex-start"pd="5px 0 5px 1rem"
                  fWeight="bold"fSize="2rem">{i + 1}</P>
              <P wd="100%"hg="100%"fSize=".9rem"
                  jfCont="flex-start"alItems="flex-start"
                  pd=".5rem .5rem .5rem .5rem"color="#fff"txAlign="left"
                  letterSp="2px">• {learn}</P>
            </Div>
          ))
          }
      </Div>
    )
}