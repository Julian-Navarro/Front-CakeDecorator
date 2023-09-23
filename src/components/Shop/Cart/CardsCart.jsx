import CardCart from "./CardCart"
import { Div, P } from "../../../utils/StyledComponents/StyledComponents"
import { useEffect } from "react";
export default function CardsCart({ handlerSetCartFlag, cart}){

    return (
        <Div flexDir="column"jfCont="flex-start"wd="100%">
            <Div bg="#333" jfCont="space-between"br="none">
                <P wd="20%"color="#fff">Producto</P>
                <P wd="20%"color="#fff">Nombre</P>
                <P wd="20%"color="#fff">Cantidad</P>
                <P wd="20%"color="#fff">Precio</P>
                <P wd="20%"color="#fff">Subtotal</P>
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