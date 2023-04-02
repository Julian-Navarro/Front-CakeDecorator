import CardCart from "./CardCart"
import { Div, P } from "../../../utils/StyledComponents/StyledComponents"
import { useEffect } from "react";
export default function CardsCart({ handlerSetCartFlag, cart}){

    return (
        <Div display="column"flWr="wrap" wd="100%"bg="yellow"hg="150vh">

            <Div bg="transparent" jfCont="space-between" mr="10px"ml="10px">
                <P bg="red" wd="10rem"> </P>
                <P bg="pink"wd="10rem">Producto</P>
                <P bg="pink"wd="10rem">Precio</P>
                <P bg="pink"wd="10rem">Cantidad</P>
                <P bg="pink"wd="10rem">Subtotal</P>
            </Div>

            { cart?.length 
            ? cart.map((pr, i)=> <CardCart
            key={pr.id}
            handlerSetCartFlag={handlerSetCartFlag}
            index={i}
            id={pr.id}
            name={pr.name}
            price={pr.price}
            total={pr.total}
            stock={pr.stock}
            amount={pr.amount}
            img={pr.img}
            />)
            : null 
            }
        </Div>
    )
}