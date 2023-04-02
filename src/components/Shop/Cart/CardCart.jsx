import { Div, H1, Button, Img, P } from "../../../utils/StyledComponents/StyledComponents"
export default function CardCart ({ handlerSetCartFlag, img, amount, price, stock, name, total, id, index }) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    function handlerCartAdd(){
        if(cart[index].amount < stock ) {
            cart[index].amount = cart[index].amount + 1
            cart[index].total = cart[index].amount * cart[index].price
            localStorage.setItem("cart", JSON.stringify(cart))
            handlerSetCartFlag()
        } else {
            alert("Se llegó al limite de stock actual")
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
        <Div bg="greenyellow" jfCont="space-between" ml="10px"mr="10px">
            <Img hg="160px"br="12px"wd="160px"src={img} alt="not found"/>
            <P wd="10rem"bg="red">{name}</P>
            <P wd="10rem"bg="green">${price}</P>
            <Div wd="10rem">
                <Button wd="40px"hg="40px" onClick={()=>handlerCartSubstract()}>-</Button>
                <P wd="30%"bg="green">{amount}</P>
                <Button wd="40px"hg="40px" onClick={()=>handlerCartAdd()}>+</Button>
            </Div>
            <P wd="10rem"bg="green">${total}</P>
        </Div>
    )
}