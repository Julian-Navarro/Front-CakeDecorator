import { Div } from "../../utils/StyledComponents/StyledComponents";

export default function CirclesBackground ({ right }) {
    const purple = "#E9A0E7"//"#D497D3"
    const violet = "#DBB5FA"
    const lightblue = "#D8EAFF"//"#C3DDFB"
    const pink = "#FFECFF"
    const darkPink = "#C4AECF"
    const shadowColor = "rgb(0, 0, 0, 0.3)" 

    return (
        <Div bg={pink}br="100%"wd="66rem" hg="60rem"
            pos="absolute"posLeft={right?"8rem":"-16rem"}posTop="0rem"
            boxSh={`12px 12px 2.5rem .2rem ${shadowColor}, inset ${right?"2rem -16rem":"-16rem -10rem"} 20rem ${darkPink}`}
            >


            <Div bg={violet}br="100%"wd="12rem" hg="12rem"
              pos="relative"posLeft="54rem"posBot="19rem"
              boxSh={`12px 12px 1.5rem .1rem ${shadowColor}, inset -1.3rem -1.3rem 4.5rem ${"#83679A"}`}
            >
            </Div>
            <Div bg={purple}br="100%"wd="16rem" hg="16rem"
              pos="relative"posRight="2rem"posBot="6rem"
              boxSh={`12px 12px 1.5rem .1rem ${shadowColor}, inset -1.3rem -1.3rem 5rem ${"#9A6799"}`}
              >
            </Div>
            <Div bg={violet}br="100%"wd="8rem" hg="8rem"
              pos="relative"posRight="6rem"
              boxSh={`12px 12px 1.5rem .1rem ${shadowColor}, inset -.6rem -.6rem 3.5rem ${"#83679A"}`}
              >
            </Div>
            <Div bg={purple}br="100%"wd="12rem" hg="12rem"
              pos="relative"posLeft="8rem"posTop="24rem"
              boxSh={`12px 12px 1.5rem .1rem ${shadowColor}, inset -1.3rem -1.3rem 5rem ${"#9A6799"}`}
              >
            </Div>
            <Div bg={lightblue}br="100%"wd="7rem" hg="7rem"
              pos="relative"posRight="12rem"posBot="25rem"
              boxSh={`12px 12px 1.5rem .1rem ${shadowColor}, inset -1.2rem -.8rem 3.5rem ${"#869DB7"}`}
              >
            </Div>
            <Div bg={lightblue}br="100%"wd="9rem" hg="9rem"
              pos="relative"posRight="16rem"posTop="10rem"
              boxSh={`12px 12px 1.5rem .1rem ${shadowColor}, inset -1.2rem -.8rem 3.5rem ${"#869DB7"}`}
              >
            </Div>


        </Div>
    )
}