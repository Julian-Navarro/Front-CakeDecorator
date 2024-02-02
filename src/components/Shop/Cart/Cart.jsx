import { useNavigate } from "react-router-dom";
import { Div, H1, Button, P } from "../../../utils/StyledComponents/StyledComponents";
import { useEffect, useState } from "react";
import CardsCart from "./CardsCart";
import s from "./Cart.module.css"
export default function Cart () {
    const navigate = useNavigate()
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart === null) cart = [];
    const [cartFlag, setCartFlag] = useState(false);
    const total = cart?.reduce((acc, el) => acc + el.total, 0);
    function handlerSetCartFlag(){
        setCartFlag(!cartFlag)
    }
    useEffect(()=>{
        // console.log("Rendering CART");
        // console.log("CART FLAG: ", cartFlag);
    },[cartFlag])
    return (
        <div className={s.container}>
            <button onClick={()=>navigate("/shop")}
            className={s.btnBack}>
              Seguir comprando
            </button>
            <CardsCart 
            handlerSetCartFlag={handlerSetCartFlag}
            cart={cart}total={total}/>
        </div>
    )
}