import { Div, H1, Button, Img, P } from "../../../utils/StyledComponents/StyledComponents"
import { IoMdAdd } from "react-icons/io"
import { RiSubtractFill } from "react-icons/ri"

export default function CardCart ({ handlerSetCartFlag, img, amount, price, stock, name, total, id, index }) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    function handlerCartAdd(){
        if(cart[index].amount < stock ) {
            cart[index].amount = cart[index].amount + 1
            cart[index].total = cart[index].amount * cart[index].price
            localStorage.setItem("cart", JSON.stringify(cart))
            handlerSetCartFlag()
        }
    }
    function handlerCartSubstract(){
        if(amount === 1){
            cart.splice(index, 1)
            localStorage.setItem("cart", JSON.stringify(cart))
            handlerSetCartFlag()
        } else {
            cart[index].amount = cart[index].amount - 1
            cart[index].total = cart[index].amount * cart[index].price
            localStorage.setItem("cart", JSON.stringify(cart))
            handlerSetCartFlag()
        }
    }
    return (
        <Div  jfCont="space-between" hg="8rem"br="0"mb=".4rem"pd=".2rem"bdB="2px solid #333">
            <Div wd="20%"br="0"bdR="2px solid #333">
                <Img wd="8rem"hg="7.6rem"br="12px"src={img} alt="not found"/>
            </Div>
            <P hg="100%"wd="20%"br="0"bdR="2px solid #333" jfCont="flex-start"alItems="flex-start">{name}</P>
            <Div flexDir="column"hg="100%"wd="20%"br="0"bdR="2px solid #333">
                <P wd="30%">{amount}</P>
                <Div wd="50%"jfCont="space-evenly">
                    <Button wd="2rem"hg="40px"bg="#333" onClick={()=>handlerCartSubstract()}><RiSubtractFill /></Button>
                    <Button wd="2rem"hg="40px"bg="#333" onClick={()=>handlerCartAdd()}><IoMdAdd color="#fff"/></Button>
                </Div>
                <Div overflow="hidden"pos="relative"wd="8rem"mt=".2rem"hg="1.4rem">
                    <Div pos="relative"posLeft={stock===amount?"0rem":"-8rem"}>Limite de Stock</Div>
                </Div>
            </Div>
            <P hg="100%"wd="20%"br="0"bdR="2px solid #333">${price}</P>
            <P hg="100%"wd="20%">${total}</P>
        </Div>
    )
}