import CardCart from "./CardCart"
import { Div, P } from "../../../utils/StyledComponents/StyledComponents"
import { useEffect } from "react";
import s from "./CardCart.module.css"
export default function CardsCart({ handlerSetCartFlag, cart, total}){

    return (
        <Div flexDir="column"jfCont="flex-start"wd="100%"
            bg="#fff"pd="1rem"
            boxSh=".1rem .1rem .3rem .1rem #25252586"
        >

            { cart?.length 
            ? cart.map((pr, i)=> 
            // <p>{pr.name}</p>
            <CardCart
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
            />
            )
            : null 
            }
            <div className={s.containerSubTotal}>
              <div className={s.line}></div>
              <div className={s.divSubtotal}>
                <div>
                  <div>
                    <p>Sub-Total</p>
                    <p>{cart.length} Items</p>
                    <p>{cart.reduce((acumulador, valorActual) => {
                        return acumulador + valorActual.amount;
                        }, 0)} unidades
                    </p>
                  </div>
                  <p className={s.total}>${total}</p>
                </div>
                <button>Hacer el pago</button>
              </div>
            </div>
        </Div>
    )
}