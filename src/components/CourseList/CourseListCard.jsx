import { Div, P, Button } from "../../utils/StyledComponents/StyledComponents";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md"
import { AiFillSetting } from "react-icons/ai"

export default function CourseListCard ({ course, handlerEditCourse, path, type, category, description, id, img, price, title, videos }) {
    // const newTitle = title.length > 80 ? `${title.slice(0, 80)}...` : title
    // console.log(course);
    return (
      <Div br=".4rem"bg="green"flexDir="column"wd="22rem"hg="15rem"
          mt="1rem"mr="1rem"boxSh="2px 2px .4rem .2rem rgb(0,0,0,0.35)"
          >
        <Div bg={category==="Seminario"?"rgb(187, 161, 211)":"rgb(154, 209, 243)"}br=".3rem .3rem 0 0"hg="3.8rem"
          // pd=".2rem .3rem .2rem .3rem"
          boxSh="inset 0 0 1.5rem .1rem rgb(0,0,0,0.4)"
        >
          <P fSize={title.length>20?title.length>40?title.length>65?title.length>75?title.length>119?
            ".82rem":".85rem":".98rem":"1.1rem":"1.2rem":"1.6rem"}
          color="#333"letterSp=".05rem"zInd="1"
          pd=".2rem .3rem .2rem .3rem" 
          hg="2.8rem"
          mt=".3rem"mb=".3rem"mr="2.1rem"
          fWeight="bold">{title}</P>
          <Div pos="absolute">
            <Div pos="relative"wd="2rem"hg="3rem"posLeft="9.5rem"posTop="-.3rem"
              br="0"clPath="0 0, 100% 0, 100% 80%, 50% 55%, 0 80%"
              boxSh="inset 0 0 .4rem .2rem rgb(0,0,0,0.35)"bdR="2px solid #333"
              bg={type==="Hibrido"?"rgb(77, 139, 233)":type==="Online"?"rgb(108, 216, 162)":"rgb(247, 110, 61)"}>
            </Div>
          </Div>
        </Div>
        <Div wd="100%"overflow="hidden"br="0 0 .3rem .3rem"
            hg="80%"_hovPosLeftDiv="0%"img={img}>
          <Div bg="rgb(0,0,0,0.55)"blur="blur(4px)"hg="100%"
          jfCont="space-between"pos="relative"posLeft="100%"trans="1s"
          br="0 0 .3rem .3rem">
            <Div ml=".3rem"alItems="flex-start"flexDir="column"wd="60%"hg="100%">
              <P pd="0 0 0 .2rem"mb=".1rem"fSize=".8rem"color="#eeee"letterSp=".05rem">
                Modalidad: {type==="Hibrido"?"Presencial y Online":type}
              </P>
              <P pd="0 0 0 .2rem"mb=".1rem"fSize=".8rem"color="#eeee"letterSp=".05rem">Tipo: {category}</P>
              <P pd="0 0 0 .2rem"mb=".1rem"fSize=".8rem"color="#eeee"letterSp=".05rem">Precio: ${price}</P>
              <P pd="0 0 0 .2rem"mb=".1rem"fSize=".8rem"color="#eeee"letterSp=".05rem">
                {videos.length} {videos.length===1?"video":"videos"}
              </P>
              <P pd="0 0 0 .2rem"mb=".1rem"fSize=".8rem"color="#eeee"letterSp=".05rem">Duracion del curso: ???</P>
              <P pd="0 0 0 .2rem"mb=".1rem"fSize=".8rem"color="#eeee"letterSp=".05rem">Cantidad de clases: ???</P>
            </Div>
            <Div wd="40%"hg="90%"br="0"bdL="4px solid lightgray"flexDir="column"jfCont="space-between">
              <Button alSelf="flex-end"bg="#333"fSize="1.3rem"
                br="2rem"wd="2rem" hg="2rem"mr=".5rem"boxSh="1px 1px .4rem .1rem rgb(0,0,0,0.35)">
                  <BsSuitHeartFill color="#eeee"/>
              </Button>

              { path==="adm"
              ? <Div jfCont="space-around">
                  <Button mb="1rem"bg="#333"pd=".3rem .7rem .3rem .7rem"
                    boxSh="1px 1px .4rem .1rem rgb(0,0,0,0.35)" onClick={(e)=>handlerEditCourse(e, course)}>
                    <AiFillSetting/>
                  </Button>
                  <Button mb="1rem"bg="#333"pd=".3rem .7rem .3rem .7rem"
                    boxSh="1px 1px .4rem .1rem rgb(0,0,0,0.35)" >
                    <MdDelete/>
                  </Button>
                </Div>
              : <Button mb="1rem"bg="#333"pd=".3rem .7rem .3rem .7rem"
                  boxSh="1px 1px .4rem .1rem rgb(0,0,0,0.35)"> Ver detalles 
                </Button>}
            </Div>
           </Div>
        </Div>
        {/* <Div bg="lightblue"pos="absolute"wd="15rem"hg="2rem"br=".3rem .3rem 0 0"mb="16rem">
        </Div> */}
      </Div>
    )
}